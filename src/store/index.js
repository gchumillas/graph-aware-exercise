import { createStore } from 'redux'

/**
 * @typedef {{
 *  data: Record<string, string>,
 *  kids: Record<string, { records: TableRow[] }>
 * }} TableRow
 */

/**
 * @param {TableRow[]} rows
 * @param {string} rowId
 */
const deleteRow = (rows, rowId) => {
  const removeRow = (rows, rowId) => {
    return rows.filter((row) => {
      const columns = Object.keys(row.data)
      const idColumn = columns[0]

      return row.data[idColumn] != rowId
    })
  }

  return removeRow(rows, rowId).map(row => {
    return {
      ...row,
      kids: Object.fromEntries(Object
        .entries(row.kids)
        .map(([name, { records }]) => {
          return [name, { records: removeRow(records, rowId) }]
        })
        .filter(([_, { records }]) => {
          return records.length > 0
        })
      )
    }
  })
}

const initState = {
  rows: []
}

const reducer = (state = initState, action) => {
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
