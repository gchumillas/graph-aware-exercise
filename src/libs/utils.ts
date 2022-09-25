import { TableRow } from 'global-types'

export const deleteRow = (rows: TableRow[], rowId: string) => {
  const items = rows.filter((row) => {
    const columns = Object.keys(row.data)
    // the first column is always the Column ID
    const idColumn = columns[0]

    return row.data[idColumn] != rowId
  })

  return items.map(row => {
    return {
      ...row,
      kids: Object.fromEntries(Object
        .entries(row.kids)
        .map(([name, { records }]): [string, { records: TableRow[] }] => {
          return [name, { records: deleteRow(records, rowId) }]
        })
        .filter(([_, { records }]) => {
          return records.length > 0
        })
      )
    }
  })
}