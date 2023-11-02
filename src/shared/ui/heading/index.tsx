import { Typography } from '@mui/material';
import { useTheme } from '@mui/material';
import {
	createTheme,
	responsiveFontSizes,
	ThemeProvider,
} from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);

const Heading = ({ ...props }) => {
	const fontTheme = useTheme();

	return (
		<ThemeProvider theme={theme}>
			<Typography
				{...props}
				sx={{
					fontFamily: `${fontTheme.typography.fontFamily}`,
					fontWeight: '500',
				}}
			/>
		</ThemeProvider>
	);
};

export default Heading;
