import { AppProps } from 'next/app'
import "../styles/globals.css"
import { createContext, useEffect, useState } from 'react'

export const SidebarContext = createContext({
  isSidebarOpen: false,
  toggleIsSidebarOpen: (prev?) => {}
})

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
