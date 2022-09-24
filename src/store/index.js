import { createStore } from 'redux'

const initState = {
  rows: []
}

const reducer = (state = initState, action) => {
  if (action.type == 'SET_DATA') {
    return {
      rows: action.payload
    }
  } else if (action.type == 'DELETE_ROW') {
    // TODO: missing implementation
    return {
      ...state,
      timers: action.payload
    }
  } else if (action.type == 'DELETE_TABLE') {
    // TODO: missing implementation
    return {
      ...state,
      timers: action.payload
    }
  }

  return state
}

export default createStore(reducer, initState)
