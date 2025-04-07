import React from 'react'

const BlogList = ({images,date,comments,name,blogHeading,para}) => {
  return (
    <>
        <div className='w-[580px] bg-white p-[25px]'>
             <img src={images} alt="" />
             <div className='flex gap-5 mt-3'>
             <span className='font-poppins text-secondary text-[11px] '>{date}</span>
             <span className='font-poppins text-secondary text-[11px] '>{comments}</span>
             <span className='font-poppins text-secondary text-[11px] '>{name}</span>
             </div>
             <h4 className='font-poppins  font-semibold text-[21px] leading-[27px] text-[#212529] mt-8'>{blogHeading}</h4>
             <p className='font-poppins text-[14px] leading-6 text-secondary mt-4 '>{para}</p>

        </div>

    </>
  )
}

export default BlogList