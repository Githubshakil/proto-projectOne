import React from 'react';

import { IoMdArrowRoundForward } from "react-icons/io";

const Button = ({href,buttonText,bgColor}) => {
  return (
    <>
        <a href={href}  className={`py-5 px-12  font-poppins font-bold
         uppercase transition-all duration-300 ${bgColor ? 'bg-[#cd2822] text-white' : 'bg-white border border-[#cd2822]'}  hover:bg-[#e4413c] hover:text-white`}>{buttonText} <IoMdArrowRoundForward className='inline-block'/>

</a>    
    </>
  )
}

export default Button