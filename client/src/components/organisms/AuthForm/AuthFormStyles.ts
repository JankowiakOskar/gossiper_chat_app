import styled, { css } from 'styled-components';
import Button from 'components/atoms/Button/ButtonStyles';
import InputField from 'components/molecules/InputField/InputField';

interface WrapperProps {
  readonly isAuthenticate: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  height: fit-content;
  max-width: 50rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  ${({ theme }) => theme.mediaQuery.bigTablet} {
    padding: 3rem 2rem;
    max-width: none;
    width: 40rem;
    border-radius: 2.5rem;
    box-shadow: ${({ theme }) => theme.boxShadow};
    border: 1px solid ${({ theme }) => theme.colors.darkGrey};
  }

  ${({ isAuthenticate }) =>
    isAuthenticate &&
    css`
      &:after {
        content: '';
        opacity: 0.7;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(255, 255, 255, 0.7);
      }
    `}
`;

export const Form = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
`;

export const StyledInputField = styled(InputField)`
  margin-top: 1.5rem;
`;

export const StyledButton = styled(Button)`
  margin: 3rem 0 2rem 0;
  align-self: center;
`;

export const LoaderWrapper = styled.div`
  width: 7rem;
  height: 7rem;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;
