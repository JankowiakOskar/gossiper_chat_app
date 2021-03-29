import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Routes } from 'routes';
import MainLayout from 'layouts/MainLayout';
import AuthPage from 'views/AuthPage';
import Home from 'views/Home';

const Root = (): JSX.Element => (
  <Router>
    <div className='App'>
      <MainLayout>
        <Switch>
          <Route exact path={Routes.Home} component={Home} />

          <Route path={Routes.Auth} component={AuthPage} />
        </Switch>
      </MainLayout>
    </div>
  </Router>
);

export default Root;
