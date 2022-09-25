import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { TableRow } from 'types'
import DataRow from './DataRow'

type Props = {
  rows: TableRow[]
}

const DataTable = ({ rows }: Props) => {
  const columns = Object.keys(rows[0]?.data || [])

  // the ID is always the first column
  const columnId = columns[0]

  return (
    <StyledTable>
      <thead>
        <tr>
          <th>&nbsp;</th>
          {columns.map((column) => <th key={column}>{column}</th>)}
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => <DataRow key={row.data[columnId]} row={row} />)}
      </tbody>
    </StyledTable>
  )
}

const StyledTable = styled.table`
  th {
    ${tw`bg-blue-200 text-left`}
  }

  td, th {
    ${tw`py-2 px-3`}
  }
`

export default DataTable