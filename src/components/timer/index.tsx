import { FC } from 'react'
import Countdown from 'react-countdown'

import Animation from '../animation'

import useOnScreen from '../../hooks/on-screen.hook'

import cls from './index.module.scss'

const Timer: FC<{ className: string }> = ({ className }) => {
  const startTimerSeconds = Date.now() + 384.4 * 10000
  const { inView, ref } = useOnScreen()

  const timerBody = ({ hours, formatted, props }: any) => (
    <span className={props.className}>
      {hours}:{formatted.minutes}:{formatted.seconds}
    </span>
  )

  return (
    <Animation className={cls.animation} inView={inView} delay={100}>
      <div className={`${cls.frame} ${className}`} ref={ref}>
        <h1 className={cls.title}>
          <span>1000 NFT</span>
          <span>100 TULIP</span>
        </h1>

        <Countdown
          className={cls.timer}
          date={startTimerSeconds}
          renderer={timerBody}
        />
      </div>
    </Animation>
  )
}

export default Timer
