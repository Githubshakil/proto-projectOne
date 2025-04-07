import React from 'react'

const Info = ({infoName}) => {
  return (
    <>
        <div>
            <h5 className='font-poppins font-bold text-xl leading-6 text-[#212529] '>{infoName}</h5>
        </div>    
    </>
  )
}

export default Info