import React, { useEffect, useState } from 'react'
import Button from './Button'
import { createPost, updatePost } from '../store/slices/productSlice'
// import 
  import { useDispatch, useSelector } from 'react-redux'
const Create = () => {
  const dispatch = useDispatch();
  const [name,setName] = useState("")
  const[email,setEmail] = useState("")
  const[age,setAge] = useState("")
  const[file,setFile] = useState("")
  const[loading,setLoading] = useState(false)
  const [imageURL, setImageURL] = useState("");
  const[fileType,setfileType] = useState("")
  const post = useSelector((state) => state.productSlice.updatePost)

  useEffect(() => {
    if (post) {
      setName(post.name);
      setEmail(post.email);
      setAge(post.age);
    }else{
      setName("");
      setEmail("");
      setAge("");
    }
  },[post])

 
  const createPostHandler=()=>{
    console.log("name: ", name);
    console.log("email: ", email)
    setfileType(file.type)
    console.log("file type: ", file.type)
    let postData = {  
        // uid: user.uid,
        name,
        email,
        age,
        imageURL,
        fileType,
    }

   if (post){
    dispatch(updatePost({ ...postData,id:post.id}))
    return
   }
    dispatch(createPost({ ...postData,file,setLoading}))
    setName("")
    setEmail("")
    setAge("")
  }
  return (
    <div>
      

        
        <input className='border-2 mb-4 w-[500px] p-2  ' type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
        <input className='border-2 mb-4 w-[500px] p-2  ' type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className='border-2 mb-4 w-[500px] p-2  ' type="number" placeholder='age' value={age} onChange={(e) => setAge(e.target.value)} />
        <input type="file" className='border-2 mb-4 w-[500px] p-2  ' onChange={(e) => setFile(e.target.files[0])}  />

       <Button content={post?'Update':'Create'} onclickhandler={createPostHandler}/>
    
    </div>
  )
}

export default Create
