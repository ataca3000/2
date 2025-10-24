import '../styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function App({ componets, pageProps }) {
  return (
    <main className={inter.className}>
      <componets {...pageProps} />
    </main>
  )
}
