import styled, { css, keyframes } from 'styled-components';

interface CheckboxStyle {
  readonly isCheckbox?: boolean;
}

interface InputStyle extends CheckboxStyle {
  isError?: boolean;
}

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(11,41,83, 0.4);
  }

  70% {
    box-shadow: 0 0 0 1rem rgba(11,41,83, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(11,41,83, 0);
  }
`;

export const StyledInputElement = styled.div<CheckboxStyle>`
  display: flex;
  flex-direction: column;

  ${({ isCheckbox }) =>
    isCheckbox &&
    css`
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      & label {
        order: 1;
        padding: 0 0 0 1rem;
      }
    `}
`;

export const StyledLabel = styled.label``;

export const StyledInput = styled.input<InputStyle>`
  margin-top: 1rem;
  padding: 0 1rem;
  min-width: 24rem;
  height: 4rem;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border: 0.12rem solid ${({ theme }) => theme.colors.black};
  border-radius: 0.5rem;
  transition: border 0.3s ease-in;

  &::placeholder {
    font-size: ${({ theme }) => theme.font.size.small};
    color: ${({ theme }) => theme.colors.darkGrey};
  }

  ${({ isError }) =>
    isError &&
    css`
      border: 0.17rem solid ${({ theme }) => theme.colors.red};
    `};

  ${({ isCheckbox }) =>
    isCheckbox &&
    css`
      appearance: none;
      margin-top: 0;
      min-width: 0;
      width: 2rem;
      height: 2rem;
      box-shadow: none;
      border: 0.1rem solid black;
      transition: background-color 0.07s linear;
      cursor: pointer;

      &:checked {
        position: relative;
        background-color: ${({ theme }) => theme.colors.lightGreen};
        animation: ${pulse} 0.5s linear forwards;

        &:after {
          content: '✔';
          position: absolute;
          top: 0;
          left: 0.3rem;
          color: ${({ theme }) => theme.colors.white};
        }
      }
    `}
`;
