import { useTheme } from '@mui/material';
import Button from '@mui/material/Button';

const ChipButton = ({ ...props }) => {
	const theme = useTheme();

	return (
		<Button
			variant="outlined"
			sx={{
				padding: '10px 24px',
				textTransform: 'capitalize',
				color: `${theme.palette.secondary.main}`,
				borderRadius: '0.5rem',
				borderColor: `${theme.palette.surface.main}`,
				'&:hover': {
					borderColor: '#98A2B3',
					backgroundColor: '#6750A414',
				},
				'&:active': {
					borderColor: '#98A2B3',
					backgroundColor: '#6750A41F',
				},
			}}
			{...props}
		/>
	);
};

export default ChipButton;
