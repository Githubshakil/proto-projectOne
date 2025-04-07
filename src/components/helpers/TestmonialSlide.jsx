import React from 'react'
import { FaQuoteLeft } from "react-icons/fa6";

const TestmonialSlide = ({para,images,name,designation}) => {
  return (
    <>
        <div>
            <div className='flex gap-2'>
            <FaQuoteLeft className='text-[20px] text-[#cd2822]' />
            <p className='font-poppins text-[14px] text-[#7D7D7D] w-[415px] leading-[26px]'>{para}</p> 
            </div>
        <div className='flex gap-5 items-center mt-5'>
            <img src={images} alt="" className='rounded-full ml-6' />
            <div>
            <h4 className='font-poppin text-xl font-bold text-black'>{name}</h4>
            <span className='font-poppins text-sm text-[#838383]'>{designation}</span>
            </div>
        </div>

        </div>
    </>
  )
}

export default TestmonialSlide