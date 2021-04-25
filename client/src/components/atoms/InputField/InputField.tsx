import { StyledInputElement, StyledLabel, StyledInput, ErrorMessage } from './InputFieldStyles';

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
