import { FC, ReactNode } from 'react'

import cls from './index.module.scss'

interface IButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  big?: boolean
}

const Button: FC<IButtonProps> = ({ onClick, children, big, className }) => {
  const wraperCls = `${cls.btn} ${className} ${big ? cls.big : cls.small}`

  return (
    <button className={wraperCls} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
