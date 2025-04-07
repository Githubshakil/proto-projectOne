import React from 'react'
import SubHeading from '../../helpers/SubHeading'
import Info from '../../helpers/Info'
import { IoLocationOutline } from "react-icons/io5";
import { BsEnvelope } from "react-icons/bs";
import { MdOutlinePhoneIphone } from "react-icons/md";


const Contact = () => {
  return (
    <>
        <div className='max-w-containerWidth mx-auto '>
            <div>
                <SubHeading subHeadingText={'Contact Us'}/>
            </div>

            <div className='flex gap-5 mt-12'>
                <div>
                    <IoLocationOutline  className='text-[50px] text-[#cd2822]'/>
                </div>
                <div>
                    <Info infoName={'Address'}/>
                    <div className='flex gap-7 mt-6'>
                        <div>
                            <h6 className='font-poppins font-bold text-base leading-6'>Office/Sales</h6>
                            <p className='font-poppins mt-3 text-secondary text-[14px] leading-6'>
                            123 Street Name <br/>
                            New York <br/>
                            12345  
                            </p>
                        </div>
                        <div>
                            <h6 className='font-poppins font-bold text-base leading-6'>Factory</h6>
                            <p className='font-poppins mt-3 text-secondary text-[14px] leading-6'>
                            123 Street Name <br/>
                            New York <br/>
                            12345  
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='flex gap-5 mt-12'>
                <div>
                <BsEnvelope className='text-[50px] text-[#cd2822]' />
                </div>
                  <div>
                    <Info infoName={'E-mail Address'}/>
                    <p  className='font-poppins mt-3 text-secondary text-[14px] leading-1 hover:text-[#cd2822] cursor-pointer duration-300'>porto@porto.com</p>
                    <p  className='font-poppins  text-secondary text-[14px] leading-1 hover:text-[#cd2822] cursor-pointer duration-300'>porto2@porto.com</p>
                  </div>  

            </div>



            <div className='flex gap-5 mt-12'>
                <div>
                <MdOutlinePhoneIphone className='text-[50px] text-[#cd2822]' />
                </div>
                  <div>
                    <Info infoName={'Phone Number'}/>
                    <p  className='font-poppins mt-3 text-secondary text-[14px] leading-1 hover:text-[#cd2822] cursor-pointer duration-300'>(800) 123-4567</p>
                    <p  className='font-poppins  text-secondary text-[14px] leading-1 hover:text-[#cd2822] cursor-pointer duration-300'>(800) 123-9876</p>
                  </div>  

            </div>




        </div>
    </>
  )
}

export default Contact