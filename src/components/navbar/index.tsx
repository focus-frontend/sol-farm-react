import { FC } from 'react'

import Container from '../container'
import Button from '../ui/button'

import LogoImage from '../../assets/images/logo.png'

import cls from './index.module.scss'

const Navbar: FC = () => {
  return (
    <Container className={cls.container}>
      <nav className={cls.navbar}>
        <a className={cls.logo} href='#'>
          <img src={LogoImage} alt='logo' />
        </a>

        <div className={cls.links}>
          <a className={cls.link} href='#get-award'>
            Get Award
          </a>
          <a className={cls.link} href='#about'>
            About
          </a>
          <a className={cls.link} href='#nft-items'>
            Nft items
          </a>
        </div>

        <Button className={cls.btn}>Connect</Button>
      </nav>
    </Container>
  )
}

export default Navbar
