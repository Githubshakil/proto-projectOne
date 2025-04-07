import React from 'react'
import advantageImg from '../../../assets/images/advantage.jpg'
import Title from '../../helpers/Title'
import SubHeading from '../../helpers/SubHeading'
import { PiPlayCircleBold } from "react-icons/pi";

const Advantage = () => {
  return (
    <>
        <div className='my-[100px]'>
            <div className='max-w-containerWidth mx-auto flex items-center gap-5'>
                <div className='w-[50%] relative'>
                    <img src={advantageImg} alt="" />
                    <PiPlayCircleBold className='text-[100px] text-white opacity-50 absolute translate-x-[-40%] translate-y-[-50%] top-[60%] left-[40%]' />

                </div>
                <div className='w-[50%]'>
                <Title titleText={'THE ADVANTAGE'} textLeft={'true'}/>
                <SubHeading subHeadingText={'Our Facilities'} />
                <h5 className='font-poppins text-xl text-secondary font-normal mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod.</h5>
                <p className='font-poppins text-secondary text-[14px] leading-[26px] font-normal mt-6'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur. Vestibulum auctor felis eget orci semper vestibulum. Pellentesque ultricies nibh gravida, accumsan libero luctus, molestie nunc. In nibh ipsum, blandit id faucibus ac, finibus vitae dui.
                </p>



                </div>
            </div>
        </div>
    </>
  )
}

export default Advantage