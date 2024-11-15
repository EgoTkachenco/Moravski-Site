import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export default function App({ Component, pageProps }) {
  return (
    <div className={`bg-dark ${montserrat.className}`}>
      <Component {...pageProps} />
    </div>
  )
}
