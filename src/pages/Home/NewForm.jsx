import React, { useContext, useEffect, useState } from 'react';
import { Button, Input, Typography } from 'antd'
import { BlogContext } from '../../context/blogContext';

const { TextArea } = Input;
const { Title } = Typography;
const NewForm = ({blog, setBlog}) => {
   const [title, setTitle] = useState();
   const [text, setText] = useState();
   const [update, setUpdate] = useState();
   const { saveBlog, updateBlog } = useContext(BlogContext)


   const handleSubmit = () => {
      if(title !== '' && text !== ''){
         if(update){
            setBlog('')
            updateBlog(blog._id, title, text)
         }else{
            saveBlog(title, text);
         }
      }
   }


   useEffect(() => {
      setTitle( blog ? blog.title : '')
      setText( blog ? blog.text : '')
      setUpdate(blog ? true : false)
   }, [blog])

   return (
      <div id="create-new-blog">
         <Title 
            level={5} 
            style={{marginTop:'5px'}}
         >
            Create new blog
         </Title>
         <Input 
            placeholder='Title' 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
         />
         <TextArea 
            style={{marginTop : '5px'}} 
            placeholder='Content' 
            value={text}
            onChange={(e) => setText(e.target.value)}
         />
        
         {
            update ? <div>
                        <Button 
                           type="primary"
                           style={{margin : '5px'}}
                           onClick = {handleSubmit}
                        >
                           Update Blog
                        </Button>
                     </div> : <Button 
                                 type="primary"
                                 style={{marginTop : '5px'}}
                                 onClick = {handleSubmit}
                              >
                                 Post Blog
                              </Button>
         }
      </div>
   )
}

export default NewForm