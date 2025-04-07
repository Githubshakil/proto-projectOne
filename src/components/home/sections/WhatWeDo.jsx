import React from 'react'
import Title from '../../helpers/Title'
import SubHeading from '../../helpers/SubHeading'
import IndustriesCart from '../../helpers/IndustriesCart'
import icon1 from '../../../assets/images/icon-automotive.png' 
import icon2 from '../../../assets/images/icon-electrical-tower.png' 
import icon3 from '../../../assets/images/icon-oil.png' 
import icon4 from '../../../assets/images/icon-solar-energy.png' 
import categoryImg1 from '../../../assets/images/category-1.jpg'
import categoryImg2 from '../../../assets/images/category-2.jpg'
import categoryImg3 from '../../../assets/images/category-3.jpg'
import categoryImg4 from '../../../assets/images/category-4.jpg'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";


const WhatWeDo = () => {
  return (
    <>
    <div className=' bg-bgColor py-[100px]  '>
        <div className='max-w-containerWidth mx-auto '>
            <Title titleText={'WHAT WE DO'} />
            <SubHeading subHeadingText={'A Selection Of Industries We Serve'} textleft={'false'}/>
            <p className='font-poppins text-secondary font-normal text-[16px] w-[500px] leading-8 mt-6 ml-[30%]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur.
            </p>
        </div>

     <div className=' max-w-containerWidth mx-auto flex items-center'>
        <FaArrowLeftLong className='hover:text-[#cd2822] duration-300 cursor-pointer text-[25px]'/>
     <div className='max-w-containerWidth mx-auto mt-10'>
                <IndustriesCart icon={icon1} categoryImg={categoryImg1} titleName={'Automotive'}/>
        </div>
        <div className='max-w-containerWidth mx-auto mt-10'>
                <IndustriesCart icon={icon3} categoryImg={categoryImg2} titleName={'Oil & Gas'}/>
        </div>
        <div className='max-w-containerWidth mx-auto mt-10'>
                <IndustriesCart icon={icon4} categoryImg={categoryImg3} titleName={'Wind & Solar'}/>
        </div>
        <div className='max-w-containerWidth mx-auto mt-10'>
                <IndustriesCart icon={icon2} categoryImg={categoryImg4} titleName={'Eletrical'}/>
        </div>
        <FaArrowRightLong className='hover:text-[#cd2822] duration-300 cursor-pointer text-[25px]'/>
        <div className='max-w-containerWidth mx-auto mt-10'/>

     </div>

    </div>
    </>
  )
}

export default WhatWeDo