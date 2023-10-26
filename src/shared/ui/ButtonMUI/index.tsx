import { FC } from 'react';
import Button from '@mui/material/Button';

interface ButtonMUIProps {
	text: string;
	isEnabled: boolean;
}

const ButtonMUI: FC<ButtonMUIProps> = ({ text, isEnabled, ...props }) => {
	return (
		<Button variant="contained" disabled={!isEnabled} {...props}>
			{text}
		</Button>
	);
};

export default ButtonMUI;
