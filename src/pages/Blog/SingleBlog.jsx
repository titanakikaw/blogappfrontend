import React, { useContext, useEffect, useState } from 'react'
import { Card, Layout, Typography } from 'antd'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../context/userContext';


const { Title, Text } = Typography; 
const { Content } = Layout;

const SingleBlog = () => {
   const { id } = useParams();
   const { user } = useContext(UserContext);
   const [blog, setBlog ] = useState();

   const getBlog = async() => {
      try {
         const { data } = await axios.get(`http://localhost:5000/post/get/${id}`, {
            headers : {
               'Authorization' : `Bearer ${user.token}` 
            }
         });
         setBlog(data)
      } catch (error) {
         console.log(error)
      }
   }

   useEffect(() => {
      getBlog();
   }, [blog]);

   return (
      <Content  style={{ padding: '0 15rem' }} >
         <Card>
            <Title
               style={{
                  margin: '5px',
                  textAlign:'center'
               }}
               
            >
               { blog ? blog.title : 'Loading'}
            </Title>
            <Text 
            type="secondary"
            style={{
               fontSize: '13px',
               letterSpacing:'1px',
               fontStyle: 'oblique'
            }}
            >
               Created by - { blog ? blog.user.fname + ' ' + blog.user.lname : 'loading' }
            </Text>
            <br></br>
            <br></br>
            <Text 
               type="secondary"
               style={{
                  fontSize: '13px',
                  letterSpacing:'1px',
               }}
            >
               { blog ?  blog.text : 'loading'}
            </Text>
            <br></br>
            <Text 
               type="secondary"
               style={{
                  fontSize: '13px',
                  letterSpacing:'1px',
                  fontStyle: 'oblique'
               }}
            >
               { blog ? new Date(blog.updatedAt).toDateString() : 'Loading' }
            </Text>
         </Card>
      </Content>
   )
}

export default SingleBlog