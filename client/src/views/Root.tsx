import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Routes } from 'routes';
import useCheckLogged from 'hooks/useCheckLogged';
import PrivateRoute from 'providers/PrivateRoute';
import MainLayout from 'layouts/MainLayout';
import AuthPage from 'views/AuthPage';
import Home from 'views/Home';
import ChatChannels from 'views/ChatChannels';

const Root = () => {
  const isChecking = useCheckLogged();

  if (isChecking) return <div>Loading...</div>;

  return (
    <Router>
      <div className='App'>
        <MainLayout>
          <Switch>
            <Route exact path={Routes.Home} component={Home} />
            <Route path={Routes.Auth} component={AuthPage} />
            <PrivateRoute path={Routes.ChatChannels} component={ChatChannels} />
          </Switch>
        </MainLayout>
      </div>
    </Router>
  );
};
export default Root;
