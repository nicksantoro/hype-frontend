import { FETCH_EVENTS_SUCCESS, ADD_EVENT_SUCCESS, DELETE_EVENT_SUCCESS, UPDATE_EVENT_SUCCESS, FILTER_EVENTS, ADD_LIKE_SUCCESS } from '../actions/events'

let initialState = {
  data: [],
  filteredEvents: [],
  displayedEvents: []
}


export default (state = initialState, action) => {
  switch (action.type) {

    case FETCH_EVENTS_SUCCESS:
      return { ...state, data: action.payload, displayedEvents: action.payload };

    case ADD_EVENT_SUCCESS:
      return { ...state, data: [...state.data, ...action.payload], displayedEvents: [...state.data, ...action.payload] };

    case DELETE_EVENT_SUCCESS:
      return { ...state, data: action.payload, displayedEvents: action.payload };

    case UPDATE_EVENT_SUCCESS:

      //let eventIndex

      const event = action.payload

      // state.data.map(({ id }, index) => {
      //   if (id === event.id) {
      //     eventIndex = index
      //   }
      // })

      const eventIndex = state.data.findIndex(({ id }) => id === event.id)

      let events = [...state.data]

      events[eventIndex] = event

      return { ...state, data: events, displayedEvents: events };

    case ADD_LIKE_SUCCESS: {

      const eventId = action.payload;
      ///const eventIndex = state.data.findIndex(({ id}) => id === event.id)
      // state.data.map(({ id }, index) => {
      // if (id === event.id) {
      //   eventIndex = index
      // }

      const events = state.data.map(e => {
        if (eventId === e.id) { return { ...e, likes: e.likes + 1 }; }
        return e;
      })

      const displayedEvents = state.displayedEvents.map(e => {
        if (eventId === e.id) { return { ...e, likes: e.likes + 1 }; }
        return e;
      })


      return { ...state, data: events, displayedEvents };
    }

    case FILTER_EVENTS:
      const data = [...state.data];

      const filteredData = action.payload === 'all' ? [...data] : data.filter((item) => {
        return item.category === action.payload;
      });

      return { ...state, displayedEvents: filteredData }


    default:
      return state;
  }

}

