import { useForm } from 'react-hook-form';
import InputField from 'components/molecules/InputField/InputField';
import Button from 'components/atoms/Button/ButtonStyles';
import { useToggle } from 'hooks/useToggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChatRoom } from 'features/chatRooms/types';
import { StyledFieldWrapper } from './AccessFormStyles';

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
    <form onSubmit={handleSubmit(processLogin)}>
      <StyledFieldWrapper>
        <InputField name='roomPassword' label='Room password' ref={register} type={isShowedPassword ? 'text' : 'password'} />
        <FontAwesomeIcon onClick={toggleShowPassword} icon={isShowedPassword ? 'eye' : 'eye-slash'} />
      </StyledFieldWrapper>
      <Button>Get into room</Button>
    </form>
  );
};

export default AccessForm;
