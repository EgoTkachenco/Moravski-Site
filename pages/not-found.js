import { useText } from '@/locales'
import { Button } from '@/ui'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  const t = useText()
  return (
    <div className="h-screen flex flex-col gap-8 items-center justify-center bg-[url('/404-back.svg')] bg-cover">
      <Image src="/404.svg" alt="404" width={696} height={300} />
      <h1 className="text-3xl">{t('404_title')}</h1>
      <Link href="/">
        <Button href="/">{t('404_redirect')}</Button>
      </Link>
    </div>
  )
}
