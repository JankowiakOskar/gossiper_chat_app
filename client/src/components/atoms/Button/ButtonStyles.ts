import styled, { css } from 'styled-components';
import { Color } from 'utils/types/enums';

export interface ButtonProps {
  readonly underline?: boolean;
  readonly color?: Color;
}

const Button = styled.button<ButtonProps>`
  width: 20rem;
  height: 4.5rem;
  background-color: ${({ theme }) => theme.colors.lightGreen};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.size.small};
  border-radius: 0.5rem;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  filter: drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.25));

  ${({ color }) =>
    color &&
    css`
      background-color: ${({ theme }) => theme.colors[color]};
    `}

  ${({ underline }) =>
    underline &&
    css`
      background-color: transparent;
      color: ${({ theme }) => theme.colors.black};
      border-bottom: 0.1rem solid ${({ theme }) => theme.colors.black};
      text-transform: none;
      border-radius: 0;
      height: 3rem;
    `}
`;

export default Button;
