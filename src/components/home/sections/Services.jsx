import React from 'react'
import serviceImg from '../../../assets/images/service_img.jpg'
import Title from '../../helpers/Title'
import SubHeading from '../../helpers/SubHeading'
import ServiceList from '../../helpers/ServiceList'
import { serviceList } from '../../dummyData/serviceList'
import { FaArrowRightLong } from "react-icons/fa6";
import bgTwo from '../../../assets/images/background-2.jpg'
import Button from '../../helpers/Button'

const Services = () => {
  return (
    <>
        <div className='  bg-bgColor w-[1980px] '>

            <div className='flex items-center gap-[75px]  max-w-containerWidth  mx-auto mt[100px]'>
                <div>
                    <img src={serviceImg} alt="img" />
                </div>

                <div className='bg-white py-[50px] px-[50px] '>
                    <Title titleText={'SPECIAL SERVICES'} textLeft={'true'}/>
                    <SubHeading subHeadingText={'Other Industries'}/>
                    <p className='font-poppins text-secondary font-normal text-[16px] w-[525px] leading-8 mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod.</p>
                    <div className='mb-8'>
                    {
                        serviceList.map((item) => (
                            <ServiceList key={item.id} itemList={item.itemList} icon={item.icon}/>
                        ))
                    }
                        
                    
                    </div>
                     <a href="#" className='font-poppins text-[13px]  text-[#cd2822] hover:text-[#e4413c] duration-300 '>READ MORE <FaArrowRightLong className=' inline-block ml-1'/>
                     </a>
                </div>
            </div>
            <div className='mt-[100px] relative'>
                <img src={bgTwo} alt="" />
                <div className=' max-w-containerWidth mx-auto absolute top-[100px] left-[25%] flex items-center gap-[100px] tracking-widest leading-[42px]'>
                    <h3 className='font-poppinsb font-bold text-[31px] text-white '>Custom Steel Pipe For Your Next Project</h3> 
                    <Button buttonText={'GET A QUOTE'}/>
                </div>
            </div>

        </div>
    </>
  )
}

export default Services