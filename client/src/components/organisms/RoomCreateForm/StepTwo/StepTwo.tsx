import { useFormContext } from 'react-hook-form';
import useDelayMount from 'hooks/useDelayMount';
import InputField from 'components/molecules/InputField/InputField';
import ErrorMessage from 'components/atoms/ErrorMessage/ErrorMessage';
import { StepTwoWrapper } from './StepTwoStyles';

const StepTwo = () => {
  const { register, errors } = useFormContext();
  const { isMounted: isMountedError } = useDelayMount(Boolean(errors.tags?.message), 0, 500);

  return (
    <StepTwoWrapper>
      <h3>Choose tags to describe your room content</h3>
      <InputField type='checkbox' name='tags' label='free talks' ref={register} />
      <InputField type='checkbox' name='tags' label='economy' ref={register} />
      <InputField type='checkbox' name='tags' label='business' ref={register} />
      <InputField type='checkbox' name='tags' label='cryptocurrency' ref={register} />
      <InputField type='checkbox' name='tags' label='games room' ref={register} />
      {isMountedError && <ErrorMessage message={errors.tags?.message} />}
    </StepTwoWrapper>
  );
};

export default StepTwo;
