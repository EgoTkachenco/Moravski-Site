'use client'
import { useText } from '@/locales'
import { Block, BlockColumn, BlockSubTitle, Button, Link } from '@/ui'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useEffect, useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)

const BannerBlock = ({ block }) => {
  const t = useText()
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('#banner-content', { opacity: 0, display: 'none' })
      gsap.set('#banner-subtitle', { opacity: 0, display: 'none' })
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.banner-container',
          start: 'top top',
          end: `+=600`,
          scrub: 2,
          anticipatePin: 1,
          pin: true,
          markers: false,
        },
      })

      tl
        // .to('#banner-btns', { opacity: 0, duration: 0.1 })
        .to(
          '#banner-background',
          {
            opacity: 0.75,
            duration: 0.2,
          },
          '<'
        )
        .to('#banner-title', { color: '#fff', duration: 0.2 }, '<')
        // .to('#banner-btns', { display: 'none', duration: 0 })
        .to(['#banner-content', '#banner-subtitle'], {
          display: 'block',
          color: '#fff',
          duration: 0,
          y: -16,
        })
        .to(
          ['#banner-content', '#banner-subtitle'],
          {
            opacity: 1,
            y: 0,
            duration: 0.2,
          },
          '<'
        )
        .to(null, {}, 1)
    })

    return () => {
      ctx.clear()
    }
  }, [])

  return (
    <Block
      className="flex flex-wrap grow-0"
      containerClassName="banner-container h-screen bg-cover bg-[url(/banner.jpg)]"
    >
      <div
        id="banner-background"
        className="absolute inset-0 bg-dark opacity-0"
      />

      <div
        id="banner-title"
        className="relative w-full font-medium uppercase text-dark mt-24 mb-8"
      >
        <h2 className="text-4xl">
          {block.title.split(' ').slice(0, 2).join(' ')}
        </h2>
        <h1 className="text-8xl">{block.title.split(' ')[2]}</h1>
      </div>

      {/* <BlockColumn id="banner-btns" className="relative">
        <Button variant="dark">{t('join-us')}</Button>
        <Link href="/support" className="text-dark mt-16">
          {t('support-us')}
        </Link>
      </BlockColumn> */}

      <BlockColumn id="banner-subtitle" className="relative">
        <BlockSubTitle>{block.subtitle}</BlockSubTitle>
      </BlockColumn>

      <BlockColumn
        id="banner-content"
        className="relative text-2xl"
        dangerouslySetInnerHTML={{ __html: block.content }}
      />
    </Block>
  )
}

export default BannerBlock
