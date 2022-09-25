// TODO: rename DataTableContainer to DataTable and DataTable, DataRow to Table, Row respectively
import React from 'react'
import { context } from './context'
import { TableRow } from 'types'
import Table from './Table'

type Props = {
  rows: TableRow[]
  onDeleteRow: (id: string) => void
}

const DataTable = ({ rows, onDeleteRow }: Props) => {
  const contextValue = React.useMemo(() => ({
    deleteRow: onDeleteRow
  }), [onDeleteRow])

  return (
    <context.Provider value={contextValue}>
      <Table rows={rows} />
    </context.Provider>
  )
}

export default DataTable