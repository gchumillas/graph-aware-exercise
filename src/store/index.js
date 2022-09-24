import { createStore } from 'redux'

const initState = {
  timers: [],
  chrono: {
    startFrom: 0,
    endTo: 0,
    running: false,
    started: false
  }
}

const reducer = (state = initState, action) => {
  if (action.type == 'DELETE_ROW') {
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
