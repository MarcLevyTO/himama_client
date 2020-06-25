import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { userService } from '../_services/user.service';

function HomePage() {
  const [userName, setUserName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  function handleChange(e) {
    const { value } = e.target;
    setUserName(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    userService.clock(userName).then((data) => {
      if (data.event && data.event.id) {
        setUserName("");
        if (data.event.event_type === "Clock In") {
          setStatusMessage(`${userName} has clocked in`);
        } else {
          setStatusMessage(`${userName} has clocked out. TIME WORKED: ${data.time_worked}`)
        }
      } else {
        setStatusMessage(data.error);
      }
    });
  }

  useEffect(() => {
  }, []);

  return (
    <div className="col-lg-8 offset-lg-2">
      <h1>Time Clock</h1>

      <form name="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">User Name</label>
          <input id="username" type="text" placeholder="UserName" onChange={handleChange} value={userName} autoFocus />
        </div>
        <div className="form-group">
          <button className="btn btn-primary">Clock In/Out</button>
        </div>
      </form>

      { submitted &&
        <h1>{ statusMessage }</h1>
      }
    </div>
  );
}

export { HomePage };
