import styled, { css, keyframes } from 'styled-components';

interface Error {
  readonly isError?: boolean;
}

const show = keyframes`
  0%{
    opacity: 0;
    transform: translate(0, -2rem)
  }

  100% {
    opacity: 1;
    transform: translate(0,0)
  }
`;

const StyledInputElement = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label``;

const StyledInput = styled.input<Error>`
  margin-top: 1rem;
  min-width: 24rem;
  height: 4rem;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border: 0.12rem solid ${({ theme }) => theme.colors.black};
  border-radius: 0.5rem;
  transition: 0.3s ease-in;
  ${({ isError }) =>
    isError &&
    css`
      border: 0.17rem solid ${({ theme }) => theme.colors.red};
    `};
`;

const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.red};
  animation: 0.3s ${show} ease-in;
`;

type Props = {
  name: string;
  label: string;
  type: 'text' | 'password' | 'email';
  error?: string;
  className?: string;
  refRegister: any;
};

const InputField: React.FC<Props> = ({ name, label, type, className, refRegister, error = '' }) => (
  <StyledInputElement className={className}>
    <StyledLabel htmlFor={name}>{label}</StyledLabel>
    <StyledInput name={name} type={type} ref={refRegister} isError={!!error} />
    {error && <ErrorMessage>{error}</ErrorMessage>}
  </StyledInputElement>
);

export default InputField;
