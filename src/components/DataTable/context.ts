import React from 'react'

type Props = {
  deleteRow:(id: string) => void
}

export const context = React.createContext<Props>({
  deleteRow: () => {
    // unimplemented
  }
})
