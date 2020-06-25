export const userService = {
  register,
  clock
};

function register(username) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username }),
  };

  return fetch(`${process.env.REACT_APP_BASE_URL}/users`, requestOptions).then(
    handleResponse
  ); 
}

function clock(username) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, type: "clock" }),
  };

  return fetch(`${process.env.REACT_APP_BASE_URL}/events`, requestOptions).then(
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
