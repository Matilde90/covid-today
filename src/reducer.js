import { CHANGE_SEARCH_FIELD } from "./constants"

const initialState = {
    countries: [],
    searchfield: ''
}
  
export const searchCountry = (state=initialState, action={}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload }
    default:
      return state;
  }
}