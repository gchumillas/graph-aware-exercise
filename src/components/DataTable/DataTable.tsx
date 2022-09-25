import React from 'react'
import { context } from './context'
import { DataTableProps } from './types'
import Table from './Table'

const DataTable = ({ rows, onDeleteRow }: DataTableProps) => {
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