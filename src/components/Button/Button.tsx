import { ButtonProps } from './types'

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