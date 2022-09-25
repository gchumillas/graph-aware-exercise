import { TableRow } from 'global-types'

export type DataTableProps = {
  rows: TableRow[]
  onDeleteRow: (id: string) => void
}