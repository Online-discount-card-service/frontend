import { SxProps } from '@mui/material';

export const style: SxProps = {
  width: '100%',
  fontSize: '0.875rem',
  lineHeight: '1.43',
  padding: '1.125rem',
  borderRadius: '.5rem',
  textTransform: 'none',
  backgroundColor: 'trandparent',
  '& .css-scpnlk-MuiButtonBase-root-MuiChip-root': {
    backgroundColor: 'secondary.light',
  },
  '& .MuiChip-clickable:hover': {
    backgroundColor: 'secondary.light',
  },
  '& .MuiChip-clickableColorDefault': {
    backgroundColor: 'secondary.light',
  },
  '& .css-cu95bj-MuiButtonBase-root-MuiChip-root': {
    backgroundColor: 'secondary.light',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#735eab',
  },
  '&:focus': {
    backgroundColor: '#7965af',
  },
};
