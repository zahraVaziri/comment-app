import React from 'react'
import './Comment.css'
const Comment = ({name,email,onClicked}) => {
  return (
    <div className='comment' onClick={onClicked}>
      <p>name : {name}</p>
      <p>email : {email}</p>
    </div>
  )
}

export default Comment
