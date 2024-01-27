import { FC } from 'react'

import Container from '../container'

import cls from './index.module.scss'

const Footer: FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={cls.footer}>
      <Container>
        <p className={cls.copyright}>
          © {currentYear} SOLFARM. All rights reserverd
        </p>
      </Container>
    </footer>
  )
}

export default Footer
