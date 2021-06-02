import InputField from 'components/atoms/InputField/InputField';
import { useFormContext } from 'react-hook-form';

const StepThree = () => {
  const { register, watch, errors } = useFormContext();
  const watchSelectPrivateRoom = watch('privateRoom');

  return (
    <>
      <h3>Select type of your chat room</h3>
      <label htmlFor='privateRoom'>
        <input type='radio' name='privateRoom' value={0} ref={register} defaultChecked />
        Free chat room
      </label>
      <label htmlFor='privateRoom'>
        <input type='radio' name='privateRoom' value={1} ref={register} />
        Private chat room
      </label>
      {watchSelectPrivateRoom > 0 && (
        <InputField name='roomPassword' label='Room password' type='password' error={errors.roomPassword?.message} ref={register} />
      )}
    </>
  );
};

export default StepThree;
