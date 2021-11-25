import { useForm } from 'react-hook-form';
import { useToggle } from 'hooks/useToggle';
import { ChatRoom } from 'features/chatRooms/types';
import Heading from 'components/atoms/Heading/Heading';
import { StyledForm, StyledFieldWrapper, StyledInputField, StyledFontAwesomeIcon, StyledButton } from './AccessFormStyles';

const AccessForm = () => {
  const { isActive: isShowedPassword, handleToggle: toggleShowPassword } = useToggle({ initialActive: false });
  const { register, handleSubmit } = useForm({
    defaultValues: {
      roomPassword: '',
    },
  });

  const processLogin = (data: Required<Pick<ChatRoom, 'password'>>) => {
    console.log(data);
  };
  return (
    <StyledForm onSubmit={handleSubmit(processLogin)}>
      <Heading title="Access to room"/>
      <StyledFieldWrapper>
        <StyledInputField name='roomPassword' label='Room password' ref={register} type={isShowedPassword ? 'text' : 'password'} />
        <StyledFontAwesomeIcon onClick={toggleShowPassword} icon={isShowedPassword ? 'eye' : 'eye-slash'} />
      </StyledFieldWrapper>
      <StyledButton>Get into room</StyledButton>
    </StyledForm>
  );
};

export default AccessForm;
