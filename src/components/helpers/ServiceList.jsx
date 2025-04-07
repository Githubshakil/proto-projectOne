import React from 'react'


const ServiceList = ({itemList,icon:Icon}) => {
  return (
    <>
        <div>
            <div className='flex gap-4 mt-4 items-center'>
                {/* <div className=' h-5 w-5  border border-[#3B3F42]  rounded-full text-[#3B3F42]'><Icon/></div> */}
                <Icon className={"text-xl"}/>
                 <h5 className='font-poppins text-[14px] leading-6 font-semibold text-[#3B3F42]'>{itemList}</h5>   
            </div>
        </div>
    </>
  )
}

export default ServiceList