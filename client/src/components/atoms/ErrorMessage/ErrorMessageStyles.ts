import styled, { css, keyframes } from 'styled-components';

interface ErrorStyle {
  readonly isError?: boolean;
}

const show = keyframes`
  from {
    opacity: 0;
    transform: translate(0, -2rem)
  }

  to {
    opacity: 1;
    transform: translate(0,0)
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translate(0,0)
  }

  to {
    opacity: 0;
    transform: translate(0, -2rem)
  }
`;

export const StyledErrorMessage = styled.span<ErrorStyle>`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem 0 0;
  color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.font.size.small};
  animation: ${({ isError }) =>
    isError
      ? css`
          ${show} 0.3s ease-in forwards
        `
      : css`
          ${fadeOut} 0.3s ease-out forwards
        `};
`;

export const ErrorText = styled.p`
  margin: 0 0 0 1rem;
  color: ${({ theme }) => theme.colors.red};
`;
