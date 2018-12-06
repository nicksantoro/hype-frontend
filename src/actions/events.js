export const FETCH_EVENTS_SUCCESS = "FETCH_EVENTS_SUCCESS"

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

const addEvent = (event) => {
  fetch('http://localhost:3000/events', {
    method: 'POST',
    payload: event
  })
};

// export const deleteEvent = (id) => {
//   return async dispatch => {
//     try {
//       const response = await fetch('http://localhost:3000/events/:id')
//       const events = await response.json()
//       dispatch({
//         type: FETCH_DELETE_SUCCESS,
//         payload: events
//       })
//     }
//     catch (error) {
//       console.log(error)
//     }
//   }
// };








