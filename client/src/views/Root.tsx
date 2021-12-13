import * as React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Routes as routes, Params } from 'routes';
import useCheckLogged from 'hooks/useCheckLogged';
import { AnimatePresence } from 'framer-motion';
import smoothscroll from 'smoothscroll-polyfill';
import LoaderComponent from 'components/molecules/LoaderComponent/LoaderComponent';
import AuthProtected from 'providers/AuthProtected';
import Home from 'views/Home/Home';
import AuthPage from './AuthPage';
import NotFoundPage from './404/NotFoundPage';

smoothscroll.polyfill();

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
            <React.Suspense fallback={<LoaderComponent loadingMessage='We are loading available rooms...' />}>
              <AuthProtected navigateTo={routes.Auth}>
                <ChatRoomsPage />
              </AuthProtected>
            </React.Suspense>
          }
        />
        <Route
          path={`${routes.ChatRooms}/${Params.IDParam}`}
          element={
            <React.Suspense fallback={<LoaderComponent loadingMessage='Loading room data...' />}>
              <AuthProtected navigateTo={routes.Auth}>
                <ChatRoom />
              </AuthProtected>
            </React.Suspense>
          }
        />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  );
};
export default Root;
