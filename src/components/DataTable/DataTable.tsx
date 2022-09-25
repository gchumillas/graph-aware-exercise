import React from 'react'
import { context } from './context'
import { DataTableProps } from './types'
import Table from './Table'

const DataTable = ({ title, rows, onDeleteRow, className }: DataTableProps) => {
  const contextValue = React.useMemo(() => ({
    deleteRow: onDeleteRow
  }), [onDeleteRow])

  return (
    <context.Provider value={contextValue}>
      <Table title={title} rows={rows} className={className} />
    </context.Provider>
  )
}

export default DataTable