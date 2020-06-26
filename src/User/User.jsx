import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { adminService } from '../_services/admin.service';

function User() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [workLogs, setWorkLogs] = useState([]);
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    adminService.fetchUser(id).then(userData => {
      setUser(userData);
      adminService.fetchUserWorkLogs(userData.username).then(workData => {
        setWorkLogs(workData);
      });
      adminService.fetchUserEventLogs(userData.username).then(eventData => {
        setEventData(eventData);
      });
    });
  }, [id]);

  return (
    <div className="col-lg-8 offset-lg-2">
      <h1>{user.username}</h1>
      <h4>Work Logs</h4>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>START TIME</th>
            <th>END TIME</th>
            <th>SECONDS WORKED</th>
          </tr>
        </thead>
        <tbody>
        { workLogs && workLogs.map((workLog, index) => (
          <tr key={workLog.id}>
            <td>{workLog.id}</td>
            <td>{Date(workLog.start_time).toString()}</td>
            <td>{Date(workLog.end_time).toString()}</td>
            <td>{workLog.time_worked}</td>
          </tr>
        ))}
        </tbody>
      </table>
      <h4>Events</h4>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>EVENT TYPE</th>
            <th>DATA</th>
            <th>CREATED AT</th>
            <th>UPDATED AT</th>
          </tr>
        </thead>
        <tbody>
          {eventData && eventData.map((event, index) => (
            <tr key={event.id}>
              <td>{event.user_id}</td>
              <td>{event.event_type}</td>
              <td>{event.data}</td>
              <td>{event.created_at}</td>
              <td>{event.updated_at}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <a href="/admin/users">Back to Users</a>
    </div>
  );
}

export { User };
