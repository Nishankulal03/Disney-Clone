import { useState } from 'react'
import './App.css'
import Header from './Components/Header.jsx'
import Slider from './Components/Slider.jsx'
import ProductionHouse from './Components/ProductionHouse.jsx'
import GenreMovieList from './Components/GenreMovieList.jsx'
import Footer from './Components/Footer.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-black min-h-screen">
        <Header/>
        
        <Slider/>

        <ProductionHouse/>

        <GenreMovieList/>

        <Footer/>
    </div>
  )
}

export default App
