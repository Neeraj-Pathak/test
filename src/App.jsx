import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home'; 
import Foot from './components/Foot';
import Header from './components/Header';
import Menu from './components/Pages/Menu';
import "./index.css";

function App() {
  return (
  <div>

    <Navbar/>
    <BrowserRouter>
    <Routes>
      <Route index element={<Navbar />}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/footer" element={<Foot/>}/>
      <Route path="/menu" element={<Menu/>}/>
    </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
