import { FC, useEffect, useState } from 'react'

import Container from '../container'
import Button from '../ui/button'
import Animation from '../animation'

import LogoImage from '../../assets/images/logo.png'

import cls from './index.module.scss'

const Navbar: FC = () => {
  const [inView, setInView] = useState(false)

  useEffect(() => {
    setInView(true)
  }, [])

  return (
    <Animation className={cls.fixed} inView={inView} delay={100}>
      <Container className={cls.container}>
        <nav className={cls.navbar}>
          <Animation inView={inView} delay={100} left={-50}>
            <a className={cls.logo} href='#'>
              <img src={LogoImage} alt='logo' />
            </a>
          </Animation>

          <Animation inView={inView} delay={100}>
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
          </Animation>

          <Animation inView={inView} delay={100} left={50}>
            <Button className={cls.btn}>Connect</Button>
          </Animation>
        </nav>
      </Container>
    </Animation>
  )
}

export default Navbar
