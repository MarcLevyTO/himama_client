import React, { useEffect } from 'react';
import { Router, Route, Switch, Redirect, Link } from 'react-router-dom';

import { history } from '../_helpers';

import { HomePage } from '../HomePage';
import { SignUp } from '../SignUp';
import { Users } from '../Users';
import { User } from '../User';
import { WorkLogs } from '../WorkLogs';

function App() {
  
  
  return (
    <div className="container">
      <div className="col-md-8 offset-md-2">
        {alert.message && (
          <div className={`alert ${alert.type}`}>{alert.message}</div>
        )}
        <Router history={history}>
          <Switch>
            <Route path="/signup" component={SignUp} />
            <Route path="/admin/users" component={Users} />
            <Route path="/admin/user" component={User} />
            <Route path="/admin/worklogs" component={WorkLogs} />
            <Route path="/" component={HomePage} />
            <Redirect from="*" to="/" />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export { App };
