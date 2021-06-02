import { Header, Title, Text } from './HeadingStyles';

type HeadingProps = {
  title: string;
  subtitle?: string;
};

const Heading = ({ title, subtitle }: HeadingProps) => (
  <Header>
    <Title>{title}</Title>
    {subtitle && <Text>{subtitle}</Text>}
  </Header>
);

Heading.defaultProps = {
  subtitle: '',
};

export default Heading;
