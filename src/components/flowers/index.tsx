import { FC } from 'react'

import Container from '../container'
import Timer from '../timer'

import LogoImage from '../../assets/images/flowers-description-logo.png'
import FlowerImage from '../../assets/images/flower.svg'

import cls from './index.module.scss'
import useOnScreen from '../../hooks/on-screen.hook'
import Animation from '../animation'

const Flowers: FC = () => {
  const { inView, ref } = useOnScreen()

  return (
    <Animation className={cls.wraper} inView={inView} delay={100}>
      <Timer className={cls.timer} />
      <section id='about' className={cls.flowers} ref={ref}>
        <Container className={cls.container}>
          <img className={cls.flowerone} src={FlowerImage} alt='flower' />
          <img className={cls.flowerthree} src={FlowerImage} alt='flower' />

          <div className={cls.description}>
            <img className={cls.logo} src={LogoImage} alt='logo' />
            <img className={cls.flowertwo} src={FlowerImage} alt='flower' />
            <p>
              Welcome to the digital farm game on the SOLFARM, where every blade
              of grass sprouting becomes an exciting money-making opportunity.
              With SOLFARM, you can mine coins, expand your farm, and create
              unique NFTs with each success. Join now to explore the vibrant
              world of Play-to-Earn, where creativity and earning money blend
              seamlessly. Make sure you're ready to elevate your farm to new
              heights on the SOL platform!
            </p>
          </div>
        </Container>
      </section>
    </Animation>
  )
}

export default Flowers
