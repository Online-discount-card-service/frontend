import { Dispatch, FC, SetStateAction } from 'react';
import { Container, Typography } from '@mui/material';
import { ChangeEmailForm } from '~/features';
import { containerStyle, titleStyle } from './style';
import { BackButtonToAuth } from '~/features';

export const ChangeEmailWidget: FC<{
  oldEmail: string;
  setRegistredEmail: Dispatch<SetStateAction<string>>;
  setWantChangeEmail: Dispatch<SetStateAction<boolean>>;
}> = ({ oldEmail, setRegistredEmail, setWantChangeEmail }) => {
  return (
    <Container component="section" sx={containerStyle}>
      <BackButtonToAuth />
      <Typography component="h1" sx={titleStyle}>
        Изменить почту
      </Typography>
      <ChangeEmailForm
        oldEmail={oldEmail}
        setRegistredEmail={setRegistredEmail}
        setWantChangeEmail={setWantChangeEmail}
      />
    </Container>
  );
};
