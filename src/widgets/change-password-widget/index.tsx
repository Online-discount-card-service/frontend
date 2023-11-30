import { FC } from 'react';
import { Container, Typography } from '@mui/material';
import { ChangePasswordForm } from '~/features';
import { containerStyle, titleStyle } from './style';
import { BackButtonToAuth } from '~/features';

export const ChangePasswordlWidget: FC<{
  oldPassword: string;
}> = ({ oldPassword }) => {
  return (
    <Container component="section" sx={containerStyle}>
      <BackButtonToAuth />
      <Typography component="h1" sx={titleStyle}>
        Изменить пароль
      </Typography>
      <ChangePasswordForm oldPassword={oldPassword} />
    </Container>
  );
};
