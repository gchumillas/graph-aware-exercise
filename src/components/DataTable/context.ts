import React from 'react'

export const context = React.createContext<{
  deleteRow: (id: string) => void
}>({
  deleteRow: (id) => {}
})
