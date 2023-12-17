import { FC, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Stack,
} from '@mui/material';
import { AccentButton, OutlineButton } from '~/shared/ui';
import { UserContext, MessagesContext } from '~/app';
import {
  BackButtonToUserProfile,
  requestResetPassword,
  ChangePasswordForm,
} from '~/features';
import { IApiError } from '~/shared/errors';
import { ApiMessageTypes } from '~/shared/enums';
import {
  api,
  IRequestResetPassword,
  IChangePasswordRequest,
  Popup,
} from '~/shared';
import {
  containerStyle,
  titleStyle,
  titlePopupStyle,
  textPopupStyle,
  itemPopupStyle,
} from './style';

export const ChangePasswordWidget: FC<{
  onShowPasswordResetSuccess: () => void;
}> = ({ onShowPasswordResetSuccess }) => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { setMessages } = useContext(MessagesContext);
  const [isConfirmSendPasswordOpen, setIsConfirmSendPasswordOpen] =
    useState(false);

  const handlePopupOpen = () => {
    setIsConfirmSendPasswordOpen(true);
  };

  const handlePopupClose = () => {
    setIsConfirmSendPasswordOpen(false);
  };

  const handleResetPassword = () => {
    const request: IRequestResetPassword = {
      phone_last_digits: user?.phone_number?.slice(6) ?? '',
      email: user?.email ?? '',
    };
    return requestResetPassword(request).then(() =>
      onShowPasswordResetSuccess()
    );
  };

  const handleSuccess = () => {
    setMessages((messages) => [
      {
        message: 'Пароль успешно изменён',
        type: ApiMessageTypes.success,
      },
      ...messages,
    ]);
  };

  function handleSubmit(data: IChangePasswordRequest) {
    return api
      .changePassword(data)
      .then(() => {
        handleSuccess();
        setTimeout(() => navigate('/', { replace: true }), 3000);
      })
      .catch((err: IApiError) => {
        setMessages((messages) => [
          {
            message: err.message,
            type: ApiMessageTypes.error,
          },
          ...messages,
        ]);
      });
  }

  return (
    <Container component="section" sx={containerStyle}>
      <BackButtonToUserProfile />
      <Typography component="h1" variant="h1" sx={titleStyle}>
        Изменить пароль
      </Typography>
      <ChangePasswordForm handleSubmit={handleSubmit} />
      <OutlineButton type="button" onClick={handlePopupOpen}>
        Не помню пароль
      </OutlineButton>
      <Popup
        open={isConfirmSendPasswordOpen}
        onClose={handlePopupClose}
        showCloseButton={true}
      >
        <DialogTitle sx={titlePopupStyle}>Отправить письмо?</DialogTitle>
        <DialogContent sx={itemPopupStyle}>
          <DialogContentText sx={textPopupStyle}>
            {`Мы можем сбросить старый пароль, отправив ссылку на почту ${user?.email}`}
          </DialogContentText>
        </DialogContent>
        <Stack useFlexGap>
          <AccentButton
            sx={{ marginTop: '.5rem' }}
            onClick={handleResetPassword}
          >
            Отправить
          </AccentButton>
        </Stack>
      </Popup>
    </Container>
  );
};
