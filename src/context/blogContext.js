import { message } from "antd";
import axios from "axios";
import { createContext, useContext, useState } from "react";
import { UserContext } from "./userContext";

const BlogContext = createContext();

const BlogProvider = (props) => {
   const [blogs, setBlogs] = useState();
   const { user } = useContext(UserContext);
  

   const getAllBlogs = async(token) => {
      try {
         const { data } = await axios(`http://localhost:5000/post/`, {
            headers : {
               'Authorization' : `Bearer ${token}`
            }
         })
         setBlogs(data);
      } catch (error) {
         console.log(error)
      }
   }
   const saveBlog = async(title, text) => {
      try {
         const { data } = await axios('http://localhost:5000/post/postsubmit', {
            method : 'POST',
            headers : {
               'Authorization' : `Bearer ${user.token}`
            },
            data:  {
               title,
               content: text
            }
         })
         getAllBlogs(user.token)
      } catch (error) {
         console.log(error)
      }
   }
   const deleteBlog = async(id) => {
      setBlogs(blogs.filter(blog => blog._id !== id))
      try {
         const { data } = await axios(`http://localhost:5000/post/${id}` , {
            method : 'DELETE',
            headers : {
               'Authorization' : `Bearer ${user.token}`
            }
         })
         if(data.success){
            return data.message
         }
       
      } catch (error) {
         console.log(error)
      }
   }
   const updateBlog = async(id, title, text) => {
      try {
         const { data } = await axios(`http://localhost:5000/post/update/${id}`, {
            method : 'PUT',
            headers : {
               'Authorization' : `Bearer ${user.token}`
            },
            data:  {
               title,
               content : text
            }
         })
         if(data.success){
            setBlogs((blogs) => 
               blogs.map((blog) => blog._id === id ? { ...blog, title, text} : blog) 
            )
         }
      } catch (error) {
         console.log(error)
      }
     
   }
   const getBlog = async(id) => {
      let response = {
         error : false,
         message : '',
         data: ''
      }
      try {
         const { data } = await axios.get(`http://localhost:5000/post/get/${id}`, {
            headers : {
               'Authorization' : `Bearer ${user.token}` 
            }
         });
         response.data = data
      } catch (error) {
         response.error = true
         response.message = error.response.data
      }
      return response
   }

   const value = { blogs, getAllBlogs, saveBlog, deleteBlog, updateBlog, getBlog};
   return <BlogContext.Provider value={value} {...props}/>
}

export { BlogContext, BlogProvider}