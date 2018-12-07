export const FETCH_EVENTS_SUCCESS = "FETCH_EVENTS_SUCCESS"
export const ADD_EVENT_SUCCESS = "ADD_EVENT_SUCCESS"
export const DELETE_EVENT_SUCCESS = "DELETE_EVENT_SUCCESS"
export const UPDATE_EVENT_SUCCESS = "UPDATE_EVENT_SUCCESS"

export const fetchEvents = () => {
  return async dispatch => {
    try {
      const response = await fetch('http://localhost:3000/events')
      const events = await response.json()
      dispatch({
        type: FETCH_EVENTS_SUCCESS,
        payload: events
      })
    }
    catch (error) {
      console.log(error)
    }
  }
};

export const addEvent = (payload) => {
  return async dispatch => {
    try {
      console.log(payload)
      let response = await fetch('http://localhost:3000/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })

      let event = await response.json();
      console.log(event)
      dispatch({ type: ADD_EVENT_SUCCESS, payload: event })
    }
    catch (error) {
      console.log(error)
    }
  }
};

export const deleteEvent = (id) => {
  return async dispatch => {
    try {
      const response = await fetch(`http://localhost:3000/events/${id}
      `, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
        })
      const event = await response.json()
      dispatch({
        type: DELETE_EVENT_SUCCESS,
        payload: event
      })
    }
    catch (error) {
      console.log(error)
    }
  }
};

export const updateEvent = (id, payload) => {
  return async dispatch => {
    try {
      const response = await fetch(`http://localhost:3000/events/${id}
      `, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        })
      const result = await response.json()
      dispatch({
        type: UPDATE_EVENT_SUCCESS,
        payload: result[0],
        id
      })
    }
    catch (error) {
      console.log(error)
    }
  }
};










