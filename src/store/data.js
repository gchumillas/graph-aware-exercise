import { useSelector } from 'react-redux'

export const useData = () => {
  const data = useSelector(state => state.data)

  return [data]
}