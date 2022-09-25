import React from 'react'
import { useData } from 'store/data'
import DataTable from 'components/DataTable'
import PageLayout from 'layouts/PageLayout'

const HomePage = () => {
  const { rows, deleteRow } = useData()

  return (
    <PageLayout>
      <DataTable rows={rows} onDeleteRow={deleteRow} className="m-auto" />
    </PageLayout>
  )
}

export default HomePage