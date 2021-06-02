import { Color } from 'utils/types/enums';
import { StyledCircle } from './CircleStyles';

type Props = {
  numInside: number;
  bgColor?: Color;
  textColor?: Color;
  className?: string;
};

const Circle = ({ numInside, bgColor, textColor, className }: Props) => (
  <StyledCircle className={className} bgColor={bgColor || Color.LightBlue} textColor={textColor || Color.White}>
    {numInside}
  </StyledCircle>
);

Circle.defaultProps = {
  className: '',
  bgColor: '',
  textColor: '',
};

export default Circle;
