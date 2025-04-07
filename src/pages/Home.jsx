import React from 'react'
import Navbar from '../components/home/sections/Navbar'
import Banner from '../components/home/sections/Banner'
import WhatWeDo from '../components/home/sections/WhatWeDo'
import Services from '../components/home/sections/Services'
import WeWork from '../components/home/sections/WeWork'
import Testimonial from '../components/home/sections/Testimonial'
import Advantage from '../components/home/sections/Advantage'
import Blog from '../components/home/sections/Blog'
import Contact from '../components/home/sections/Contact'


const Home = () => {
  return (
    <>
        <Navbar/>
        <Banner/>
        <WhatWeDo/>
        <Services/> 
        <WeWork/>
        <Testimonial/>
        <Advantage/>
        <Blog/>
        <Contact/>
        
        
    </>
  )
}

export default Home