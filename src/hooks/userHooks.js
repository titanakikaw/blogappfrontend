import axios from "axios"

export const login = async() => {
   try {
      const response = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/post/`, {
         headers : {
            'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN2VjZjIwMzA0ZDBlNWEwYjdkODFhOSIsImlhdCI6MTY2OTI1NDk0NCwiZXhwIjoxNjcxODQ2OTQ0fQ.PFYl2HGsVQg4zozthkrSF7oAT04dI28wrOgIvGjP32U'
         }
      })
      console.log(response)
   } catch (error) {
      console.log(error)
   }
}
 
  
