import { FC } from 'react';
import { AuthForm, changePassword } from '..';
import { IChangePasswordRequest, authFormErrors } from '~/shared';
import * as z from 'zod';

export const ChangePasswordForm: FC<{
  oldPassword?: string;
}> = ({ oldPassword }) => {
  const schema = z
    .object({
      password: z
        .string({
          required_error: authFormErrors.required,
        })
        .min(8, { message: authFormErrors.wrongPasswordCreated })
        .max(20, { message: authFormErrors.wrongPasswordCreated })
        .regex(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()-_+=<>?]{1,}$/,
          {
            message: authFormErrors.wrongPasswordCreated,
          }
        ),
      passwordRepeat: z.string({
        required_error: authFormErrors.required,
      }),
    })
    .superRefine(({ passwordRepeat, password }, ctx) => {
      if (passwordRepeat !== password) {
        ctx.addIssue({
          code: 'custom',
          message: authFormErrors.wrongPasswordRepeat,
          path: ['passwordRepeat'],
        });
      }
    });

  const fields = [
    {
      name: 'password',
      label: 'Новый пароль',
      type: 'password',
      defaultHelperText: ' ',
      autoComplete: 'new-password',
      required: true,
    },
    {
      name: 'passwordRepeat',
      label: 'Подтверждение пароля',
      type: 'password',
      defaultHelperText: ' ',
      autoComplete: 'new-password',
      required: true,
    },
  ];

  const submit = (data: { [key: string]: string }) => {
    const request: IChangePasswordRequest = {
      new_password: data.password || '',
      current_password: oldPassword || '',
    };
    return changePassword(request);
  };

  return (
    <AuthForm
      fields={fields}
      schema={schema}
      button={{ label: 'Сохранить', fullWidth: true }}
      submit={submit}
      defaultValues={}
    />
  );
};
