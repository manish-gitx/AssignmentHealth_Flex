import React, { useState } from 'react';
import ReplyForm from './ReplyForm';
import Reply from './Reply';
import formatDate from '../utils/Dateutils'
import { ReactComponent as DelIcon } from '../Assests/del.svg';



const Comment = ({ comment, replies, onReply, onEdit, onDelete }) => {
  const [isReplying, setIsReplying] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(comment.text);

  const handleEdit = () => {
    if (editText.trim() !== comment.text) {
      onEdit(comment.id, editText);
    }
    setIsEditing(false);
  };

  const handleReply = (reply) => {
    onReply(comment.id, reply);
    setIsReplying(false);
  };




  return (
    <div className="comment">
      <div className='comment_main'>
      <h4>{comment.name}</h4>
      <span>{formatDate(comment.date)}</span>
      {isEditing ? (
        <div className="edit-form">
          <textarea value={editText} onChange={(e) => setEditText(e.target.value)} />
          <button onClick={handleEdit}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <p>{comment.text}</p>

      )}
            <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
      <button onClick={() => setIsReplying(!isReplying)}>Reply</button>
      <button className='del' onClick={() => onDelete(comment.id)}><DelIcon /></button>
      {isReplying && <ReplyForm onSubmit={handleReply} onCancel={() => setIsReplying(false)} />}
        
      </div>
     

      {replies.map(reply => (
        <Reply 
          key={reply.id} 
          reply={reply} 
          onEdit={onEdit} 
          onDelete={onDelete} 
        />
      ))}
    </div>
  );
};

export default Comment;
