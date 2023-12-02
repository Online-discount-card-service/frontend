import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, IconButton, Stack, Box, Typography } from '@mui/material';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { BackButton } from '~/features';
import { CardFull, EditCardForm } from '~/entities';
import { Liker } from '~/features';
import {
  containerStyle,
  buttonStyle,
  topButtonsStyle,
  likerWrapperStyle,
  deleteTitleStyle,
} from './style';
import { CardsContext, MessagesContext } from '~/app';
import { ICardContext, api } from '~/shared';
import { IApiError } from '~/shared/errors';
import { ApiMessageTypes } from '~/shared/enums';

export const CardWidget = () => {
  const { setMessages } = useContext(MessagesContext);
  const { cards, setCards } = useContext(CardsContext);
  const navigate = useNavigate();
  const [isEditActive, setIsEditActive] = useState(false);
  const [isDeleteActive, setIsDeleteActive] = useState(false);
  const id = useParams().id;
  const cardId = Number(id);
  const card: ICardContext = cards.find(
    (item) => item.card.id.toString() === id
  ) || {
    card: {
      id: 0,
      shop: {
        id: 0,
        name: 'Карта не найдена',
      },
      name: 'Карта не найдена',
      card_number: '',
      barcode_number: '',
      pub_date: '',
    },
    owner: true,
    favourite: false,
  };
  const isLiked = card.favourite;

  const handleEditEnable = () => {
    setIsEditActive(true);
  };

  const handleEditDisable = () => {
    setIsEditActive(false);
  };

  const handleActivateRemoveCard = () => {
    setIsDeleteActive(true);
  };

  const handleCancelRemoveCard = () => {
    setIsDeleteActive(false);
  };

  const handleRemoveCard = () => {
    api
      .deleteCard(cardId)
      .then(() => {
        const newCards = cards.filter((card) => card.card.id != cardId);
        return setCards && setCards(newCards);
      })
      .then(() => {
        setMessages((messages) => [
          {
            message: 'Карта удалена',
            type: ApiMessageTypes.success,
          },
          ...messages,
        ]);
        navigate('/');
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
  };

  return (
    <Stack useFlexGap sx={containerStyle}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={topButtonsStyle}
      >
        <BackButton />
        {!isEditActive && (
          <Stack direction="row" spacing={1} useFlexGap>
            <Box sx={{ ...likerWrapperStyle }}>
              <Liker cardId={cardId} isLiked={isLiked} />
            </Box>
            <IconButton onClick={handleEditEnable} sx={{ padding: 0 }}>
              <CreateOutlinedIcon />
            </IconButton>
          </Stack>
        )}
      </Stack>
      <Box
        sx={{
          paddingY: 1.5,
        }}
      >
        <CardFull item={card} />
      </Box>

      <EditCardForm
        isActive={isEditActive}
        card={card}
        handleSubmited={handleEditDisable}
      />
      {!isEditActive && !isDeleteActive && (
        <Stack
          spacing={{ xs: 1, sm: 2 }}
          useFlexGap
          sx={{ paddingTop: '.75rem' }}
        >
          <Button variant="contained" sx={buttonStyle}>
            Поделиться картой
          </Button>
          <Button
            variant="outlined"
            sx={buttonStyle}
            onClick={handleActivateRemoveCard}
          >
            Удалить карту
          </Button>
        </Stack>
      )}
      {isDeleteActive && (
        <Stack
          spacing={{ xs: 1, sm: 2 }}
          useFlexGap
          sx={{ paddingTop: '.75rem' }}
        >
          <Typography sx={deleteTitleStyle}>Удалить карту?</Typography>
          <Button
            variant="contained"
            sx={buttonStyle}
            onClick={handleRemoveCard}
          >
            Да, удалить
          </Button>
          <Button
            variant="outlined"
            sx={buttonStyle}
            onClick={handleCancelRemoveCard}
          >
            Нет, не удалять
          </Button>
        </Stack>
      )}
    </Stack>
  );
};
