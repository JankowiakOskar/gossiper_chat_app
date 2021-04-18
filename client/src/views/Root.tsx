import { Switch, Route, useLocation } from 'react-router-dom';
import { Routes } from 'routes';
import useCheckLogged from 'hooks/useCheckLogged';
import { AnimatePresence } from 'framer-motion';
import smoothscroll from 'smoothscroll-polyfill';
import PrivateRoute from 'providers/PrivateRoute';
import MainLayout from 'layouts/MainLayout';
import AuthPage from 'views/AuthPage';
import Home from 'views/Home';
import ChatRoom from 'views/ChatRoom';

smoothscroll.polyfill();

const Root = () => {
  const isChecking = useCheckLogged();
  const location = useLocation();
  if (isChecking) return <div>Loading...</div>;

  return (
    <div className='App'>
      <MainLayout>
        <AnimatePresence exitBeforeEnter initial={false}>
          <Switch location={location} key={location.pathname}>
            <Route exact path={Routes.Home} component={Home} />
            <Route path={Routes.Auth} component={AuthPage} />
            <PrivateRoute path={Routes.ChatChannels} component={ChatRoom} />
          </Switch>
        </AnimatePresence>
      </MainLayout>
    </div>
  );
};
export default Root;
