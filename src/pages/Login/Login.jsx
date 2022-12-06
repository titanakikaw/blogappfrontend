// import Layout from 'antd/es/layout/layout'
import React, { useContext, useEffect, useState } from 'react'
import { Layout, Typography, Button, Checkbox, Form, Input} from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { UserContext } from '../../context/userContext';
import Register from '../Register/Register';
import Warning from '../../components/warning';

const { Text, Title } = Typography;
const Login = () => {
   const { login } = useContext(UserContext);
   const [ email, setEmail ] = useState();
   const [ password, setPassword ] = useState();
   const [ error, setError ] = useState(false);
   const [ loginform, setLoginform ] = useState(true);

   const handleLogin = async () => {
      const status = await login(email, password);
      if(status != "Success"){
         setError(status)
      }
   }

   const handleRegister = async() => {
      setLoginform(!loginform);
   }

   return (
      <Layout
         style={{
            display : 'flex',
            justifyContent :'center',
            alignItems : 'center',
            height:'100vh'
         }}
      >
         { loginform ?
            <div 
               style={{
                  width: '350px',
                  backgroundColor: 'white',
                  borderRadius : '5px',
                  padding: '1rem'
               }}
            > 
             
               <Form
                  name="normal_login"
                  className="login-form"
                  style={{
                     padding: '1rem',
                     display: 'flex',
                     flexDirection: 'column',
                     justifyContent: 'center'
                  }}
                  onFinish={() => handleLogin()}
               >
                  <Form.Item style={{textAlign:'center'}}>
                     <Title level={3}>Login</Title>
                  </Form.Item>
                  <Form.Item
                     name="username"
                     rules={[
                        {
                           required: true,
                           message: 'Please input your Username!',
                        },
                     ]}
                  >
                     <Input 
                        prefix={<UserOutlined className="site-form-item-icon" />} 
                        placeholder="Username"
                        onChange={(e) => setEmail(e.target.value)}
                     />
                  </Form.Item>
                  <Form.Item
                     name="password"
                     rules={[
                     {
                        required: true,
                        message: 'Please input your Password!',
                     },
                     ]}
                  >
                     <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                     />
                  </Form.Item>
               
                  <Form.Item
                     style={{
                        marginBottom: '0'
                     }}
                  >
                     <Button 
                        type="primary" 
                        htmlType="submit" 
                        className="login-form-button" 
                        style={{
                           width: '100%'
                        }}
                     >
                     Log in
                     </Button>
                     Or <a onClick={() => handleRegister()}>register now!</a>
                  </Form.Item>
               </Form>
               {
                  error ? <Warning error={error}/> : ''
               }
            </div>
         :  <Register handleRegister={handleRegister}/> }
      </Layout>
   )
}


export default Login