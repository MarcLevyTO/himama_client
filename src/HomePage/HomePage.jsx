import React, { useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import { userService } from '../_services/user.service';

function HomePage() {
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
    userService.clock(userName).then((data) => {
      if (data.event && data.event.id) {
        setUserName("");
        setHasError(false);
        if (data.event.event_type === "Clock In") {
          setStatusMessage(`${userName} has clocked in`);
        } else {
          setStatusMessage(`${userName} has clocked out. TIME WORKED: ${data.time_worked}`)
        }
      } else {
        setHasError(true);
        setStatusMessage(data.error);
      }
    });
  }

  useEffect(() => {
  }, []);

  return (
    <div className="col-lg-8 offset-lg-2">
      <Breadcrumb>
        <Breadcrumb.Item active>Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/signup">Sign Up</Breadcrumb.Item>
      </Breadcrumb>

      <Form name="form" onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <Form.Control id="username" placeholder="Username" aria-label="Username" onChange={handleChange} value={userName} autoFocus />
          <InputGroup.Append>
            <Button onClick={() => handleSubmit()} variant="outline-primary">Clock In/Out</Button>
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

export { HomePage };
