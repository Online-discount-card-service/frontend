import { useNavigate } from 'react-router-dom';
import { AuthForm } from '..';
import { authFormErrors } from '~/shared/lib';
import * as z from 'zod';

export const SignUpForm = () => {
  const navigate = useNavigate();
  const schema = z
    .object({
      name: z.string({
        required_error: authFormErrors.required,
        invalid_type_error: authFormErrors.wrongType,
      }),
      email: z
        .string({
          required_error: authFormErrors.required,
          invalid_type_error: authFormErrors.wrongType,
        })
        .email({ message: authFormErrors.wrongEmail }),
      phone: z
        .string({
          required_error: authFormErrors.required,
          invalid_type_error: authFormErrors.wrongType,
        })
        .min(10, { message: authFormErrors.minTenSymbols })
        .regex(/^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/, {
          message: authFormErrors.wrongPhone,
        }),
      password: z
        .string({
          required_error: authFormErrors.required,
          invalid_type_error: authFormErrors.wrongType,
        })
        .min(8, { message: authFormErrors.minEightSymbols }),
      passwordRepeat: z.string({
        required_error: authFormErrors.required,
        invalid_type_error: authFormErrors.wrongType,
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
      name: 'name',
      label: 'Имя',
      type: 'text',
      defaultHelperText: 'Как к вам обращаться?',
      autoComplete: 'name',
      required: true,
      placeholder: '',
    },
    {
      name: 'phone',
      label: 'Телефон',
      type: 'tel',
      defaultHelperText: ' ',
      autoComplete: 'tel',
      required: true,
      placeholder: '+7 (999) 999-99-99',
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      defaultHelperText: ' ',
      autoComplete: 'email',
      required: true,
      placeholder: '',
    },
    {
      name: 'password',
      label: 'Пароль',
      type: 'password',
      defaultHelperText: ' ',
      autoComplete: 'new-password',
      required: true,
      placeholder: '',
    },
    {
      name: 'passwordRepeat',
      label: 'Пароль еще раз',
      type: 'password',
      defaultHelperText: ' ',
      autoComplete: 'new-password',
      required: true,
      placeholder: '',
    },
  ];

  const submit = () => {
    navigate('/authorizedNoCards', { relative: 'path' });
  };

  return (
    <AuthForm
      fields={fields}
      schema={schema}
      button={{ label: 'Далее', fullWidth: true }}
      submit={submit}
    />
  );
};
