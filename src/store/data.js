import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getData } from '../providers/data'

export const useData = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.data)

  React.useEffect(() => {
    getData().then((data) => dispatch({ type: 'SET_DATA', payload: data }))
  }, [])

  return { data }
}