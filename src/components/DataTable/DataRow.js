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
 * @param {TableRow} params.row
 */
const DataRow = ({ row }) => {
  const { deleteRow } = React.useContext(context)
  const { kids, data } = row
  const [showSubtables, setShowSubtables] = React.useState(false)
  const subtables = Object.keys(kids)
  const columns = Object.keys(data)
  const columnId = columns[0]

  const doToggleSubtables = () => {
    setShowSubtables(value => !value)
  }

  return (
    <>
      <tr>
        <td>
          <button
            hidden={subtables.length == 0}
            onClick={doToggleSubtables}
            className="border border-black py-0.5 px-2.5 rounded-xl"
          >
            toggle
          </button>
        </td>
        {columns.map((column, i) => (
          <td key={`${data[columnId]}_${i}`}>
            {data[column]}
          </td>
        ))}
        <td>
          <button
            onClick={() => deleteRow('101')}
            className="border border-black py-0.5 px-2.5 rounded-xl"
          >
            delete
          </button>
        </td>
      </tr>
      {showSubtables && subtables.map((subtable) => (
        <tr key={subtable}>
          <td>&nbsp;</td>
          <td colSpan={columns.length + 1}>
            <h2 className="uppercase">{subtable}</h2>
            <DataTable rows={kids[subtable].records} />
          </td>
        </tr>
      ))}
    </>
  )
}

export default DataRow