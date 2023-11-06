import { FC } from 'react';
import { Box, Button, Container, IconButton, Typography } from '@mui/material';
import { AppFooter } from '~/shared/ui';
import { Header } from '~/widgets/header';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CreateIcon from '@mui/icons-material/Create';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

interface AddedCardProps {
  title: string;
  cardNumber: string;
  barcodeNumber: number | string;
}

export const AddedCard: FC<AddedCardProps> = ({
  title,
  cardNumber,
  barcodeNumber,
}) => {
  return (
    <Container
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Header
        user={{ name: 'иван' }}
        isLoggedIn={true}
        type="standard"
      ></Header>
      <Box
        component="div"
        sx={{
          minWidth: '20.5rem',
          margin: 0,
          padding: '1.5rem 0 1rem',
          display: 'flex',
          justifyContent: 'space-between',
          position: 'relative',
        }}
      >
        {/* Нужно менять на линк из React-Router */}
        <a
          href="#"
          style={{
            position: 'absolute',
            fontSize: '0.75rem',
            color: '#737981',
            textDecoration: 'none',
            top: '.3rem',
            left: '.75rem',
          }}
        >
          Назад
        </a>
        <Typography sx={{ fontSize: '2rem' }}>{title}</Typography>
        <IconButton sx={{ padding: 0 }}>
          <CreateIcon></CreateIcon>
        </IconButton>
      </Box>
      <Box>
        <Box
          sx={{
            border: '1px solid rgb(73, 69, 78)',
            width: '20.5rem',
            height: '14rem',
            borderRadius: '1.25rem',
            position: 'relative',
          }}
        >
          <IconButton
            sx={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              padding: 0,
            }}
          >
            <FavoriteBorderIcon></FavoriteBorderIcon>
          </IconButton>
        </Box>
      </Box>
      <Box sx={{ padding: '1.5rem 0 0', minWidth: '20.5rem' }}>
        <Box
          sx={{
            border: '1px solid rgb(73, 69, 78)',
            borderRadius: '.25rem',
            padding: '1rem',
            display: 'flex',
            justifyContent: 'space-between',
            position: 'relative',
          }}
        >
          <Typography
            sx={{
              position: 'absolute',
              color: '#49454F',
              fontSize: '0.75rem',
              top: '-.6rem',
              left: '1rem',
              backgroundColor: '#fff',
              padding: '0 .25rem',
            }}
          >
            Номер карты
          </Typography>
          <Typography>{cardNumber}</Typography>
          <IconButton sx={{ padding: 0 }}>
            <ContentCopyIcon></ContentCopyIcon>
          </IconButton>
        </Box>
      </Box>
      <Box sx={{ padding: '1.5rem 0 0', minWidth: '20.5rem' }}>
        <Box sx={{ color: '#fff', background: '#000' }}>Тут будет штрихкод</Box>
      </Box>
      <Box sx={{ padding: '1.5rem 0 0', minWidth: '20.5rem' }}>
        <Box
          sx={{
            border: '1px solid rgb(73, 69, 78)',
            borderRadius: '.25rem',
            padding: '1rem',
            display: 'flex',
            justifyContent: 'space-between',
            position: 'relative',
          }}
        >
          <Typography
            sx={{
              position: 'absolute',
              color: '#49454F',
              fontSize: '0.75rem',
              top: '-.6rem',
              left: '1rem',
              backgroundColor: '#fff',
              padding: '0 .25rem',
            }}
          >
            Номер штрихкода
          </Typography>
          <Typography>{barcodeNumber}</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '1.5rem 0 2.5rem',
          rowGap: '.5rem',
        }}
      >
        <Button
          variant="contained"
          sx={{
            fontSize: '0.875rem',
            minWidth: '20.5rem',
            padding: '1.125rem 0',
            textTransform: 'none',
          }}
        >
          Поделиться картой
        </Button>
        <Button
          variant="outlined"
          sx={{
            fontSize: '0.875rem',
            minWidth: '20.5rem',
            padding: '1.125rem 0',
            textTransform: 'none',
          }}
        >
          Удалить карту
        </Button>
      </Box>
      <AppFooter></AppFooter>
    </Container>
  );
};
