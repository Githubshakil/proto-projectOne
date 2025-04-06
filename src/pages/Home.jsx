import React from 'react'
import Navbar from '../components/home/sections/Navbar'
import Banner from '../components/home/sections/Banner'
import WhatWeDo from '../components/home/sections/WhatWeDo'
import Services from '../components/home/sections/Services'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Banner/>
        <WhatWeDo/>
        <Services/> 
        
    </>
  )
}

export default Home