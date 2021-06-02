import { useFormContext } from 'react-hook-form';
import InputField from 'components/atoms/InputField/InputField';

const StepTwo = () => {
  const { register } = useFormContext();

  return (
    <>
      <h3>Choose tags to describe your room content</h3>
      <InputField type='checkbox' name='tags' label='free talks' ref={register} />
      <InputField type='checkbox' name='tags' label='economy' ref={register} />
      <InputField type='checkbox' name='tags' label='business' ref={register} />
      <InputField type='checkbox' name='tags' label='cryptocurrency' ref={register} />
      <InputField type='checkbox' name='tags' label='games room' ref={register} />
    </>
  );
};

export default StepTwo;
