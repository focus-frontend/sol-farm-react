import { FC, useEffect, useState } from 'react'

import Container from '../container'
import Button from '../ui/button'
import Animation from '../animation'

import TreeImage from '../../assets/images/header-preview-tree.png'

import cls from './index.module.scss'

const Preview: FC = () => {
  const [inView, setInView] = useState(false)

  useEffect(() => {
    setInView(true)
  }, [])

  return (
    <header id='get-award' className={cls.header}>
      <Container>
        <div className={cls.row}>
          <div className={cls.content}>
            <h1 className={cls.title}>
              <Animation inView={inView} delay={100} left={-100}>
                <span>NFT + 100 TULIP</span>
              </Animation>
              <Animation inView={inView} delay={150} left={-150}>
                <span>AIRDROP</span>
              </Animation>
            </h1>

            <Animation inView={inView} delay={200} left={-200}>
              <p className={cls.description}>
                Take advantage of a unique opportunity to join the world of
                digital art for free! Your name is already on the prestigious
                white list, which opens the door to the exclusive world of the
                NFT.
              </p>
            </Animation>

            <Animation inView={inView} delay={250} left={-250}>
              <Button className={cls.btn}>MINT</Button>
            </Animation>
          </div>

          <Animation inView={inView} delay={250} left={250}>
            <div className={cls.image}>
              <img src={TreeImage} alt='tree' />
            </div>
          </Animation>
        </div>
      </Container>
    </header>
  )
}

export default Preview
