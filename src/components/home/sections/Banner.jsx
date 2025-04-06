import React from 'react'
import protoBg1 from '../../../assets/images/protoBg1.jpg'
import Button from '../../helpers/Button'
import heroImgOne from '../../../assets/images/hero-1.jpg'
import heroImgTwo from '../../../assets/images/hero-2.jpg'
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
  return (
    <>
        <div >
        <div className='bg-bgColor bg-center pt-14 relative w-[1980px] '>
            <img src={protoBg1} alt="" className='w-[1980px]' />
        <div className='flex flex-col items-end pr-7 justify-center text-center w-[600px] h-[500px] bg-bgColor absolute left-0 top-0 z-10' >
                <h2 className='font-poppins leading-[44px] text-4xl font-samibold text-headingColor capitalize '>The future of steel</h2>
                <h1 className='font-poppins leading-[62px] text-[52px] font-extrabold text-headingColor capitalize  '>Solution Are Here</h1>
                <h5 className='font-poppins leading-[26px] text-xl font-normal text-secondary capitalize mb-4  '>Metals industry with by high technology innovation</h5>
                <Button href={'#'} buttonText={'GET STARTED'}/>
            </div>

            <div className=' absolute left-[62%] top-8'>
                <img src={heroImgOne} alt="" />
            </div>
            <div className=' overflow-y-hidden absolute left-[20%] top-[45%] '>
                <img src={heroImgTwo} alt="" />
            </div>
        </div>
        </div>
        <div className='flex justify-between items-center max-w-containerWidth mx-auto mt-[100px] mb-[100px]'>
            <div>
                <h3 className='font-poppins font-bold text-[42px] capitalize'>The Highest Quality</h3>
                <h6 className='font-poppins font-medium text-[17px] text-[#cd2822] tracking-widest	'>THE LARGEST METALS MANUFACTURING</h6>
                <p className='font-poppins text-secondary font-normal text-[16px] w-[525px] leading-8 mt-6'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur.
                </p>
            </div>
            <div>
                <p className='font-poppins font-normal text-[14px] max-w-[525px] mb-6 text-secondary'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur. Vestibulum auctor felis eget orci semper vestibulum. Pellentesque ultricies nibh gravida, accumsan libero luctus, molestie nunc. In nibh ipsum, blandit id faucibus ac, finibus vitae dui.  
                </p>
                <a href="#" className='font-poppins text-[13px]  text-[#cd2822] hover:text-[#e4413c] duration-300'>READ MORE <FaArrowRightLong className=' inline-block ml-1'/>
                </a>
            </div>
        </div>

            

    </>
  )
}

export default Banner