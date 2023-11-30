import { AuthForm, changeEmail } from '..';
import { IChangeEmailRequest, authFormErrors } from '~/shared';
import * as z from 'zod';
import { Dispatch, FC, SetStateAction } from 'react';

export const ChangeEmailForm: FC<{
  oldEmail: string;
  setRegistredEmail: Dispatch<SetStateAction<string>>;
  setWantChangeEmail: Dispatch<SetStateAction<boolean>>;
}> = ({ oldEmail, setRegistredEmail, setWantChangeEmail }) => {
  const schema = z.object({
    email: z
      .string({
        required_error: authFormErrors.required,
      })
      .max(30)
      .email({ message: authFormErrors.wrongEmail }),
  });

  const fields = [
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      defaultHelperText: ' ',
      autoComplete: 'email',
      required: true,
    },
  ];

  const submit = (data: { [key: string]: string }) => {
    const request: IChangeEmailRequest = {
      email: data.email || '',
    };
    return changeEmail(request).then((res) => {
      setWantChangeEmail(false);
      return setRegistredEmail(res.email);
    });
  };

  return (
    <AuthForm
      fields={fields}
      schema={schema}
      button={{ label: 'Теперь верно', fullWidth: true }}
      submit={submit}
      defaultValues={{ email: oldEmail }}
    />
  );
};
