export const adminService = {
  fetchUsers,
  fetchUser,
  fetchUserWorkLogs,
  fetchEventLogs,
  fetchUserEventLogs
};

function fetchUsers() {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };

  return fetch(`${process.env.REACT_APP_BASE_URL}/users`, requestOptions).then(
    handleResponse
  ); 
}

function fetchUser(userId) {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };

  return fetch(`${process.env.REACT_APP_BASE_URL}/users/${userId}`, requestOptions).then(
    handleResponse
  ); 
}

function fetchUserWorkLogs(username) {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };

  return fetch(`${process.env.REACT_APP_BASE_URL}/work_logs?username=${username}`, requestOptions).then(
    handleResponse
  ); 
}

function fetchEventLogs() {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };

  return fetch(`${process.env.REACT_APP_BASE_URL}/events`, requestOptions).then(
    handleResponse
  ); 
}

function fetchUserEventLogs(username) {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };

  return fetch(`${process.env.REACT_APP_BASE_URL}/events?username=${username}`, requestOptions).then(
    handleResponse
  ); 
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      return data;
    }
    return data;
  });
}
