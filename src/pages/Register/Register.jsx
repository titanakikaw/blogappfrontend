import React, { useContext, useRef, useState } from 'react'
import { Typography, Input, Form, Button } from 'antd'
import { UserContext } from '../../context/userContext';

const { Title } = Typography;

const Register = ({handleRegister}) => {
 
   const { register } = useContext(UserContext);
   const [fname, setFname] = useState();
   const [lname, setLname] = useState();
   const [email, setEmail] = useState();
   const [pass, setPass] = useState();

   const password = useRef();
   const cPassword = useRef();

   const Register = () => {
      register({fname, lname, email, pass})
      // handleRegister()
   }

   return (
      <div 
         style={{
            width: '350px',
            backgroundColor: 'white',
            borderRadius : '5px',
            padding: '1rem 2rem'
         }}
      >
         <Form onFinish={() => Register()}>
            <Title level={3} style={{margin: '10px 0'}}>Register User</Title>
            <Form.Item
               name="Firstname"
               rules={[
                  {
                     required: true,
                     message: 'Please input your Firstname!',
                  },
               ]}
            >
               <Input 
                  placeholder="Firstname"
                  onChange={(e) => setFname(e.target.value)}
                  value={fname}
               />
            </Form.Item>
            <Form.Item
               name="Lastname"
               rules={[
                  {
                     required: true,
                     message: 'Please input your Lastname!',
                  },
               ]}
            >
               <Input 
                  placeholder="Lastname"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
               />
            </Form.Item>
            <Form.Item
               name="Email"
               rules={[
                  {
                     required: true,
                     message: 'Please input your Email!',
                  },
               ]}
            >
               <Input 
                  placeholder="Email"
                  value={email}
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
                  placeholder="Password"
                  type="password"
                  ref={password}
               />
            </Form.Item>
            <Form.Item
               name="Confirm password"
               rules={[
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('The two passwords that you entered do not match!'));
                    },
                  }),
                ]}
            >
               <Input 
                  type="password"
                  placeholder="Confirm Password"
                  ref={cPassword}
                  onChange={(e) => setPass(e.target.value)}
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
                  Register
               </Button>
               Or <a onClick={() => handleRegister()}>Already have an account</a>
            </Form.Item>
         </Form>

      </div>
   )
}

export default Register