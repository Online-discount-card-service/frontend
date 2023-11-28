import { SxProps } from '@mui/material';

export const mainContainerStyle: SxProps = {
  display: 'flex',
  height: '100%',
  paddingBottom: '1rem',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '1rem',
};

export const paragraphStyle: SxProps = {
  width: '100%',
  fontSize: '1rem',
  fontWeight: 500,
  lineHeight: 1.375,
  letterSpacing: 0,
  '@media (max-width:600px)': {
    fontSize: '1.125rem',
  },
};

export const coverImgStyle: SxProps = {
  display: 'block',
  width: '100%',
  minWidth: '320px',
  minHeight: '240px',
  aspectRatio: '1 / 0.75',
  objectFit: 'contain',
  objectPosition: 'center',
  flexShrink: '0',
};
