import React, { useContext, useEffect } from 'react'
import { Row } from 'antd'
import Blog from './Blog'
import { BlogContext } from '../../context/blogContext'
import { UserContext } from '../../context/userContext'

const Blogs = ({setBlog}) => {
   const { blogs, getAllBlogs } = useContext(BlogContext)
   const { user } = useContext(UserContext);
   useEffect(() => {
      getAllBlogs(user.token)
   }, [])

   return (
      <Row gutter={3} wrap={true}>
         {
            blogs ? blogs.map((blog, _index) => {
               return <Blog key={_index} blog={blog} setBlog={setBlog}/>
            }) : 'Loading'
         }
      </Row>
   )
}

export default Blogs