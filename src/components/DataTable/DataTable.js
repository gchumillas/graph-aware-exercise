import React from 'react'
import DataRow from './DataRow'

/**
 * @typedef {{
 *  data: Record<string, string>,
 *  kids: Record<string, TableRow>
 * }} TableRow
 */

/**
 * @param {object} params
 * @param {TableRow[]} params.rows
 */
const DataTable = ({ rows }) => {
  const columns = React.useMemo(() => {
    const firstDataRow = rows[0]?.data || []
    return Object.keys(firstDataRow)
  }, [rows])

  // the ID is always the first column
  const columnId = columns[0]

  return (
    <table>
      <thead>
        <tr>
          <th>&nbsp;</th>
          {columns.map((column) => <th key={column}>{column}</th>)}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => <DataRow key={row.data[columnId]} row={row} />)}
      </tbody>
    </table>
  )
}

export default DataTable