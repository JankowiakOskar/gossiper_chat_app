import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from 'store';
import { useToggle } from 'hooks/useToggle';
import { ChatRoom } from 'features/chatRooms/types';
import { signInToRoom } from 'features/chatRooms/chatRoomsSlice';
import { closeModal } from 'features/modal/modalSlice';
import Heading from 'components/atoms/Heading/Heading';
import { useNavigate } from 'react-router-dom';
import { StyledForm, StyledFieldWrapper, StyledInputField, StyledFontAwesomeIcon, StyledButton } from './AccessFormStyles';

const AccessForm = () => {
  const { isActive: isShowedPassword, handleToggle: toggleShowPassword } = useToggle({ initialActive: false });
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      password: '',
    },
  });
  const dispatch = useAppDispatch();
  const { roomSignInId } = useAppSelector(({ chatRooms }) => chatRooms);
  const navigate = useNavigate();

  const processLogin = async ({ password }: Required<Pick<ChatRoom, 'password'>>) => {
    try {
      const result = await dispatch(signInToRoom({ password })).unwrap();

      dispatch(closeModal());

      navigate(`${roomSignInId}`);

      return result;
    } catch (err) {
      reset();

      dispatch(closeModal());

      return err;
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(processLogin)}>
      <Heading title='Access to room' />
      <StyledFieldWrapper>
        <StyledInputField name='password' label='Room password' ref={register} type={isShowedPassword ? 'text' : 'password'} />
        <StyledFontAwesomeIcon onClick={toggleShowPassword} icon={isShowedPassword ? 'eye' : 'eye-slash'} />
      </StyledFieldWrapper>
      <StyledButton type='submit'>Get into room</StyledButton>
    </StyledForm>
  );
};

export default AccessForm;
