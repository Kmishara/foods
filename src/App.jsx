import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import ProtectedRoutes from './Components/ProtectedRoutes'



const App = () => {
  
  return (
   <div>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/About' element={<ProtectedRoutes element={<About/>} /> }/>
  <Route path='/*' element={<Error/>}/>
</Routes>
   </div>
  )
}

export default App