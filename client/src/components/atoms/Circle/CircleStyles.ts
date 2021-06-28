import styled from 'styled-components';
import { Color } from 'utils/types/enums';

type StyleProps = {
  readonly bgColor: Color;
  readonly textColor: Color;
};

export const StyledCircle = styled.div<StyleProps>`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${props => props.theme.colors[props.bgColor]};
  color: ${props => props.theme.colors[props.textColor]};
  box-shadow: ${({ theme }) => theme.boxShadow};
  font-weight: bold;
`;
