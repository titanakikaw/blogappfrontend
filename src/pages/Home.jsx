import React, { useEffect, useState } from 'react'
import { Layout } from 'antd'
import NewForm from './Home/NewForm';
import { BlogProvider } from '../context/blogContext';
import Blogs from './Home/Blogs';

const { Content } = Layout

const Home = () => {
   const [blog, setBlog] = useState();
   return (
      <BlogProvider>
         <Layout>
            <Content
               style={{
                  padding: '0 15rem'
               }}
            >
               <NewForm blog={blog} setBlog={setBlog}/>
               <hr></hr>
               <Blogs setBlog={setBlog}/>
            </Content>
         </Layout>
      </BlogProvider>
   )
}

export default Home