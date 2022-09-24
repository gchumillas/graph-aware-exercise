import React from 'react'
import { useData } from '../store/data'
import DataTable from '../components/DataTable'

const HomePage = () => {
  const { rows, deleteRow } = useData()

  return (
    <div>
      <DataTable rows={rows} onDeleteRow={deleteRow} />
    </div>
  )
}

export default HomePage