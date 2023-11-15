import { Box, Typography } from '@mui/material';
import { wrapStyle, textStyle } from './style';

interface ChipButtonProps {
  label: string;
}

export const ChipButton = ({ label }: ChipButtonProps) => {
  return (
    <Box sx={{ ...wrapStyle }}>
      <Typography sx={{ ...textStyle }} children={label} />
    </Box>
  );
};
