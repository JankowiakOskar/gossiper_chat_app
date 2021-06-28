import styled, { css } from 'styled-components';
import { Color } from 'utils/types/enums';

export interface ButtonProps {
  readonly underline?: boolean;
  readonly color?: Color;
  readonly remWidth?: number;
}

const Button = styled.button<ButtonProps>`
  position: relative;
  padding: 1.5rem 2rem;
  width: ${({ remWidth }) => (remWidth ? `${remWidth}rem` : '20rem')};
  background-color: ${({ theme }) => theme.colors.lightGreen};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.size.small};
  border-radius: 0.5rem;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  filter: drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.25));
  transition: all 0.2s ease;

  &:disabled {
    opacity: 0.7;
  }

  &:hover {
    box-shadow: inset 0 0 10rem 10rem rgba(255, 255, 255, 0.1);
  }

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
      width: fit-content;
    `}
`;

export default Button;
