import React, { useContext } from 'react'
import { Col, Card, Typography, Dropdown, Space, Menu} from 'antd'

import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { BlogContext } from '../../context/blogContext';
import { Link } from 'react-router-dom';
const { Meta } = Card;

const items = [
   {
      key : 1, 
      label : (
         <Space>
            <EditOutlined/>
            Edit
         </Space>
      ),
   },
   {
      key : 2, 
      label : (
         <Space>
            <DeleteOutlined />
            Delete
         </Space>
      ),
   },
]


const Actions = ({handleDelete, handleEdit}) => {
   return(
      <Dropdown
         overlay={
            <Menu>
               <Menu.Item key={1} onClick={handleEdit}>
                  <Space>
                     <EditOutlined/>
                     Edit
                  </Space>
               </Menu.Item>
               <Menu.Item key={2} onClick={handleDelete}>
                  <Space>
                     <DeleteOutlined />
                     Delete
                  </Space>
               </Menu.Item>
            </Menu>
         }
         placement="bottomLeft"
      >
         <Space
            style={{
               float:'right',
               fontWeight:'bold'
            }}
         >
         . . .
         </Space>
      </Dropdown>
   )
}

const Blog = ({blog, setBlog}) => {
   const { title, text, email, updatedAt, user, _id } = blog; 
   const { fname, lname } = user;
   const { Text } = Typography
   const { deleteBlog } = useContext(BlogContext);
   const handleDelete = (id) => {
      deleteBlog(id)
   }

   const handleEdit = () => {
      setBlog(blog)
   }
   return (
   
         <Col 
            lg={24} xs={24} md={24} 
            style={{
               padding: '5px',
            }}
         >
      
            <Card hoverable >
               <Actions handleDelete={() => handleDelete(blog._id)} handleEdit={handleEdit}/>
               <Link to={`/Blogs/` + _id}>

               <Text 
                  type="secondary"
                  style={{
                     fontSize: '12px',
                     fontWeight:'bold'
                  }}
               >
               
                  { fname + ' ' + lname }
               </Text>
                  <Meta 
                     title={title} 
                     description={text}
                     style={{
                        maxHeight: '150px'
                     }}
                  />
               <Text 
                  type="secondary"
                  style={{
                     fontSize: '11px',
                     fontStyle: 'italic'
                  }}
               >
                  { new Date(updatedAt).toDateString() }
               </Text>
               </Link>
            </Card>
       
         </Col>
     
   )
}

export default Blog