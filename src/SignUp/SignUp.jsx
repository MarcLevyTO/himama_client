import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { userService } from '../_services/user.service';

function SignUp() {
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
    userService.register(userName).then((data) => {
      if (data.id) {
        setUserName('');
        setStatusMessage("User successfully created");
      } else if (data.username[0] === "has already been taken") {
        setStatusMessage("User name has already been taken");
      }
      else {
        setStatusMessage("An error has ocurred");
      }
    });
  }

  useEffect(() => {
  }, []);

  return (
    <div className="col-lg-8 offset-lg-2">
      <h1>SignUp!</h1>

      <form name="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">User Name</label>
          <input id="username" type="text" placeholder="UserName" onChange={handleChange} value={userName} autoFocus />
        </div>
        <div className="form-group">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>

      { submitted &&
        <h1>{ statusMessage }</h1>
      }
    </div>
  );
}

export { SignUp };
