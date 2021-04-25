import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Routes } from 'routes';
import { useAppDispatch, useAppSelector } from 'store';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { signUp, logIn } from 'features/auth/authSlice';
import { UserData } from 'features/auth/types';
import { Color } from 'utils/types/enums';
import styled, { css } from 'styled-components';
import InputField from 'components/atoms/InputField/InputField';
import Brand from 'components/atoms/Brand/Brand';
import Button from 'components/atoms/Button/ButtonStyles';
import LoaderComponent from 'components/molecules/LoaderComponent/LoaderComponent';

interface WrapperProps {
  readonly isAuthenticate: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  max-height: 50rem;
  max-width: 50rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  ${({ isAuthenticate }) =>
    isAuthenticate &&
    css`
      &:after {
        content: '';
        opacity: 0.7;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(255, 255, 255, 0.7);
      }
    `}
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

const LoaderWrapper = styled.div`
  width: 7rem;
  height: 7rem;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
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
  const { isAuthenticate } = useAppSelector(state => state.auth);

  const switchFormType = (): void => setRegister(prevState => !prevState);

  const onSubmit = async ({ login, ...rest }: UserData): Promise<void> => {
    if (isRegistered) {
      const resultLogIn = await dispatch(logIn({ ...rest }));
      logIn.fulfilled.match(resultLogIn) && history.push(Routes.Home);
    } else {
      const resultSignUp = await dispatch(signUp({ login, ...rest }));
      signUp.fulfilled.match(resultSignUp) && switchFormType();
    }
    reset();
  };

  useEffect(() => {
    reset();
  }, [isRegistered, reset]);

  return (
    <Wrapper isAuthenticate={isAuthenticate}>
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
        <StyledButton role='submit' disabled={isAuthenticate}>
          {isRegistered ? 'Log In' : 'Create account'}
        </StyledButton>
      </Form>
      <Button role='button' onClick={switchFormType} underline disabled={isAuthenticate}>
        {isRegistered ? 'Create new account' : 'I want sign in'}
      </Button>
      {isAuthenticate && (
        <LoaderWrapper>
          <LoaderComponent loaderColor={Color.LightBlue} />{' '}
        </LoaderWrapper>
      )}
    </Wrapper>
  );
};

export default AuthForm;
