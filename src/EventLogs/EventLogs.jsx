import React, { useState, useEffect } from 'react';

import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Table from 'react-bootstrap/Table';

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
      <Breadcrumb>
        <Breadcrumb.Item href="/admin/users">Users</Breadcrumb.Item>
        <Breadcrumb.Item active>Event Logs</Breadcrumb.Item>
      </Breadcrumb>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>Event Type</th>
            <th>Data</th>
            <th>Created At</th>
            <th>Updated At</th>
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
      </Table>
    </div>
  );
}

export { EventLogs };
