import React from 'react'

export type ButtonProps = {
  hidden?: boolean
  onClick: () => void
  children: React.ReactNode
}