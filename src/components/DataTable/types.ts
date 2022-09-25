import { TableRow } from 'types'

export type DataTableProps = {
  rows: TableRow[]
  onDeleteRow: (id: string) => void
}