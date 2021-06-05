import { MdError } from 'react-icons/md';
import { StyledErrorMessage, ErrorText } from './ErrorMessageStyles';

type ErrorMessageProps = {
  message: string;
};

const ErrorMessage = ({ message }: ErrorMessageProps) => (
  <StyledErrorMessage isError={!!message}>
    <MdError />
    <ErrorText>{message}</ErrorText>
  </StyledErrorMessage>
);

export default ErrorMessage;
