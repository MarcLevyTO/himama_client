import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import { history } from '../_helpers';

import { HomePage } from '../HomePage';
import { SignUp } from '../SignUp';
import { Users } from '../Users';
import { User } from '../User';
import { EventLogs } from '../EventLogs';

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
            <Route path="/admin/users/:id" component={User} />
            <Route path="/admin/users" component={Users} />
            <Route path="/admin/event-logs" component={EventLogs} />
            <Route path="/" component={HomePage} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export { App };
