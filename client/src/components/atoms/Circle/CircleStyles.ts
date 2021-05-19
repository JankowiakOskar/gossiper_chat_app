import styled from 'styled-components';
import { Color } from 'utils/types/enums';

type StyleProps = {
  readonly color: Color;
};

export const StyledCircle = styled.div<StyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${props => props.theme.colors[props.color]};
  box-shadow: ${({ theme }) => theme.boxShadow};
  font-weight: bold;
`;
