import { createStore } from 'redux'
import { TableRow } from 'global-types'
import { State, Action } from './types'

const deleteRow = (rows: TableRow[], rowId: string) => {
  const items = rows.filter((row) => {
    const columns = Object.keys(row.data)
    // the first column is always the Column ID
    const idColumn = columns[0]

    return row.data[idColumn] != rowId
  })

  return items.map(row => {
    return {
      ...row,
      kids: Object.fromEntries(Object
        .entries(row.kids)
        .map(([name, { records }]): [string, { records: TableRow[] }] => {
          return [name, { records: deleteRow(records, rowId) }]
        })
        .filter(([_, { records }]) => {
          return records.length > 0
        })
      )
    }
  })
}

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
