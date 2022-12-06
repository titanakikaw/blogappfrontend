import axios from "axios";
import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = (props) => {
   const [user, setUser] = useState();

   const login = async (email, password) => {
      try {
         // const { data } = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/user/login`, { 
         const { data } = await axios.post(`http://localhost:5000/user/login`, { 
            email,
            password
         })
         setUser(data)
         return "Success"
      } catch (error) {
         // console.log(error)
         const { data } = error.response
         return data
      }
     
   } 

   const logout = async() => {
      console.log('Logout')
   }

   const register = async(params) =>{
      const { fname, lname, email, pass} = params;
      let response = {
         error : false,
         message : ''
      }
      try{
         const { data }= await axios.post('http://localhost:5000/user/register', {
            fname,
            lname,
            email,
            pass     
         })
         response.error = false;
         response.message = "Success"
      }catch(err){
         response.error = true;
         response.message = err.response.data
      }
      return response
   }

   const value = { user, login, logout, register}
   return <UserContext.Provider value={value}  {...props}/>
}

export { UserContext, UserProvider }

