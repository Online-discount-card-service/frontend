import { Box } from '@mui/material';
import ChipButton from '../../shared/ui/chip-button';

function SearchChips({ items = defaultItems }) {
	return (
		<Box
			sx={{
				display: 'flex',
				width: '100%',
				height: 'auto',
				margin: 0,
				padding: 0,
				flexFlow: 'row wrap',
				justifyContent: 'flex-start',
				alignItems: 'center',
				gap: '0.5rem 0.75rem',
			}}
		>
			{items.map((item) => {
				return <ChipButton key={item.label}>{item.label}</ChipButton>;
			})}
		</Box>
	);
}

export default SearchChips;

const defaultItems = [
	{ label: 'все' },
	{ label: 'продукты' },
	{ label: 'аптеки' },
	{ label: 'спорт' },
	{ label: 'зоомир' },
	{ label: 'канцелярия' },
	{ label: 'развлечения' },
];
