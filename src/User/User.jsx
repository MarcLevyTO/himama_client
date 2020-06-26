import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Table from 'react-bootstrap/Table';

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
      <Breadcrumb>
        <Breadcrumb.Item href="/admin/users">Users</Breadcrumb.Item>
        <Breadcrumb.Item active>{user.username}</Breadcrumb.Item>
      </Breadcrumb>
      <h4>Work Logs</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Seconds Worked</th>
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
      </Table>
      <h4>Events</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Event Type</th>
            <th>Data</th>
            <th>Created At</th>
            <th>Updated At</th>
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
      </Table>
    </div>
  );
}

export { User };
