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
        {rows.map(({ data, kids }, i) => {
          const subtables = Object.keys(kids)

          return (
            <React.Fragment key={data[columnId]}>
              <tr>
                <td>
                  <button className="border border-black">toggle</button>
                </td>
                {columns.map((column, i) => (
                  <td key={`${data[columnId]}_${i}`}>
                    {data[column]}
                  </td>
                ))}
              </tr>
              {subtables.map((subtable) => (
                <tr key={subtable}>
                  <td>&nbsp;</td>
                  <td colSpan={columns.length + 1}>
                    <DataTable rows={kids[subtable].records} />
                  </td>
                </tr>
              ))}
            </React.Fragment>
          )
        })}
      </tbody>
    </table>
  )
}

export default DataTable