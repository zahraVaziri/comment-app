import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './FullComment.css'
import http from '../../services/httpServices'
import { getOneComment } from '../../services/getOneComment'
import { deleteAllComment } from '../../services/deleteCommentServices'
import { getAllComment } from '../../services/getCommentServices'
const FullComment = ({commentId,setComments,setCommentId}) => {
const [comment,setComment] = useState(null)

  // const deleteHandler=()=>{
  //   axios.delete(`http://localhost:3000/comments/${commentId}`).then(res=>{
  //   console.log(res.data)
  //   }).catch(err=> console.log(err))
  // }

  const deleteHandler= async()=>{
    try{
      await deleteAllComment(commentId)
      const {data}= await getAllComment()
      setComments(data)
      setComment(null)
      setCommentId(null)

    }catch(err){
      console.log(err)
    }
  }
  useEffect(()=>{
    const getComment = async()=>{
      try{
        const {data} = await getOneComment(commentId)
           setComment(data)

      }
      catch(err){
        console.log(err)
      }
    }
    getComment()
  },[commentId])
  if(!comment) return <p> please select comment !</p>
  return (
    <div className='fullcomment'>
      <p>name:{comment.name}</p>
      <p>email:{comment.email}</p>
      <p>body:{comment.body}</p>
      <button className='button' onClick={deleteHandler}>Delete</button>
    </div>
  )
}

export default FullComment
