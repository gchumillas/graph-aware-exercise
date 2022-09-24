import React from 'react'

/**
 * @typedef {{
 *  data: Record<string, string>,
 *  kids: Record<string, TableRow>
 * }} TableRow
 */

/**
 * @param {object} params
 * @param {TableRow[]} params.rows
 * @returns
 */
const DataTable = ({ rows }) => {
  const columns = React.useMemo(() => {
    const firstDataRow = rows[0]?.data || []
    return Object.keys(firstDataRow)
  }, [JSON.stringify(rows)])

  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => <th key={column}>{column}</th>)}
        </tr>
      </thead>
      <tbody>
        {rows.map(({ data }, i) => (
          <tr key={i}>
            {columns.map((column, i) => <td key={i}>{data[column]}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default DataTable