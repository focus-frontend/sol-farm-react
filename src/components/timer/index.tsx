import { FC } from 'react'
import Countdown from 'react-countdown'

import cls from './index.module.scss'

const Timer: FC<{ className: string }> = ({ className }) => {
  const startTimerSeconds = Date.now() + 384.4 * 10000

  const timerBody = ({ hours, formatted, props }: any) => (
    <span className={props.className}>
      {hours}:{formatted.minutes}:{formatted.seconds}
    </span>
  )

  return (
    <div className={`${cls.frame} ${className}`}>
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
  )
}

export default Timer
