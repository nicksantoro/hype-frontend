export const LOGIN_SUCCESS = "LOGIN_SUCCESS"


export const loginUser = (email, password) => {
  return async dispatch => {
    try {
      let response = await fetch('http://localhost:3000/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: email, password })
      })
      const user = await response.json()
      dispatch({
        type: LOGIN_SUCCESS,
        payload: user
      })
    }
    catch (error) {
      console.log(error)
    }
  }
};


export const LOGIN_ATTEMPT = "LOGIN_ATTEMPT"

export const loginAttempt = (firstName, lastName, email, username, password) => {
  return async dispatch => {
    try {
      let response = await fetch('http://localhost:3000/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: email, password })
      })
      const user = await response.json()
      dispatch({
        type: LOGIN_SUCCESS,
        payload: user
      })
    }
    catch (error) {
      console.log(error)
    }
  }
}