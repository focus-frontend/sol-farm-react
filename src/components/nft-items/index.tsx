import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import Container from '../container'

import NftItemOneImage from '../../assets/images/nft-item-1.png'
import NftItemTwoImage from '../../assets/images/nft-item-2.png'
import NftItemThreeImage from '../../assets/images/nft-item-3.png'
import NftItemFourImage from '../../assets/images/nft-item-4.png'

import 'swiper/css'
import cls from './index.module.scss'

const NftItems: FC = () => {
  return (
    <section id='nft-items' className={cls.nft}>
      <Container>
        <div className={cls.slider}>
          <Swiper
            // autoplay={{ delay: 1000, disableOnInteraction: false }}
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
          >
            <SwiperSlide className={cls.slide}>
              <img className={cls.image} src={NftItemOneImage} alt='nft item' />
            </SwiperSlide>
            <SwiperSlide className={cls.slide}>
              <img className={cls.image} src={NftItemTwoImage} alt='nft item' />
            </SwiperSlide>
            <SwiperSlide className={cls.slide}>
              <img
                className={cls.image}
                src={NftItemThreeImage}
                alt='nft item'
              />
            </SwiperSlide>
            <SwiperSlide className={cls.slide}>
              <img
                className={cls.image}
                src={NftItemFourImage}
                alt='nft item'
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </section>
  )
}

export default NftItems
