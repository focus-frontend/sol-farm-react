import { FC, ReactNode } from 'react'

interface IAnimationProps {
  children: ReactNode
  inView: boolean
  delay?: number
  left?: number
  className?: string
}

const Animation: FC<IAnimationProps> = ({
  children,
  inView,
  delay,
  left,
  className,
}) => {
  const style = {
    opacity: inView ? 1 : 0,
    transform: `translateX(${inView ? 0 : left ? left : 0}px)`,
    transition: '1s',
    transitionDelay: (!delay ? 0 : delay / 1000) + 's',
  }

  return (
    <div style={style} className={className}>
      {children}
    </div>
  )
}

export default Animation
