import React from 'react';

const Button = ({href,buttonText}) => {
  return (
    <>
        <a href={href}  className='py-5 px-12  font-poppins font-bold
         uppercase transition-all duration-300 text-white bg-[#cd2822] hover:bg-[#e4413c] hover:text-white'>{buttonText}

</a>    
    </>
  )
}

export default Button