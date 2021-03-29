import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Routes } from 'routes';
import { useAppDispatch } from 'store';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { signUp, logIn } from 'features/auth/authSlice';
import { UserData } from 'features/auth/types';
import styled from 'styled-components';
import InputField from 'components/atoms/InputField/InputField';
import Brand from 'components/atoms/Brand/Brand';
import Button from 'components/atoms/Button/Button';

const Wrapper = styled.div`
  max-width: 50rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
`;

const StyledInputField = styled(InputField)`
  margin-top: 1.5rem;
`;

const StyledButton = styled(Button)`
  margin: 3rem 0 2rem 0;
  align-self: center;
`;

const registerSchema = yup.object().shape({
  email: yup.string().email('Your email is not correct').required('Email is required'),
  login: yup.string().required('Login is required'),
  password: yup.string().required('Password is required'),
  repeatedPassword: yup
    .string()
    .required('Repeat your password')
    .oneOf([yup.ref('password'), null], 'Passwords must be the same'),
});

const loginSchema = yup.object().shape({
  email: yup.string().email('Your email is not correct').required('Email is required'),
  password: yup.string().required('Password is required'),
});

const AuthForm = () => {
  const [isRegistered, setRegister] = useState(true);
  const { register, handleSubmit, reset, errors } = useForm({
    resolver: yupResolver(isRegistered ? loginSchema : registerSchema),
  });
  const history = useHistory();
  const dispatch = useAppDispatch();

  const switchMode = (): void => setRegister(prevState => !prevState);

  const onSubmit = async (data: UserData): Promise<void> => {
    const { email, login, password } = data;
    if (isRegistered) {
      const resultLogIn = await dispatch(logIn({ email, password }));
      logIn.fulfilled.match(resultLogIn) && history.push(Routes.Home);
    } else {
      const resultSignUp = await dispatch(signUp({ email, login, password }));
      signUp.fulfilled.match(resultSignUp) && switchMode();
    }
    reset();
  };

  useEffect(() => {
    reset();
  }, [isRegistered, reset]);

  return (
    <Wrapper>
      <Brand />
      <Form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
        {isRegistered ? (
          <>
            <InputField name='email' label='Email' type='email' refRegister={register} error={errors.email?.message} />
            <StyledInputField name='password' label='Password' type='password' refRegister={register} error={errors.password?.message} />
          </>
        ) : (
          <>
            <InputField name='email' label='Email' type='email' refRegister={register} error={errors.email?.message} />
            <StyledInputField name='login' label='Login' type='text' refRegister={register} error={errors.login?.message} />
            <StyledInputField name='password' label='Password' type='password' refRegister={register} error={errors.password?.message} />
            <StyledInputField
              name='repeatedPassword'
              label='Repeat Password'
              type='password'
              refRegister={register}
              error={errors.repeatedPassword?.message}
            />
          </>
        )}
        <StyledButton role='submit'>{isRegistered ? 'Log In' : 'Create account'}</StyledButton>
      </Form>
      <Button role='button' onClick={switchMode} underline>
        {isRegistered ? 'Create new account' : 'I want sign in'}
      </Button>
    </Wrapper>
  );
};

export default AuthForm;
