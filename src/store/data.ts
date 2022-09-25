import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { TableRow } from '../types'
import { State } from './types'
import { getData } from '../providers/data'

export const useData = () => {
  const dispatch = useDispatch()
  const rows = useSelector<State, TableRow[]>((state) => state.rows)
  const deleteRow = (id: string) => dispatch({
    type: 'DELETE_ROW',
    payload: { id }
  })

  React.useEffect(() => {
    getData().then((rows) => dispatch({ type: 'SET_DATA', payload: rows }))
  }, [])

  return { rows, deleteRow }
}