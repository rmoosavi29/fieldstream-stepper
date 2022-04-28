import { FC } from 'react'
import './index.css'

export interface Props {
  disabled?: boolean
  variant?: 'primary' | 'secondary' | 'default'
  children?: any
  onClick?: () => void
}

const Button: FC<Props> = ({
  disabled = false,
  variant = 'default',
  children = '',
  onClick = () => {},
}) => {
  return (
    <button
      className={`button ${
        variant === 'primary'
          ? 'button--primary'
          : variant === 'secondary'
          ? 'button--secondary'
          : 'button--default'
      }`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
