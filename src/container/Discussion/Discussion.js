import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Comment from '../../component/Comment/Comment'
import FullComment from '../../component/FullComment/FullComment'
import NewComment from '../../component/NewComment/NewComment'
import { toast } from 'react-toastify'
import './Discussion.css'
import http from '../../services/httpServices'
import { getAllComment } from '../../services/getCommentServices'
const Discussion = () => {
  const [comment,setComment] =useState(null)
  const [commentId,setCommentId] = useState(null)
  const [error,setError]= useState(false)

  useEffect(()=>{
    const getComment = async()=>{
      try{
        const {data} = await getAllComment()
            setComment(data)

      }
      catch(err){
        console.log(err)
        setError(true)
      }
    }
    getComment()
  },[])

  const selectHandler = (id)=>{
    setCommentId(id)
  }
  const renderComponent = ()=>{
    let renderedValue = <p> loading !</p>
    if (error) {
      renderedValue = <p> fighter error </p>
      toast.error('there is a error')

    }
    if(comment && !error ){
    renderedValue =
      comment.map((c)=> <Comment name={c.name} key={c.id} email={c.email} body={c.body} onClicked={()=>selectHandler(c.id)} />)
    }
    return renderedValue
    }
  return (
    <div>
      <section>
            {renderComponent()}

      </section>
      <section>
        <FullComment commentId={commentId} setComments={setComment} setCommentId={setCommentId}/>
      </section>
      <section>
        <NewComment setComments={setComment}/>
      </section>

    </div>
  )
}

export default Discussion
