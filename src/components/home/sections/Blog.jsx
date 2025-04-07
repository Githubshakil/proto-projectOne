import React from 'react'
import Title from '../../helpers/Title'
import SubHeading from '../../helpers/SubHeading'
import { blogList } from '../../dummyData/blogList'
import BlogList from '../../helpers/BlogList'

const Blog = () => {
  return (
    <>
        <div className='bg-bgColor py-[130px]'>
            <div className='max-w-containerWidth mx-auto'>
                <div>
                <Title titleText={'OUR BLOG'} textLeft={'true'}/>
                <SubHeading subHeadingText={'News & Press'}/>
                </div>

                <div className='flex justify-between'>
                {
                    blogList.map((item) => (
                        <BlogList images={item.images} date={item.date} comments={item.comments} name={item.name} blogHeading={item.blogHeading} para={item.para} />
                    ))
                }

            </div>

            </div>
            

        </div>
    </>
  )
}

export default Blog