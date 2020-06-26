import React, { useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import { userService } from '../_services/user.service';

function SignUp() {
  const [userName, setUserName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  function handleChange(e) {
    const { value } = e.target;
    setUserName(value);
  }

  function handleSubmit() {
    setSubmitted(true);
    userService.register(userName).then((data) => {
      if (data.id) {
        setUserName('');
        setHasError(false);
        setStatusMessage("User successfully created");
      } else if (data.username[0] === "has already been taken") {
        setStatusMessage("User name has already been taken");
        setHasError(true);
      }
      else {
        setStatusMessage("An error has ocurred");
        setHasError(true);
      }
    });
  }

  useEffect(() => {
  }, []);

  return (
    <div className="col-lg-8 offset-lg-2">
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Sign Up</Breadcrumb.Item>
      </Breadcrumb>
      <Form name="form">
        <InputGroup className="mb-3">
          <Form.Control id="username" placeholder="Username" aria-label="Username" onChange={handleChange} value={userName} autoFocus />
          <InputGroup.Append>
            <Button onClick={() => handleSubmit()} variant="outline-primary">Sign Up</Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>

      { submitted && !hasError &&
        <Alert variant={'success'}>{ statusMessage }</Alert>
      }
      { submitted && hasError &&
        <Alert variant={'danger'}>{ statusMessage }</Alert>
      }
    </div>
  );
}

export { SignUp };
