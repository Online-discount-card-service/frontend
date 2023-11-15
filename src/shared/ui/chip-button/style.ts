import { SxProps } from '@mui/material';

export const wrapStyle: SxProps = {
  display: 'flex',
  minWidth: '5rem',
  maxWidth: '11rem',
  height: '3rem',
  margin: '0 0.25rem',
  padding: '0.5rem',
  flexFlow: 'row nowrap',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderRadius: '0.5rem',
  borderColor: 'surface.main',
  boxSizing: 'border-box',
  cursor: 'pointer',
  transition:
    'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  '&:hover': {
    backgroundColor: '#6750A414',
  },
  '&:active': {
    backgroundColor: '#6750A41F',
  },
};

export const textStyle: SxProps = {
  maxWidth: '100%',
  fontSize: '0.875rem',
  fontWeight: '500',
  lineHeight: '1.1',
  color: 'surface.dark',
  textOverflow: 'ellipsis',
  whiteSpace: 'pre-wrap',
  wordWrap: 'normal',
  boxSizing: 'border-box',
  overflow: 'hidden',
};
