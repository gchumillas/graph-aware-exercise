import styled from 'styled-components'
import tw from 'twin.macro'
import { ButtonProps } from './types'

const Button = ({ hidden, onClick, children }: ButtonProps) => {
  return (
    <StyledButton
      hidden={hidden}
      onClick={onClick}
      className=""
    >
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  ${tw`
    border border-gray-500
    py-1 px-2.5
    rounded-xl
    uppercase text-xs font-bold
  `}
`

export default Button