import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

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
      <Navbar fixed="bottom">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/admin/users">Admin</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export { App };
