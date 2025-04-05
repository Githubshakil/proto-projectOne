import React from 'react'

const Title = ({titleText,textLeft}) => {
  return (
    <>
        <h4 className={`font-poppins text-[#cd2822] ${ textLeft ? 'text-left' : 'text-center'} text-[17px] font-medium leading-[42px] tracking-[0.3px] `}>{titleText}</h4>
    </>
  )
}

export default Title