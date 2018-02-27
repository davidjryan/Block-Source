import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Welcome from '../Welcome/Welcome';
import Login from '../../containers/Login/Login';
import ProjectForm from '../../containers/ProjectForm/ProjectForm';
import PropTypes from 'prop-types';


const Routes = () => {
  return (
    <div>
      <Switch>
        <Route
          exact path ='/' component={Welcome}
        />
        <Route
          path = '/login' component={Login}
        />
        <Route
          path = '/create' component={ProjectForm}
        />
      </Switch>
    </div>
  )
}

Route.propTypes = {
  component: PropTypes.func
}

export default Routes;