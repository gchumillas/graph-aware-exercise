import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
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
      <StyledRow>
        <td className="w-1">
          <Button hidden={subtables.length == 0} onClick={doToggleSubtables}>
            toggle
          </Button>
        </td>
        {columns.map((column, i) => (
          <td key={`${data[columnId]}_${i}`}>
            {data[column]}
          </td>
        ))}
        <td className="text-right">
          <Button onClick={() => deleteRow(data[columnId])}>
            delete
          </Button>
        </td>
      </StyledRow>
      {showSubtables && subtables.map((subtable) => (
        <tr key={subtable}>
          <td>&nbsp;</td>
          <td
            colSpan={columns.length + 1}
            style={{ padding: 0 }}
          >
            {/* TODO: add a button to delete the complete table */}
            <h2 className="uppercase py-2">{subtable}</h2>
            <Table rows={kids[subtable].records} />
          </td>
        </tr>
      ))}
    </>
  )
}

const StyledRow = styled.tr`
  td {
    ${tw`border-b border-gray-200`}
  }
`

export default Row