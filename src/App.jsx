import { BrowserRouter, Route , Routes} from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Country from './Pages/Country'
function App() {
  return (
    <>
    
      <BrowserRouter>
     <Routes>
     <Route path="/home" element={<Home />} />
     <Route path="/cont/:id" element={<Country />} />
        </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
