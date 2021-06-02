import React from 'react';
import { StyledInputElement, StyledLabel, StyledInput, ErrorMessage } from './InputFieldStyles';

type InputTypes = 'text' | 'password' | 'email' | 'checkbox';

type Props = {
  name: string;
  label: string;
  type: InputTypes;
  error?: string;
  className?: string;
};

const InputField = React.forwardRef<HTMLInputElement, Props>(({ name, label, type, className, error = '' }, ref) => {
  const isCheckboxType = type === 'checkbox';

  return (
    <StyledInputElement className={className} isCheckbox={isCheckboxType}>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledInput
        name={name}
        type={type}
        ref={ref}
        {...(isCheckboxType && { value: label })}
        isError={!!error}
        isCheckbox={isCheckboxType}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </StyledInputElement>
  );
});

export default InputField;
