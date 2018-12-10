import { LOGIN_SUCCESS, LOGIN_ATTEMPT } from '../actions/auth'

let initialState = {
  user: {}
}

export default (state = initialState, action) => {
  switch (action.type) {

    case LOGIN_SUCCESS:
      return { ...state, user: { ...action.payload } };

    case LOGIN_ATTEMPT:
      return { ...state }

    default:
      return state;
  }

}