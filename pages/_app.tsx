import { AppProps } from 'next/app'
import '../styles/globals.css'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'

const App = ({ pageProps, Component }: AppProps) => {
  useEffect(() => {
    AOS.init({
      once: true,
      ease: 'ease-in-out-back'
    })
  }, [])
  return (
    <ParallaxProvider>
      <Component {...pageProps} />
    </ParallaxProvider>
  )
}

export default App
