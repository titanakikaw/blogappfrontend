import axios from "axios";

async function saveBlog(){
   
}

async function getAllBlogs(){
   try {
      const response = await axios('', {
         headers : {
            'Authorization' : 'Bearer test'
         }
      })
   } catch (error) {
      
   }
}

export { saveBlog, getAllBlogs }