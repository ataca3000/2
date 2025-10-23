import '../styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Componets, pageProps }) {
  return (
    <main className={inter.className}>
      <Componets {...pageProps} />
    </main>
  )
}
