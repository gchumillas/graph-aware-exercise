import React from 'react'
// TODO: (all) use absolute paths
import { useData } from 'store/data'
import DataTable from 'components/DataTable'

const HomePage = () => {
  const { rows, deleteRow } = useData()

  return (
    <div>
      <DataTable rows={rows} onDeleteRow={deleteRow} />
    </div>
  )
}

export default HomePage