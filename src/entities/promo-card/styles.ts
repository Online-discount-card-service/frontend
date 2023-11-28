import { SxProps } from '@mui/material';

export const nonInteractiveCardStyle: SxProps = {
  position: 'relative',
  display: 'block',
  width: '100%',
  minWidth: '8.5rem',
  minHeight: '5.875rem',
  aspectRatio: '1 / 0.69',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: '.5rem',
  cursor: 'default',
};

export const interactiveCardStyle: SxProps = {
  position: 'relative',
  display: 'block',
  width: '100%',
  minWidth: '8.5rem',
  minHeight: '5.875rem',
  aspectRatio: '1 / 0.6924',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: '.5rem',
  cursor: 'pointer',
  filter: 'brightness(100%)',
  transition: 'filter 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  '&:hover': {
    filter: 'brightness(90%)',
  },
};

export const iconButtonStyle: SxProps = {
  position: 'absolute',
  display: 'flex',
  width: '100%',
  height: '100%',
  color: 'primary.light',
  flexFlow: 'row nowrap',
  justifyContent: 'center',
  alignItems: 'center',
  opacity: '0',
  zIndex: 1,
  transition: 'opacity 250ms ease-in',
  '&:hover': {
    opacity: '1',
  },
  '@media (min-width:600px)': {
    padding: '1.5rem',
  },
};

export const addIconStyle: SxProps = {
  fontSize: '3rem',
  '@media (min-width:600px)': {
    fontSize: '4rem',
  },
};
