import { FC, useContext } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IMask } from 'react-imask';
import { Box, Stack, Link } from '@mui/material';
import { AccentButton, OutlineButton } from '~/shared/ui';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  api,
  FieldType,
  IPatchUser,
  validationLengths,
  validationSchemes,
  IBasicField,
} from '~/shared';
import { UserContext, MessagesContext } from '~/app';
import { InputSelector } from '~/features';
import { ApiMessageTypes } from '~/shared/enums';
import { IApiError } from '~/shared/errors';
import { handleFormFieldsErrors } from '~/features/errors';
import { formStyle, linkStyle, linkGroupStyle } from './style';

interface IFields extends IBasicField {
  name: string;
  phone_number: string;
  email: string;
}

interface IUserProfileForm {
  isActive: boolean;
  onChangePassword: () => void;
  onActivateEmail: () => void;
  onEditDisable: () => void;
}

export const UserProfileForm: FC<IUserProfileForm> = ({
  isActive,
  onEditDisable,
  onChangePassword,
  onActivateEmail,
}) => {
  const { user, setUser } = useContext(UserContext);
  const { setMessages } = useContext(MessagesContext);
  const masked = IMask.createMask({
    mask: '+7 (000) 000-00-00',
  });
  masked.resolve(user?.phone_number || '');

  const schema = z.object({
    name: validationSchemes.name,
    email: validationSchemes.email,
    phone_number: validationSchemes.phone_number,
  });

  const fields: FieldType[] = [
    {
      name: 'name',
      label: 'Имя',
      type: 'text',
      defaultHelperText: ' ',
      placeholder: '',
      autoComplete: 'name',
      required: true,
      hideAsterisk: true,
      maxLength: validationLengths.name,
    },
    {
      name: 'phone_number',
      label: 'Телефон',
      type: 'text',
      defaultHelperText: ' ',
      autoComplete: 'tel',
      required: true,
      placeholder: '+7 (999) 999-99-99',
      maskOptions: {
        mask: '+7 (000) 000-00-00',
      },
      hideAsterisk: true,
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      defaultHelperText: user?.is_active ? ' ' : 'Ваш Email не подтвержден',
      placeholder: '',
      autoComplete: 'email',
      required: true,
      hideAsterisk: true,
      maxLength: validationLengths.email,
    },
  ];

  const {
    register,
    handleSubmit,
    setError,
    getValues,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<IFields>({
    mode: 'onTouched',
    resolver: zodResolver(schema),
    defaultValues: {
      name: user?.name || '',
      email: user?.email || '',
      phone_number: masked.value,
    },
  });

  const handleCancelChanges = () => {
    reset();
    onEditDisable();
  };

  const handleError = (err: IApiError) => {
    const fields = Object.keys(getValues());
    if (err.status === 400 && err.detail && !err.detail.non_field_errors) {
      handleFormFieldsErrors(err, fields, setError);
    } else {
      setMessages((messages) => [
        {
          message:
            err.detail?.non_field_errors?.join(' ') ||
            err.message ||
            'Ошибка сервера',
          type: ApiMessageTypes.error,
        },
        ...messages,
      ]);
    }
  };

  const onSubmit: SubmitHandler<IFields> = (data) => {
    const request: IPatchUser = {
      name: data.name || '',
      email: data.email || '',
      phone_number:
        data.phone_number.replace(/\D/g, '').replace(/^7/, '') || '',
    };

    if (
      request.name === user?.name &&
      request.email === user?.email &&
      request.phone_number === user?.phone_number
    ) {
      setMessages((messages) => [
        {
          message: 'Данные не поменялись, но мы все сохранили',
          type: ApiMessageTypes.error,
        },
        ...messages,
      ]);
      onEditDisable();
      return;
    }

    api
      .editUser(request)
      .then((res) => {
        return setUser && setUser(res);
      })
      .then(() => {
        setMessages((messages) => [
          {
            message: 'Данные успешно изменены',
            type: ApiMessageTypes.success,
          },
          ...messages,
        ]);
        onEditDisable();
      })
      .catch(handleError);
  };

  return (
    <Box
      component="form"
      sx={formStyle}
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      {fields[0] &&
        fields.map((field) => (
          <InputSelector
            {...field}
            disabled={!isActive || isSubmitting}
            key={field.name}
            register={register(field.name)}
            error={errors[field.name]}
          />
        ))}
      <Stack sx={linkGroupStyle} useFlexGap spacing={2}>
        {!user?.is_active && (
          <Link onClick={onActivateEmail} sx={{ ...linkStyle }}>
            Подтвердить Email
          </Link>
        )}
        <Link onClick={onChangePassword} sx={{ ...linkStyle }}>
          Изменить пароль
        </Link>
      </Stack>

      {isActive && (
        <Stack spacing={{ xs: 1, sm: 2 }} useFlexGap>
          <AccentButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Подождите...' : 'Сохранить'}
          </AccentButton>
          <OutlineButton
            type="button"
            disabled={isSubmitting}
            onClick={handleCancelChanges}
          >
            Отменить изменения
          </OutlineButton>
        </Stack>
      )}
    </Box>
  );
};
