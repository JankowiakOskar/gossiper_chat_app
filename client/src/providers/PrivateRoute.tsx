import { useAppSelector } from 'store';
import { Routes } from 'routes';
import { Route, Redirect, RouteProps } from 'react-router-dom';

const PrivateRoute: React.FC<RouteProps> = ({ ...rest }) => {
  const authToken = useAppSelector(state => state.auth.authToken);

  return authToken ? <Route {...rest} /> : <Redirect to={Routes.Auth} />;
};

export default PrivateRoute;
