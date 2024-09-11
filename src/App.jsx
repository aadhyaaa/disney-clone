import React from 'react'
import './index.css';
import Header from './Components/Header';
import Slider from './Components/Slider';
import ProductionHouse from './Components/ProductionHouse';
import GenreMovieList from './Components/GenreMovieList';
function App() {
  return (
  <h1 class="">
    <Header/>
    <Slider/>
    <ProductionHouse/>
    <GenreMovieList/>
  </h1>
  )
}

export default App
