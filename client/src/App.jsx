import { BrowserRouter, Route,Navigate , Routes} from 'react-router-dom'
import './App.css'
import React from 'react'
import Home from './Pages/Home'
import Country from './Pages/Country'
import EachNumber from './Pages/EachNumber'
import NotFound from './Pages/NotFound'
function App() {
  return (
    <>
    
      <BrowserRouter>
     <Routes>
     <Route path="/home" element={<Home />} />
     <Route path="/en/:id" element={<Country />} />
     <Route path="/en/:id/number/:number" element={<EachNumber />} />
     <Route path = "/404" element={<NotFound />} />
     <Route path="/" element={<Navigate to="/home" />} />
     <Route path="/*" element={<Navigate to="/404" />} />
        </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
