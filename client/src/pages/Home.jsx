import React from 'react'
import Navbar from '../components/Navbar'
import Promotion from '../components/Promotion'
// import Slider from '../components/Slider'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import Products from '../components/Products'
import ProductsTitle from '../components/ProductsTitle'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Promotion/>
      <Navbar/>
      <Hero/>
      <Categories/>
      <ProductsTitle/>
      <Products/>
      <Newsletter/>
      <Footer />
    </div>
  )
}

export default Home