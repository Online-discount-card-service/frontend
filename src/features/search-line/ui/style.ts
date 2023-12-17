import { SxProps } from '@mui/material';
import loupePath from '~/shared/assets/loupe.svg';

export const searchLineStyle: SxProps = {
  '& .css-1gctnaj-MuiInputBase-input-MuiFilledInput-input': {
    height: '2.5rem',
    borderRadius: '.5rem',
    backgroundColor: 'surface.light',
    boxSizing: 'border-box',
    paddingRight: '4rem',
  },
  '& .css-1gctnaj-MuiInputBase-input-MuiFilledInput-input:hover': {
    backgroundColor: 'secondary.light',
  },
  '& .css-raw2ne-MuiInputBase-root-MuiFilledInput-root:hover': {
    backgroundColor: 'secondary.light',
  },
  '& .css-1gctnaj-MuiInputBase-input-MuiFilledInput-input:active': {
    backgroundColor: 'secondary.light',
  },
  '& .css-raw2ne-MuiInputBase-root-MuiFilledInput-root:active': {
    backgroundColor: 'secondary.light',
  },
  '& .MuiAutocomplete-endAdornment::after': {
    position: 'absolute',
    display: 'block',
    width: '1.25rem',
    height: '1.25rem',
    top: '50%',
    left: 0,
    content: `''`,
    pointerEvents: 'none',
    backgroundImage: `url(${loupePath})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'surface.light',
    transform: 'translate(0, -50%)',
    visibility: 'visible',
  },
  '& .css-raw2ne-MuiInputBase-root-MuiFilledInput-root': {
    backgroundColor: 'surface.light',
    borderRadius: '.5rem',
  },
  '& .MuiFilledInput-root': {
    paddingTop: '0',
    height: '100%',
    borderRadius: '.5rem',
  },
  '& .css-raw2ne-MuiInputBase-root-MuiFilledInput-root:before': {
    borderBottom: 0,
  },
  '& .css-raw2ne-MuiInputBase-root-MuiFilledInput-root:after  ': {
    borderBottom: 0,
  },
  '& .css-raw2ne-MuiInputBase-root-MuiFilledInput-root:hover:not(.Mui-disabled, .Mui-error)::before':
    {
      borderBottom: 0,
    },
  '& .css-1gctnaj-MuiInputBase-input-MuiFilledInput-input:hover + .MuiAutocomplete-endAdornment::after':
    {
      visibility: 'hidden',
    },
  '& .css-1gctnaj-MuiInputBase-input-MuiFilledInput-input:focus + .MuiAutocomplete-endAdornment::after':
    {
      visibility: 'hidden',
    },
  '& .css-1gctnaj-MuiInputBase-input-MuiFilledInput-input:active + .MuiAutocomplete-endAdornment::after':
    {
      visibility: 'hidden',
    },
};
