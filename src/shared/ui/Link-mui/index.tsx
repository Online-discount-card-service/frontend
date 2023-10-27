import Link from '@mui/material/Link';

const LinkMUI = ({ text, isActive, ...props }) => {
	return (
		<Link
			variant="inherit"
			underline="none"
			color={isActive ? 'primary' : 'secondary'}
			{...props}
		>
			{text}
		</Link>
	);
};

export default LinkMUI;
