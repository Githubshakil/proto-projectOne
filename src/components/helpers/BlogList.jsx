import React from 'react'

const BlogList = ({images,date,comments,name,blogHeading,para}) => {
  return (
    <>
        <div className='w-[580px] bg-white p-[25px]'>
             <img src={images} alt="" />
             <div className='flex'>
             <span>{date}</span>
             <span>{comments}</span>
             <span>{name}</span>
             </div>
             <h4>{blogHeading}</h4>
             <p>{para}</p>

        </div>

    </>
  )
}

export default BlogList