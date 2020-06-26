import React, { useState, useEffect } from 'react';

import { adminService } from '../_services/admin.service';

function EventLogs() {
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    adminService.fetchEventLogs().then(data => {
      setEventData(data);
    });
  }, []);

  return (
    <div className="col-lg-8 offset-lg-2">
      <h1>EventLogs!</h1>
      <a href="/admin/users">Back to Users</a>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>EVENT TYPE</th>
            <th>DATA</th>
            <th>CREATED AT</th>
            <th>UPDATED AT</th>
          </tr>
        </thead>
        <tbody>
          {eventData && eventData.map((event, index) => (
            <tr key={event.id}>
              <td>{event.id}</td>
              <td>{event.user_id}</td>
              <td>{event.event_type}</td>
              <td>{event.data}</td>
              <td>{event.created_at}</td>
              <td>{event.updated_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { EventLogs };
