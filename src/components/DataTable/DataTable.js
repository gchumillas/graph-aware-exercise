import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
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
 * @param {(id: string) => void} params.onDeleteRow
 */
const DataTable = ({ rows }) => {
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