import { FC } from 'react';
import { Card, Box, Typography } from '@mui/material';
import { Liker } from '~/features';
import { ICardContext } from '~/shared/types';
import { cardStyle, titleStyle, likerWrapperStyle } from './style';

export const CardSmall: FC<ICardContext> = (item) => {
  const shopName = item.shop?.name || '';
  const shopLogo = item.shop?.logo || '';
  const isLiked = item.favorite;

  function handleClickLike() {
    return;
  }

  return (
    <Card
      variant="outlined"
      sx={{
        backgroundImage: shopLogo ? `url(${shopLogo})` : '',
        backgroundColor: shopLogo ? '' : '#52358f',
        ...cardStyle,
      }}
    >
      {!shopLogo && <Typography sx={{ ...titleStyle }}>{shopName}</Typography>}
      <Box sx={{ ...likerWrapperStyle }}>
        <Liker onClickLike={handleClickLike} isLiked={isLiked} />
      </Box>
    </Card>
  );
};
