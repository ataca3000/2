// pages/_app.js
import { CartProvider } from '../context/CartContext.js'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  )
}
