import { SxProps } from '@mui/material';

export const carouselWindowStyle: SxProps = {
  position: 'relative',
  display: 'flex',
  width: '100%',
  maxWidth: '100%',
  margin: '0',
  padding: '0',
  flexFlow: 'column nowrap',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '0.75rem',
  overflow: 'hidden',
};

export const ulStyle: SxProps = {
  display: 'flex',
  width: '100%',
  margin: '0',
  padding: '0',
  flexFlow: 'row nowrap',
  justifyContent: 'flex-start',
  gap: '1rem',
  listStyle: 'none',
  transition: 'transform 1s ease-out',
};

export const liStyle: SxProps = {
  display: 'flex',
  width: 'calc((100% - 1rem) / 2)',
  maxWidth: '100%',
  flexFlow: 'row nowrap',
  justifyContent: 'center',
  flexShrink: '0',
};

export const navStyle01: SxProps = {
  position: 'absolute',
  display: 'flex',
  width: '100%',
  height: '100%',
  margin: '0',
  padding: '0',
  flexFlow: 'row nowrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  opacity: '0',
  zIndex: 2,
  transition: 'opacity 250ms ease-in',
  '&:hover': {
    opacity: '1',
  },
};

export const navStyle02: SxProps = {
  position: 'absolute',
  display: 'flex',
  width: '6rem',
  height: '6rem',
  top: 'calc(50% - 3rem)',
  margin: '0',
  padding: '0',
  flexFlow: 'column nowrap',
  justifyContent: 'center',
  opacity: '1',
  zIndex: 2,
};

export const iconButtonStyle: SxProps = {
  padding: '0.75rem',
  color: 'primary.light',
  '&:disabled': {
    color: 'primary.light',
    opacity: '0.5',
  },
  '@media (min-width:600px)': {
    padding: '1.5rem',
  },
  '@media (min-width:480px)': {
    padding: '1rem',
  },
};

export const arrowStyle: SxProps = {
  fontSize: '1.5rem',
  '@media (min-width:900px)': {
    fontSize: '3rem',
  },
  '@media (min-width:600px)': {
    fontSize: '2rem',
  },
};
