import { FC, ReactNode } from 'react'

import cls from './index.module.scss'

interface IContainerProps {
  children: ReactNode
  className?: string
}

const Container: FC<IContainerProps> = ({ children, className }) => {
  const wraperCls = `${cls.container} ${className}`

  return <div className={wraperCls}>{children}</div>
}

export default Container
