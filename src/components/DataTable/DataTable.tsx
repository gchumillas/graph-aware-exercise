// TODO: rename DataTableContainer to DataTable and DataTable, DataRow to Table, Row respectively
import React from 'react'
import { context } from './context'
import { TableRow } from 'types'
import DataTable from './Table'

type Props = {
  rows: TableRow[]
  onDeleteRow: (id: string) => void
}

const DataTableContainer = ({ rows, onDeleteRow }: Props) => {
  const contextValue = React.useMemo(() => ({
    deleteRow: onDeleteRow
  }), [onDeleteRow])

  return (
    <context.Provider value={contextValue}>
      <DataTable rows={rows} />
    </context.Provider>
  )
}

export default DataTableContainer