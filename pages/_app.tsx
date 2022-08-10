import { AppProps } from 'next/app'
import "../styles/globals.css"
import "swiper/css";
import "swiper/css/effect-coverflow";
import { createContext, useEffect, useState } from 'react'

export const SidebarContext = createContext({
  isSidebarOpen: false,
  toggleIsSidebarOpen: (prev?) => {}
})

//TODO: Review sidebar
//TODO: Review classes
//TODO: Review margin - padding - font size

const App = ({ pageProps, Component }: AppProps) => {
  const [isSidebarOpen, toggleIsSidebarOpen] = useState<boolean>(false)
  
  useEffect(() => {
    const sidebar = document.getElementById('sidebar')
    if(sidebar)
      sidebar.style.display = isSidebarOpen ? 'block' : 'none'
  }, [isSidebarOpen])
  
  return (
    <SidebarContext.Provider value={{
      isSidebarOpen: isSidebarOpen,
      toggleIsSidebarOpen: toggleIsSidebarOpen
    }}>
      <Component {...pageProps} />
    </SidebarContext.Provider>
  )
}

export default App
