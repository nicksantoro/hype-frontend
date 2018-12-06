import { FETCH_EVENTS_SUCCESS } from '../actions/events'

let initialState = {
  data: []
}

export default (state = initialState, action) => {
  switch (action.type) {

    case FETCH_EVENTS_SUCCESS:
      return { ...state, data: action.payload };

    case 'ADD_EVENT':
      return state.data.concat([action.data]);
    // return { ...state, data: action.payload };

    case 'DELETE_EVENT':
      return state.filter((event) => event.id !== action.id);

    // case 'UPDATE_POST':
    //   return state.find((event) => {
    //     if(event.id === action.id) {
    //       return { ...state, data: action.payload };
    //     }
    //   }

    default:
      return state;
  }

}

