import React from 'react';
import useDelayMount from 'hooks/useDelayMount';
import ErrorMessage from 'components/atoms/ErrorMessage/ErrorMessage';
import { StyledInputElement, StyledLabel, StyledInput } from './InputFieldStyles';

type InputTypes = 'text' | 'password' | 'email' | 'checkbox';

type Props = {
  name: string;
  label: string;
  type: InputTypes;
  placeholder?: string;
  error?: string;
  className?: string;
};

const InputField = React.forwardRef<HTMLInputElement, Props>(({ name, label, type, placeholder, className, error = '' }, ref) => {
  const isCheckboxType = type === 'checkbox';
  const { isMounted: isMountedError } = useDelayMount(Boolean(error), 0, 500);

  return (
    <StyledInputElement className={className} isCheckbox={isCheckboxType}>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledInput
        name={name}
        type={type}
        ref={ref}
        {...(isCheckboxType && { value: label })}
        isError={!!error}
        placeholder={placeholder}
        isCheckbox={isCheckboxType}
      />
      {isMountedError && <ErrorMessage message={error} />}
    </StyledInputElement>
  );
});

export default InputField;
