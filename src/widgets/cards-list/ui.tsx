import Grid from '@mui/material/Unstable_Grid2';
import Card from '../../entities/card';

const CardsList = ({ items = cards }) => {
	return (
		<Grid
			container
			spacing={2}
			columns={{ xs: 12, sm: 12, md: 12 }}
			justifyContent="flex-start"
			alignItems="center"
		>
			{items.map((item) => {
				return (
					<Grid
						key={item._id}
						justifyContent="center"
						alignItems="center"
						xs={6}
						sm={4}
						md={3}
						sx={{
							position: 'relative',
							overflow: 'hidden',
						}}
					>
						<Card card={item} />
					</Grid>
				);
			})}
		</Grid>
	);
};

export default CardsList;

const cards = [
	{
		_id: ' h54k5j',
		alt: ' скидочная карта',
		url: '#',
		isLiked: false,
	},
	{
		_id: ' h54kfg5j',
		alt: ' скидочная карта',
		url: '#',
		isLiked: true,
	},
	{
		_id: ' h5sd5j',
		alt: ' скидочная карта',
		url: '#',
		isLiked: false,
	},
	{
		_id: ' h54shk5j',
		alt: ' скидочная карта',
		url: '#',
		isLiked: false,
	},
	{
		_id: ' h54974k5j',
		alt: ' скидочная карта',
		url: '#',
		isLiked: false,
	},
	{
		_id: ' 6774k5j',
		alt: ' скидочная карта',
		url: '#',
	},
	{
		_id: ' hwwek5j',
		alt: ' скидочная карта',
		url: '#',
		isLiked: false,
	},
	{
		_id: ' h5dd4k5j',
		alt: ' скидочная карта',
		url: '#',
		isLiked: false,
	},
	{
		_id: ' h5458k5j',
		alt: ' скидочная карта',
		url: '#',
		isLiked: true,
	},
	{
		_id: ' h5407k5j',
		alt: ' скидочная карта',
		url: '#',
		isLiked: false,
	},
	{
		_id: ' h52854k5j',
		alt: ' скидочная карта',
		url: '#',
		isLiked: true,
	},
	{
		_id: ' h5f3494k5j',
		alt: ' скидочная карта',
		url: '#',
		isLiked: false,
	},
	{
		_id: ' hht54k5j',
		alt: ' скидочная карта',
		url: '#',
		isLiked: false,
	},
	{
		_id: ' h604554k5j',
		alt: ' скидочная карта',
		url: '#',
		isLiked: false,
	},
	{
		_id: ' h54dmik5j',
		alt: ' скидочная карта',
		url: '#',
		isLiked: true,
	},
	{
		_id: ' h54sdomvk5j',
		alt: ' скидочная карта',
		url: '#',
	},
	{
		_id: ' h549v4k5j',
		alt: ' скидочная карта',
		url: '#',
		isLiked: true,
	},
];
