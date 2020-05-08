import { CHANGE_SEARCH_FIELD } from './constants.js'

const intialState = {
  searchField: ''
}
//reducer function
export const searchRobots = (state=intialState, action={}) => {
  switch(action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, {searchField: action.payload});
      default:
        return state;
  }
}