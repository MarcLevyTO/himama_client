import React, { useState, useEffect } from 'react';

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
      <h1>Users!</h1>
      <table>
        <thead>
          <tr>
            <th>User Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          { users && users.map((user, index) => (
            <tr key={user.id}>
              <td><a href={"/admin/users/" + user.id}>{user.username}</a></td>
              <td>{user.status}</td>
              <td><button onClick={() => deleteUser(user.id) }>ARCHIVE</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <a href="/admin/event-logs">Event Logs</a>
    </div>
  );
}

export { Users };
