import React from 'react'
import Button from '../helpers/Button'

const HeaderSection = () => {
  return (
    <>
    <div className='max-w-containerWidth mx-auto py-4 overflow-visible '>
        <div className='flex justify-between items-center'>
            <div className='flex gap-6'>
                <h6 className='font-poppins font-normal text-sm '>Sales:<span className='font-poppins font-bold text-sm hover:text-[#D80D07] duration-300 cursor-pointer'>123-456-789</span></h6>
                <h6 className='font-poppins font-normal text-sm '>Service:<span className='font-poppins font-bold text-sm hover:text-[#D80D07] duration-300 cursor-pointer'>123-456-789</span></h6>
            </div>

            <div>
                <Button href={'#'} buttonText={'GET A QUOTE'} bgColor={true} />
            </div>
        </div>
    </div>
    <div className='border-b-2 bg-secondary mt-[2px] w-[1980px]' ></div>
        
                
            

       
    </>
  )
}

export default HeaderSection