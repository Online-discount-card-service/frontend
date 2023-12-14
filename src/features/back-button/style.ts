import { SxProps } from '@mui/material';

export const backButtonStyle: SxProps = {
  color: 'secondary.main',
  justifyContent: 'flex-start',
  fontSize: 12,
  fontWeight: 500,
  lineHeight: 1.33,
  letterSpacing: '-0.12px',
  padding: 0,
  margin: 0,
  border: 'none',
  '&:hover': {
    color: 'primary.main',
    backgroundColor: 'transparent',
  },
};

export const iconStyle: SxProps = {
  height: '6px',
  width: '6px',
  marginLeft: 0,
};
