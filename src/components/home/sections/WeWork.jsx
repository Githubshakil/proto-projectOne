import React from 'react'
import Title from '../../helpers/Title'
import SubHeading from '../../helpers/SubHeading'

const WeWork = () => {
  return (
    <>
        <div className='max-w-containerWidth mx-auto mt-[100px]'>
            <Title titleText={'HOW WE WORK'}/>
            <SubHeading subHeadingText={'Top Working Process'} textleft={'false'}/>
            <p className='font-poppins text-secondary font-normal text-[16px]  leading-8 mt-6 text-center w-[700px] ml-[20%] mb-[70px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur.</p>

            <div>
                <div className='flex justify-center items-center gap-[40px]'>
                    <div className='flex flex-col justify-center items-center '>
                        <div className='h-[100px] w-[100px] border-2 border-secondary  rounded-full text-center flex justify-center items-center text-[40px] font-poppins font-samibold text-[#cd2822] hover:bg-[#cd2822] hover:text-white duration-300 '>1</div>
                        <h5 className='mt-6 font-poppins font-bold leading-7 text-[19px] text-center '>
                            BRAINSTORM
                        </h5>
                        <p className=' text-center font-poppins text-secondary mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra erat orci, ac auctor.
                        </p>

                    </div>
                    <div className='h-[2px] w-[200px] bg-secondary '></div>
                    {/* <div className='after:content-"" after:h-[2px] after:w-[200px] after: bg-secondary before:content-"" before:h-[2px] before:w-[200px] before:bg-secondary left-3 top-3'> */}
                    <div className='flex flex-col justify-center items-center '>
                        <div className='h-[100px] w-[100px] border-2 border-secondary  rounded-full text-center flex justify-center items-center text-[40px] font-poppins font-samibold text-[#cd2822] hover:bg-[#cd2822] hover:text-white duration-300 '>2</div>
                        <h5 className='mt-6 font-poppins font-bold leading-7 text-[19px] text-center '>
                            BRAINSTORM
                        </h5>
                        <p className=' text-center font-poppins text-secondary mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra erat orci, ac auctor.
                        </p>
                    </div>
                    {/* </div> */}
                    <div className='h-[2px] w-[200px] bg-secondary'></div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='h-[100px] w-[100px] border-2 border-secondary  rounded-full text-center flex justify-center items-center text-[40px] font-poppins font-samibold text-[#cd2822] hover:bg-[#cd2822] hover:text-white duration-300 '>3</div>
                        <h5 className='mt-6 font-poppins font-bold leading-7 text-[19px] text-center '>
                            BRAINSTORM
                        </h5>
                        <p className=' text-center font-poppins text-secondary mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra erat orci, ac auctor.
                        </p>
                    </div>
                </div>
            </div>


        </div>
    </>
  )
}

export default WeWork