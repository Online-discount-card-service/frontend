import { FC } from 'react';
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { iconButtonStyle } from './style';

interface LikerProps {
  isLiked: boolean;
  onClickLike(): void;
}

export const Liker: FC<LikerProps> = ({ isLiked, onClickLike }) => {
  function handleClick() {
    onClickLike();
  }

  return (
    <IconButton size="small" sx={{ ...iconButtonStyle }} onClick={handleClick}>
      {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </IconButton>
  );
};
