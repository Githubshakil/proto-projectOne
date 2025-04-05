import React from 'react'

const IndustriesCart = ({icon,categoryImg,titleName }) => {
  return (
   <div className=' cursor-pointer mb-5'>
     <div className='h-[270px] w-[241px] flex flex-col   items-center justify-center bg-slate-700  group-hover duration-300 overflow-hidden'>
        <img src={icon} alt="" className=' hover:bg-[#cd2822] duration-300 py-[55px] px-[100px] overflow-hidden' />
        <img src={categoryImg} alt="" className='opacity-10 hover:opacity-100 duration-300' />
    </div>
    <div>
        <h6 className='font-poppins ml-14 mt-1 text-headingColor text-[18px] leading-[27px] font-bold hover:text-[#cd2822] duration-300 cursor-pointer'>{titleName}</h6>
    </div>
   </div>
  )
}

export default IndustriesCart