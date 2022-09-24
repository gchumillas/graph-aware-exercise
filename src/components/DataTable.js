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
  console.log(rows)

  return (
    <div
      className="inline-grid grid-cols-6"
      style={{
        gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))`
      }}
    >
      {columns.map((column) => <div key={column}>{column}</div>)}
      {rows.map(({ data }) => columns.map((column) => (
        <div key={column}>{data[column]}</div>
      )))}
    </div>
  )
}

export default DataTable