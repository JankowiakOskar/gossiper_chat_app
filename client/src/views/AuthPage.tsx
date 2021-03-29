import styled from 'styled-components';
import AuthForm from 'components/organisms/AuthForm/AuthForm';

const Wrapper = styled.div`
  padding: 4rem 0 0 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;

const AuthPage = (): JSX.Element => (
  <Wrapper>
    <AuthForm />
  </Wrapper>
);

export default AuthPage;
