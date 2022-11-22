import React, { useState } from 'react'
import './NewComment.css'
import axios from 'axios'
import http from '../../services/httpServices'
import { getAllComment } from '../../services/getCommentServices'
import { postAllComment } from '../../services/postCommentServices '

const NewComment = ({setComments}) => {
  const [comment,setComment]= useState({
    name:'',
    email:'',
    body:'',
    postId:10
  })
  const changeHandler =(e)=>{
    setComment({...comment,[e.target.name]:e.target.value})
  }
  // const postCommentHandler =()=>{
  //   axios.post('http://localhost:3000/comments',comment).then(res=> axios.get('http://localhost:3000/comments')).then(res=>setComments(res.data))
  //   .catch(err=> console.log(err))
  // }

  const postCommentHandler = async ()=>{
    try{
       await postAllComment(comment)
       const {data} = await getAllComment()
       setComments(data)
    }catch(err){
      console.log(err)
    }
  
  }

  return (
    <div className='newcomment'>
       <div>
         <label>name</label>
      <input type={'text'} onChange={changeHandler} name="name"/>
       </div>
      <div>
        <label>email</label>
      <input type={'email'} onChange={changeHandler} name="email"/>
      </div>
      <div>
        <label>body</label>
      <textarea type={'textarea'} onChange={changeHandler} name="body" />
      </div>
      <button onClick={postCommentHandler}>add new comment</button>
    </div>
  )
}

export default NewComment
