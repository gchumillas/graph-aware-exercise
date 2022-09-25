import React from 'react'

type Props = {
  children: React.ReactNode
}

const PageLayout = ({ children }: Props) => {
  return (
    <div className="p-6">
      {children}
    </div>
  )
}

export default PageLayout