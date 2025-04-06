import React from 'react'

const ServiceList = ({itemList,icon}) => {
  return (
    <>
        <div>
            <div className='flex gap-4 mt-4 items-center'>
                <div className=' text-[#3B3F42] h-5 w-5  border-2-black bg-[#3B3F42] rounded-[50%] '>{icon}</div>
                 <h5 className='font-poppins text-[14px] leading-6 font-semibold text-[#3B3F42]'>{itemList}</h5>   
            </div>
        </div>
    </>
  )
}

export default ServiceList