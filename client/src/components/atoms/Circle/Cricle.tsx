import { Color } from 'utils/types/enums';
import { StyledCircle } from './CircleStyles';

type Props = {
  numInside: number;
  color: Color;
  className?: string;
};

const Circle = ({ numInside, color, className }: Props) => (
  <StyledCircle className={className} color={color}>
    {numInside}
  </StyledCircle>
);

Circle.defaultProps = {
  className: '',
};

export default Circle;
