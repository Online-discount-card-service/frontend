import { FC } from 'react';
import Heading from '../../shared/ui/heading';

interface TitleProps {
	text: string;
}

const Title: FC<TitleProps> = ({ text }) => {
	return <Heading component="h2" variant="h4" children={text} />;
};

export default Title;
