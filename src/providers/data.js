import data from '../../data/example-data.json'

export const getData = () => {
  return new Promise((resolve) => {
    resolve(data)
  })
}