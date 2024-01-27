import { FC } from 'react'

import Container from '../container'
import Button from '../ui/button'

import TreeImage from '../../assets/images/header-preview-tree.png'

import cls from './index.module.scss'

const Preview: FC = () => {
  return (
    <header className={cls.header}>
      <Container>
        <div className={cls.row}>
          <div className={cls.content}>
            <h1 className={cls.title}>
              <span>NFT + 100 TULIP</span>
              <span>AIRDROP</span>
            </h1>
            <p className={cls.description}>
              Take advantage of a unique opportunity to join the world of
              digital art for free! Your name is already on the prestigious
              white list, which opens the door to the exclusive world of the
              NFT.
            </p>

            <div className={cls.btns}>
              <Button>MINT</Button>
              <Button big>INSTRUCTION</Button>
            </div>
          </div>
          <div className={cls.image}>
            <img src={TreeImage} alt='tree' />
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Preview
