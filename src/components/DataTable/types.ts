import { TableRow } from 'global-types'

export type DataTableProps = {
  title?: string
  rows: TableRow[]
  onDeleteRow: (id: string) => void
}