import React, { useState, useEffect } from 'react';

import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'

import { adminService } from '../_services/admin.service';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    adminService.fetchUsers().then(data => {
      setUsers(data);
    })
  }, []);

  function deleteUser(userId) {
    console.log("DELETED");
  }

  return (
    <div className="col-lg-8 offset-lg-2">
      <Breadcrumb>
        <Breadcrumb.Item active>Users</Breadcrumb.Item>
        <Breadcrumb.Item href="/admin/event-logs">Event Logs</Breadcrumb.Item>
      </Breadcrumb>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>User Name</th>
            {/* <th>Status</th> */}
            {/* <th>Actions</th> */}
          </tr>
        </thead>
        <tbody>
          { users && users.map((user, index) => (
            <tr key={user.id}>
              <td><a href={"/admin/users/" + user.id}>{user.username}</a></td>
              {/* <td>{user.status}</td> */}
              {/* <td><Button variant="outline-danger" onClick={() => deleteUser(user.id) }>Archive</Button></td> */}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export { Users };
