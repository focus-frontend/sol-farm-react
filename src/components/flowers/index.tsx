import { FC } from 'react'

import Container from '../container'
import Timer from '../timer'

import LogoImage from '../../assets/images/flowers-description-logo.png'
import FlowerImage from '../../assets/images/flower.svg'

import cls from './index.module.scss'

const Flowers: FC = () => {
  return (
    <section id='about' className={cls.flowers}>
      <Timer className={cls.timer} />
      <Container className={cls.container}>
        <img className={cls.flowerone} src={FlowerImage} alt='flower' />
        <img className={cls.flowerthree} src={FlowerImage} alt='flower' />

        <p className={cls.description}>
          <img className={cls.logo} src={LogoImage} alt='logo' />
          <img className={cls.flowertwo} src={FlowerImage} alt='flower' />
          Welcome to the digital farm game on the SOLFARM, where every blade of
          grass sprouting becomes an exciting money-making opportunity. With
          SOLFARM, you can mine coins, expand your farm, and create unique NFTs
          with each success. Join now to explore the vibrant world of
          Play-to-Earn, where creativity and earning money blend seamlessly.
          Make sure you're ready to elevate your farm to new heights on the SOL
          platform!
        </p>
      </Container>
    </section>
  )
}

export default Flowers
