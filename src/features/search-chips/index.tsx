import Slider from 'react-slick';
import { Box } from '@mui/material';
import { ChipButton } from '~/shared/ui';
import { chipsLabels } from '~/shared/mock/chips-labels';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { sliderWindowStyle } from './style';
import './style.css';

export const SearchChips = ({ items = chipsLabels }) => {
  interface SliderSettings {
    infinite: boolean;
    slidesToShow: number;
    slidesToScroll: number;
    speed: number;
    cssEase: string;
    responsive: {
      breakpoint: number;
      settings: {
        slidesToShow: number;
        slidesToScroll: number;
      };
    }[];
  }

  const settings: SliderSettings = {
    infinite: false,
    slidesToShow: 7,
    slidesToScroll: 7,
    speed: 1000,
    cssEase: 'ease',
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <Box sx={{ ...sliderWindowStyle }}>
      <Slider {...settings}>
        {items.map((item) => {
          return <ChipButton key={item.label} label={item.label} />;
        })}
      </Slider>
    </Box>
  );
};
