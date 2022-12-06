import React from 'react';
import { Layout, Menu, Typography } from 'antd';
import { Link } from 'react-router-dom';
const { Header, Content } = Layout;
const { Title, Text } = Typography
const { Item } = Menu
const Navbar = () => {
   return (
      <Header 
         className="header"
         style={{
            position: 'sticky',
            top: '0',
            background: 'white',
            zIndex: 100
         }}
      >
         <div className="logo"
            style={{
               paddingLeft : '1rem'
            }}
         >
            <Title 
               level={4} 
               style={{
                  marginTop : '5px'
               }}
            >
               Community
            </Title>
         </div>
         <div
            style={{
               display: 'flex',
               justifyContent:'space-between'
            }}
         >
            <Menu mode="horizontal">  
               <Item key="home">
                  <Link to="/">Home</Link>
               </Item>
               <Item key="profile">
                  <Link to="/Profile">Profile</Link>
               </Item>
            </Menu>
         </div>
      </Header>
   )
}

export default Navbar