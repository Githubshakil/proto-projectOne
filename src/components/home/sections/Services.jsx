import React from 'react'
import serviceImg from '../../../assets/images/service_img.jpg'
import Title from '../../helpers/Title'
import SubHeading from '../../helpers/SubHeading'

const Services = () => {
  return (
    <>
        <div className='  bg-bgColor w-[1980px] '>

            <div className='flex items-center gap-[75px]  max-w-containerWidth  mx-auto'>
                <div>
                    <img src={serviceImg} alt="img" />
                </div>

                <div className='bg-white '>
                    <Title titleText={'SPECIAL SERVICES'} textLeft={'true'}/>
                    <SubHeading subHeadingText={'Other Industries'}/>
                    <p className='font-poppins text-secondary font-normal text-[16px] w-[525px] leading-8 mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod.</p>
                </div>
            </div>

        </div>
    </>
  )
}

export default Services