import * as React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Routes as routes, Params } from 'routes';
import useCheckLogged from 'hooks/useCheckLogged';
import { AnimatePresence } from 'framer-motion';
import smoothscroll from 'smoothscroll-polyfill';
import LoaderComponent from 'components/molecules/LoaderComponent/LoaderComponent';
import AuthProtected from 'providers/AuthProtected';
import Home from 'views/Home/Home';

smoothscroll.polyfill();

const AuthPage = React.lazy(() => import('./AuthPage'));
const ChatRoomsPage = React.lazy(() => import('./ChatRoomsPage/ChatRoomsPage'));
const ChatRoom = React.lazy(() => import('./ChatRoom/ChatRoom'));

const Root = () => {
  useCheckLogged();
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path={routes.Home} element={<Home />} />
        <Route path={routes.Auth} element={<AuthPage />} />
        <Route
          path={routes.ChatRooms}
          element={
            <AuthProtected navigateTo={routes.Auth}>
              <React.Suspense fallback={<LoaderComponent loadingMessage='Loading available chats...' />}>
                <ChatRoomsPage />
              </React.Suspense>
            </AuthProtected>
          }
        >
          <Route
            path={Params.IDParam}
            element={
              <AuthProtected navigateTo={routes.Auth}>
                <ChatRoom />
              </AuthProtected>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
export default Root;
