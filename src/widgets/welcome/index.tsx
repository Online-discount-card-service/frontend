import { FC } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { AccentButton } from '~/shared/ui';
import { Carousel } from '~/features';
import { defaultPromoCards } from '~/shared/mock';
import coverImage from '~/shared/assets/payment-bw-1.svg';
import { coverImgStyle, mainContainerStyle, paragraphStyle } from './styles';

type WelcomeProps = {
  user: {
    name: string;
  };
};

export const Welcome: FC<WelcomeProps> = ({ user }) => {
  return (
    <Container component="main" sx={{ ...mainContainerStyle }}>
      <Typography
        component="h1"
        variant="h1"
        textAlign="left"
        sx={{ width: '100%' }}
      >
        {`Привет, ${user.name || 'Приятель'}!`}
      </Typography>

      <Box
        component="img"
        sx={{ ...coverImgStyle }}
        alt={`персонаж, подбрасывающий монету`}
        src={coverImage}
      />

      <Typography
        component="p"
        sx={{
          padding: '2rem 0',
          ...paragraphStyle,
        }}
      >
        Здесь пока нет добавленных карт
      </Typography>

      <AccentButton children={'Добавить карту'} />

      <Typography
        component="p"
        textAlign="left"
        sx={{
          padding: '1.5rem 0 0.5rem',
          ...paragraphStyle,
        }}
      >
        Можно добавить
      </Typography>

      <Carousel items={defaultPromoCards} isLoggedIn={true} />
    </Container>
  );
};
