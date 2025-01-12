import Image from 'next/image'
import { Block } from '@/ui'
import Link from 'next/link'

const Footer = ({ general }) => {
  const { phone, email, facebook_url, instagram_url, tiktok_url, youtube_url } =
    general

  const socialMedia = [
    { name: 'youtube', url: youtube_url, icon: '/icons/youtube.svg' },
    { name: 'facebook', url: facebook_url, icon: '/icons/facebook.svg' },
    { name: 'instagram', url: instagram_url, icon: '/icons/instagram.svg' },
    { name: 'tiktok', url: tiktok_url, icon: '/icons/tiktok.svg' },
  ]
  return (
    <footer>
      <Block className="pt-0 pb-4 md:pt-0 md:pb-12">
        <div className="flex flex-col items-center gap-8 pt-4 border-t border-gray-200 md:items-start md:flex-row md:pt-12">
          <div className="flex flex-col gap-4">
            <Image
              src="/logo-white.svg"
              alt="moravski"
              width={181}
              height={53}
            />
            <Link href="/privacy-policy" className="text-sm">
              Політика конфіденційності
            </Link>
            <div className="flex gap-4">
              <Image
                src="/mastercard.svg"
                alt="mastercard"
                width={50}
                height={50}
              />
              <Image src="/visa.svg" alt="visa" width={50} height={50} />
              <Image src="/liqpay.svg" alt="liqpay" width={72} height={15} />
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 md:items-end md:ml-auto">
            <div className="flex gap-4">
              {/* <Image src="/email.svg" alt="email" width={24} height={24} /> */}
              <a href={`mailto:${email}`}>{email}</a>
            </div>
            <div className="flex gap-4">
              {socialMedia.map((item, index) => (
                <Link external href={item.url} key={index}>
                  <Image
                    src={item.icon}
                    width={32}
                    height={32}
                    title={item.name}
                    alt={item.name}
                  />
                </Link>
              ))}
            </div>
            <div className="flex gap-4">
              {/* <Image src="/phone.svg" alt="phone" width={24} height={24} /> */}
              <a href={`tel:${phone}`}>{phone}</a>
            </div>
          </div>
        </div>
        <p className="text-sm text-center">© 2023 — Усі права захищені.</p>
      </Block>
    </footer>
  )
}

export default Footer
