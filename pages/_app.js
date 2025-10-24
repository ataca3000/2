import '../styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function App({ components, pageProps }) {
  return (
    <main className={inter.className}>t
      <components {...pageProps} />
    </main>
  )
}
