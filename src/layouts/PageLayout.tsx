import React from 'react'

type Props = {
  children: React.ReactNode
}

const PageLayout = ({ children }: Props) => {
  return (
    <div className="w-full max-w-7xl mx-auto pt-6">
      {children}
    </div>
  )
}

export default PageLayout