import React from 'react'
import { useData } from 'store/data'
import DataTable from 'components/DataTable'
import PageLayout from 'layouts/PageLayout'

const HomePage = () => {
  const { rows, deleteRow } = useData()

  return (
    <PageLayout>
      <DataTable title="DATA-1.JSON" rows={rows} onDeleteRow={deleteRow} />
    </PageLayout>
  )
}

export default HomePage