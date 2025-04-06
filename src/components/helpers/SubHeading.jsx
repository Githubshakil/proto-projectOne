import React from 'react'

const SubHeading = ({subHeadingText,textleft}) => {
  return (
    <>
        <h4 className={`font-poppins text-[#212529] font-bold text-[35px] leading-[42px] ${ textleft ? 'text-center' : 'text-left'}`}>{subHeadingText}</h4>
    </>
  )
}

export default SubHeading