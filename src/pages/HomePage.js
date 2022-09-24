import React from 'react'
import { useData } from '../store/data'
import DataTable from '../components/DataTable'

const HomePage = () => {
  const { rows } = useData()

  return (
    <div>
      <DataTable rows={rows} />
    </div>
  )
}

export default HomePage