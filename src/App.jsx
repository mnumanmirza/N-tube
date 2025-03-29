import React from 'react'
import { Outlet} from 'react-router-dom'
import Header from './Components/Header'







function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
   
    </>
  )
}

export default App
