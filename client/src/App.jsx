import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
const App = () => {
  return (
      <Routes>
        <Route eaxt path='/' component={Home}/>
        <Route path='/blog' component={Blog}/>
      </Routes>
    
  )
}

export default App
