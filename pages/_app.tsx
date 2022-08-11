import { AppProps } from 'next/app'
import '../styles/globals.css'
import 'swiper/css'
import 'swiper/css/effect-coverflow'

const App = ({ pageProps, Component }: AppProps) => {
  
  return (
    <Component {...pageProps} />
  )
}

export default App
