import { TableRow } from 'global-types'

export type State = {
  rows: TableRow[]
}

type SetDataAction = {
  type: 'SET_DATA'
  payload: TableRow[]
}

type DeleteRowAction = {
  type: 'DELETE_ROW',
  payload: {
    id: string
  }
}

export type Action = SetDataAction | DeleteRowAction