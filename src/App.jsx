import React from 'react'
import Sidebar from './components/sidebar'
import Maincontent from './components/maincontent'

const App = () => {
  return (  
    <div className='flex'>
     <Sidebar />
     <Maincontent />
    </div>
  )
}

export default App
