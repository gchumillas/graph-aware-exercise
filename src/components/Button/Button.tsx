import React from 'react'

export type ButtonProps = {
  hidden?: boolean
  onClick: () => void
  children: React.ReactNode
}

const Button = ({ hidden, onClick, children }: ButtonProps) => {
  return (
    <button
      hidden={hidden}
      onClick={onClick}
      className="border border-black py-0.5 px-2.5 rounded-xl"
    >
      {children}
    </button>
  )
}

export default Button