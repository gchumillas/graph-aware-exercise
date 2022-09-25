// TODO: rename DataTableContainer to DataTable and DataTable, DataRow to Table, Row respectively
import React from 'react'
import { context } from './context'
import DataTable from './DataTable'

/**
 * @typedef {{
 *  data: Record<string, string>,
 *  kids: Record<string, TableRow>
 * }} TableRow
 */

/**
 * @param {object} params
 * @param {TableRow[]} params.rows
 * @param {(id: string) => void} params.onDeleteRow
 */
const DataTableContainer = ({ rows, onDeleteRow }) => {
  const contextValue = React.useMemo(() => ({
    deleteRow: onDeleteRow
  }), [onDeleteRow])

  return (
    <context.Provider value={contextValue}>
      <DataTable rows={rows} />
      xxx
    </context.Provider>
  )
}

export default DataTableContainer