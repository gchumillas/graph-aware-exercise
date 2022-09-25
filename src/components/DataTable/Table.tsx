import styled from 'styled-components'
import tw from 'twin.macro'
import { TableRow } from 'global-types'
import Row from './Row'

type Props = {
  title?: string
  rows: TableRow[]
  className?: string
}

const Table = ({ title, rows, className }: Props) => {
  const columns = Object.keys(rows[0]?.data || [])

  // the ID is always the first column
  const columnId = columns[0]

  return (
    <>
      {title && (
        <h2 className="uppercase py-2">
          {title}
        </h2>
      )}
      <StyledTable className={className}>
        <thead>
          <tr>
            <th>&nbsp;</th>
            {columns.map((column) => <th key={column}>{column}</th>)}
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => <Row key={row.data[columnId]} row={row} />)}
        </tbody>
      </StyledTable>
    </>
  )
}

const StyledTable = styled.table`
  th {
    ${tw`bg-gray-100 border-t border-b border-gray-300 text-left`}
  }

  td, th {
    ${tw`py-2 px-3`}
  }
`

export default Table