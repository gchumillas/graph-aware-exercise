import React from 'react'
import DataTable from './DataTable'

/**
 * @typedef {{
 *  data: Record<string, string>,
 *  kids: Record<string, TableRow>
 * }} TableRow
 */

/**
 * @param {object} params
 * @param {TableRow} params.row
 */
const DataRow = ({ row }) => {
  const { kids, data } = row
  const subtables = Object.keys(kids)
  const columns = Object.keys(data)
  const columnId = columns[0]

  return (
    <>
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
    </>
  )
}

export default DataRow