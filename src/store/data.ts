import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { TableRow } from 'global-types'
import { getRows } from 'providers/data'
import { State } from './types'

export const useData = () => {
  const dispatch = useDispatch()
  const rows = useSelector<State, TableRow[]>((state) => state.rows)
  const deleteRow = (id: string) => dispatch({
    type: 'DELETE_ROW',
    payload: { id }
  })

  React.useEffect(() => {
    getRows().then((rows) => dispatch({ type: 'SET_DATA', payload: rows }))
  }, [])

  return { rows, deleteRow }
}