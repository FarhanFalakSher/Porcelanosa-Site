import React from 'react'
import HeroSection from '../components/home/HeroSection'
import ProductCategories from '../components/home/ProductCategories'
import FeaturedCollections from '../components/home/FeaturedCollections'
import AboutBrand from '../components/home/AboutBrand'
import FeaturedProjects from '../components/home/FeaturedProjects'
import CTASection from '../components/home/CTASection'


const Home = () => {
  return (
    <div>
      <HeroSection/>
      <ProductCategories/>
      <FeaturedCollections/>
      <AboutBrand/>
      <FeaturedProjects/> 
      <CTASection/>
    </div>
  )
}

export default Home;
