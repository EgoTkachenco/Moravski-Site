'use client'
import { Block, BlockName, BlockTitle } from '@/ui'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/parallax'
import 'swiper/css/effect-coverflow'
import Image from 'next/image'

const CarouselBlock = ({ block_name, title, slides }) => {
  return (
    <Block>
      <BlockName>{block_name}</BlockName>

      <BlockTitle>{title}</BlockTitle>
      <Swiper
        loop={true}
        speed={800}
        spaceBetween={50}
        slidesPerView={2}
        centeredSlides={true}
        modules={[EffectCoverflow]}
        effect="coverflow"
        coverflowEffect={{
          rotate: 25, // Slide rotate in degrees
          stretch: 0, // Stretch space between slides (in px)
          depth: 50, // Depth offset in px (slides translate in Z axis)
          modifier: 1, // Effect multipler
          slideShadows: true, // Enables slides shadows
        }}
        grabCursor={true}
        parallax={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        breakpoints={{
          1023: {
            slidesPerView: 2,
            spaceBetween: 0,
          },

          1: {
            slidesPerView: 1.5,
            spaceBetween: 0,
          },
        }}
        data-aos="fade-up"
      >
        {[1, 2, 3, 4, 5, 6, 6, 7, 8, 9].map((slide, i) => (
          <SwiperSlide key={i}>
            <ConcertSlide />
            {/* <Link href={routes.concerts + '/' + slide.slug}>
              <div className={styles.slide_image}>
                <img src={slide.image} alt={slide.title} />
              </div>
            </Link> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </Block>
  )
}

export default CarouselBlock

const ConcertSlide = () => (
  <div className="relative h-[400px]">
    <Image src="/news/news1.png" alt="news" fill objectFit="cover" />
  </div>
)
