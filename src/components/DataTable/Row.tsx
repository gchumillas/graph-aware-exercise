import React from 'react'
import { TableRow } from 'global-types'
import Button from 'components/Button'
import { context } from './context'
import Table from './Table'

type Props = {
  row: TableRow
}

const Row = ({ row }: Props) => {
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
          <Button hidden={subtables.length == 0} onClick={doToggleSubtables}>
            toggle
          </Button>
        </td>
        {columns.map((column, i) => (
          <td key={`${data[columnId]}_${i}`}>
            {data[column]}
          </td>
        ))}
        <td>
          <Button onClick={() => deleteRow(data[columnId])}>
            delete
          </Button>
        </td>
      </tr>
      {showSubtables && subtables.map((subtable) => (
        <tr key={subtable}>
          <td>&nbsp;</td>
          <td colSpan={columns.length + 1}>
            {/* TODO: add a button to delete the complete table */}
            <h2 className="uppercase">{subtable}</h2>
            <Table rows={kids[subtable].records} />
          </td>
        </tr>
      ))}
    </>
  )
}

export default Row