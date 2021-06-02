import { useFormContext } from 'react-hook-form';
import InputField from 'components/atoms/InputField/InputField';

const StepOne = () => {
  const { register } = useFormContext();

  return (
    <>
      <InputField name='roomName' label='Room Name' type='text' ref={register} />
      <InputField name='roomDescription' label='Room Description' type='text' ref={register} />
    </>
  );
};

export default StepOne;
