import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Slider from './components/Slider'
import ProductionHouse from './components/ProductionHouse'
import GenreMovieList from './components/GenreMovieList'
import Footer from './components/Footer'



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
