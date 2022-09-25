import { createStore } from 'redux'
import { deleteRow } from 'libs/utils'
import { State, Action } from './types'

const initState: State = {
  rows: []
}

const reducer = (state = initState, action: Action) => {
  if (action.type == 'SET_DATA') {
    return {
      rows: action.payload
    }
  } else if (action.type == 'DELETE_ROW') {
    const { id } = action.payload

    return {
      rows: deleteRow(state.rows, id)
    }
  }

  return state
}

export default createStore(reducer, initState)
