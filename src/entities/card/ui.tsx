import { Box } from '@mui/material';
import { Paper } from '@mui/material';
import { Link } from '@mui/material';
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Card = ({ card }) => {
	return (
		<Link
			href="#"
			target="_blank"
			rel="noopener noreferrer"
			sx={{
				padding: 0,
				margin: 0,
				fontSize: 0,
			}}
		>
			<Paper
				elevation={2}
				sx={{
					borderRadius: '20px',
				}}
			>
				<Box
					component="img"
					sx={{
						display: 'block',
						width: '100%',
						aspectRatio: '1 / 0.63',
						backgroundColor: '#EBEDF0',
						objectFit: 'cover',
						objectPosition: 'center',
						borderRadius: '20px',
						overflow: 'hidden',
					}}
					alt={card.alt || 'скидочная карта'}
					src={card.url || '#'}
				/>
			</Paper>
			<IconButton
				aria-label="heart symbol"
				sx={{
					position: 'absolute',
					top: '1rem',
					right: '1.5rem',
					color: '#fff',
					zIndex: '2',
				}}
			>
				{card.isLiked ? (
					<FavoriteIcon fontSize="medium" />
				) : (
					<FavoriteBorderIcon fontSize="medium" />
				)}
			</IconButton>
		</Link>
	);
};

export default Card;
