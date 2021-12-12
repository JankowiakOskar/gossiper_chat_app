import { useAppSelector } from 'store';
import { Routes } from 'routes';
import { Navigate } from 'react-router-dom';

type Props = {
  children: JSX.Element;
  navigateTo: Routes;
};

const AuthProtected = ({ children, navigateTo }: Props) => {
  const isAuthenticated = useAppSelector(state => state.auth.authToken);

  return isAuthenticated ? children : <Navigate to={navigateTo} />;
};

export default AuthProtected;
