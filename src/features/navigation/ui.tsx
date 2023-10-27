import BoxMUI from '../../shared/ui/box-mui';
import LinkMUI from '../../shared/ui/link-mui';

function Navigation({ items }) {
	return (
		<BoxMUI
			component="nav"
			sx={{
				displayPrint: 'flex',
				width: '40%',
				margin: 0,
				padding: 0,
				flexFlow: 'row nowrap',
				justifyContent: 'flex-start',
				alignItems: 'center',
				gap: 20,
			}}
		>
			{items.map((item) => {
				return (
					<LinkMUI href={item.url} text={item.text} isActive={item.isActive} />
				);
			})}
		</BoxMUI>
	);
}

export default Navigation;
