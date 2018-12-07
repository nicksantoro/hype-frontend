import { FETCH_EVENTS_SUCCESS, ADD_EVENT_SUCCESS, DELETE_EVENT_SUCCESS, UPDATE_EVENT_SUCCESS } from '../actions/events'

let initialState = {
  data: []
}

export default (state = initialState, action) => {
  switch (action.type) {

    case FETCH_EVENTS_SUCCESS:
      return { ...state, data: action.payload };

    case ADD_EVENT_SUCCESS:
      return { ...state, data: [...state.data, ...action.payload] };

    case DELETE_EVENT_SUCCESS:
      return { ...state, data: action.payload };

    case UPDATE_EVENT_SUCCESS:
      let eventIndex

      state.data.map(({ id }, index) => {
        if (id === action.id) {
          eventIndex = index
        }
      })

      let events = [...state.data]

      events[eventIndex] = action.payload

      return { ...state, data: events }

    default:
      return state;
  }

}

