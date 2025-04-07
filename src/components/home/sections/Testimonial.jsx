import React from 'react'
import Title from '../../helpers/Title'
import SubHeading from '../../helpers/SubHeading'
import { testmonialSlide } from '../../dummyData/testimonialslide'
import TestmonialSlide from '../../helpers/TestmonialSlide'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";



const Testimonial = () => {
  return (
    <>
        <div className='bg-bgColor mt-[100px] pt-[130px]'>
            
            <div className='max-w-containerWidth mx-auto'>
                <Title  titleText={'TESTIMONIALS'} textLeft={'true'}/>
                <SubHeading subHeadingText={'Other Hear From Some Previous Clients'}/>
                <p className='font-poppins font-normal leading-8 text-xl text-[#7D7D7D] mt-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod.</p>

            </div>

            <div className='flex items-center justify-center gap-10 max-w-containerWidth mx-auto mt-[50px]'>
            <FaLongArrowAltLeft className='text-[25px] hover:text-[#cd2822] cursor-pointer'/>

                {
                    testmonialSlide.map((item) => (
                            <TestmonialSlide key={item.id} para={item.para} images={item.images} name={item.name} designation={item.designation}/>
                    ))
                }
                <FaLongArrowAltRight className='text-[25px] hover:text-[#cd2822] cursor-pointer'/>

            </div>

        </div>
    </>
  )
}

export default Testimonial