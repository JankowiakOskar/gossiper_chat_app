import { useFormContext } from 'react-hook-form';
import InputField from 'components/molecules/InputField/InputField';
import { StepOneWrapper } from './StepOneStyles';

const StepOne = () => {
  const { register, errors } = useFormContext();

  return (
    <StepOneWrapper>
      <InputField name='name' label='Room name' type='text' error={errors.roomName?.message} ref={register} />
      <InputField
        name='description'
        label='Room description'
        placeholder='etc.talks about money'
        type='text'
        error={errors.roomDescription?.message}
        ref={register}
      />
    </StepOneWrapper>
  );
};

export default StepOne;
