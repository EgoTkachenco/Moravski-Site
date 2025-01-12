'use client'
import { Block, BlockName, BlockPageLink, BlockTitle } from '@/ui'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/parallax'
import 'swiper/css/effect-coverflow'
import Image from 'next/image'
import { useText } from '@/locales'
import Link from 'next/link'

const CarouselBlock = ({ block_name, title, slides, type }) => {
  const t = useText()
  const page = type === 'future concerts' ? '/concerts' : null
  return (
    <div className="mb-12">
      <Block>
        <BlockName>{block_name}</BlockName>
        <div className="flex flex-col-reverse items-end justify-between md:flex-row">
          <BlockTitle>{title}</BlockTitle>

          {page && (
            <BlockPageLink className="mb-8" href={page}>
              {t('see-all')}
            </BlockPageLink>
          )}
        </div>
      </Block>

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
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <ConcertSlide {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default CarouselBlock

const ConcertSlide = ({ title, image, documentId }) => (
  <Link href={'/concerts/' + documentId} className="block relative h-[400px]">
    <Image src={image.url} alt={title} fill objectFit="cover" />
  </Link>
)
