import { Header, Title, Text } from './HeadingStyles';

type HeadingProps = {
  title: string;
  subtitle?: string;
};

const Heading: React.FC<HeadingProps> = ({ title, subtitle = '' }) => (
  <Header>
    <Title>{title}</Title>
    {subtitle && <Text>{subtitle}</Text>}
  </Header>
);

export default Heading;
