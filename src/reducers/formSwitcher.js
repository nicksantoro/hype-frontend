
import { OPEN_FORM, CLOSE_FORM, SWITCH_FORM } from '../actions/formSwitcher'

const initialState = false;

export default (state = initialState, action) => {
  switch (action.type) {

    case OPEN_FORM:
      return true

    case CLOSE_FORM:
      return false

    case SWITCH_FORM:
      return !state

    default:
      return state;
  }
}