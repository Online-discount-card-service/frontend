import { FC, useState, useEffect, useRef } from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import { PromoCard } from '~/entities/promo-card';
import { defaultPromoCards } from '~/shared/mock/default-promo-cards';
import {
  ulStyle,
  liStyle,
  carouselWindowStyle,
  navStyle01,
  navStyle02,
  iconButtonStyle,
  arrowStyle,
} from './style';

interface CarouselProps {
  items: {
    _id: string;
    category: string;
    shopName: string;
    shopLogo: string;
  }[];
  isLoggedIn: boolean;
}

export const Carousel: FC<CarouselProps> = ({
  items = defaultPromoCards,
  isLoggedIn,
}) => {
  const [value, setValue] = useState(0);
  const [delta, setDelta] = useState(0);
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const carouselWindow = useRef();

  useEffect(() => {
    const currentDelta =
      carouselWindow.current.offsetWidth + convertRemToPixels(1);
    setDelta(currentDelta);
  }, []);

  useEffect(() => {
    if (value === delta * 2) {
      setIsStart(false);
      setIsEnd(true);
    } else if (value === 0) {
      setIsStart(true);
      setIsEnd(false);
    } else {
      setIsStart(false);
      setIsEnd(false);
    }
  }, [value, delta]);

  function handleNextClick() {
    setValue(value + delta);
  }

  function handlePrevClick() {
    setValue(value - delta);
  }

  function convertRemToPixels(rem: number) {
    return (
      rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
    );
  }

  function handleCardClick(item: {
    _id: string;
    category: string;
    shopName: string | null;
    shopLogo: string | null;
  }) {
    console.log(item);
  }

  return (
    <Box ref={carouselWindow} sx={{ ...carouselWindowStyle }}>
      <Box
        component="ul"
        sx={{
          transform: `translateX(-${value}px)`,
          ...ulStyle,
        }}
      >
        {items.map((item) => {
          return (
            <Box component="li" key={item._id} sx={{ ...liStyle }}>
              <PromoCard
                item={item}
                onCardClick={handleCardClick}
                isLoggedIn={isLoggedIn}
              />
            </Box>
          );
        })}
      </Box>
      {isLoggedIn ? (
        <>
          <Box
            sx={{
              left: '0',
              alignItems: 'flex-start',
              ...navStyle02,
            }}
          >
            <IconButton
              onClick={handleNextClick}
              disabled={isEnd}
              color="secondary"
              sx={{ ...iconButtonStyle }}
            >
              <ArrowBackIosOutlinedIcon sx={{ ...arrowStyle }} />
            </IconButton>
          </Box>
          <Box
            sx={{
              right: '0',
              alignItems: 'flex-end',
              ...navStyle02,
            }}
          >
            <IconButton
              onClick={handlePrevClick}
              disabled={isStart}
              sx={{ ...iconButtonStyle }}
            >
              <ArrowForwardIosOutlinedIcon sx={{ ...arrowStyle }} />
            </IconButton>
          </Box>
        </>
      ) : (
        <Box sx={{ ...navStyle01 }}>
          <IconButton
            onClick={handleNextClick}
            disabled={isEnd}
            color="secondary"
            sx={{ ...iconButtonStyle }}
          >
            <ArrowBackIosOutlinedIcon sx={{ ...arrowStyle }} />
          </IconButton>
          <IconButton
            onClick={handlePrevClick}
            disabled={isStart}
            sx={{ ...iconButtonStyle }}
          >
            <ArrowForwardIosOutlinedIcon sx={{ ...arrowStyle }} />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};
