import { Layout } from 'antd'
import axios from 'axios'
// import { Content } from 'antd/es/layout/layout'
import React, { useContext, useEffect, useState } from 'react'
import {Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import { UserContext } from './context/userContext'
import SingleBlog from './pages/Blog/SingleBlog'
import Home from './pages/Home'
import Login from './pages/Login/Login'
import Profile from './pages/Profile/Profile'

const { Content } = Layout

const App = () => {
  const { user } = useContext(UserContext)

  return (
    <div className="App">
      {
        user ? <Authenticated/> : <Login/>
      }
    </div>
  )
}


const Authenticated = () => {
  return(
    <>
      <Navbar/>
      <Layout>
        <Content
          style={{
            padding: '1rem',
            height: '100vh'
          }}
        >
          <Routes>
            <Route path='' element={<Home/>}/>
            <Route path='/Profile' element={<Profile/>}/>
            <Route path='/Blogs/:id' element={<SingleBlog/>}/>
            <Route path='*' element={<div>Page not found.</div>}/>
          </Routes>
        </Content>
      </Layout>
    </>
  )
}

export default App