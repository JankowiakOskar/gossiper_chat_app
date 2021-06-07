import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import InputField from 'components/molecules/InputField/InputField';
import { StepThreeWrapper, StyledInput } from './StepThreeStyles';

enum RoomValue {
  FreeRoom = '0',
  PrivateRoom = '1',
}

const StepThree = () => {
  const { register, watch, errors, clearErrors } = useFormContext();
  const roomPasswordError = errors.roomPassword?.message;
  const watchSelectPrivateRoom: RoomValue = watch('privateRoom');
  const isPrivateRoomChoosen = watchSelectPrivateRoom === RoomValue.PrivateRoom;

  useEffect(() => {
    if (roomPasswordError && !isPrivateRoomChoosen) {
      clearErrors('roomPassword');
    }
  }, [isPrivateRoomChoosen, clearErrors, roomPasswordError]);

  return (
    <StepThreeWrapper>
      <h3>Select type of your chat room</h3>
      <label htmlFor='freeRoom'>
        <StyledInput id='freeRoom' type='radio' name='privateRoom' value={RoomValue.FreeRoom} ref={register} defaultChecked />
        Free chat room
      </label>
      <label htmlFor='privateRoom'>
        <StyledInput id='privateRoom' type='radio' name='privateRoom' value={RoomValue.PrivateRoom} ref={register} />
        Private chat room
      </label>
      {isPrivateRoomChoosen && (
        <InputField name='roomPassword' label='Room password' type='password' error={roomPasswordError} ref={register} />
      )}
    </StepThreeWrapper>
  );
};

export default StepThree;
