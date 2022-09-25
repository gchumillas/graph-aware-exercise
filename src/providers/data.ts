import data from 'data/example-data.json'
import { TableRow } from 'global-types'

export const getData = (): Promise<TableRow[]> => {
  return new Promise((resolve) => resolve(data as TableRow[]))
}