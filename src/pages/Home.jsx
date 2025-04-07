import React from 'react'
import Navbar from '../components/home/sections/Navbar'
import Banner from '../components/home/sections/Banner'
import WhatWeDo from '../components/home/sections/WhatWeDo'
import Services from '../components/home/sections/Services'
import WeWork from '../components/home/sections/WeWork'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Banner/>
        <WhatWeDo/>
        <Services/> 
        <WeWork/>
        
    </>
  )
}

export default Home