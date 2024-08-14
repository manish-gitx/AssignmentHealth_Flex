import React, { useState } from 'react';
import formatDate from '../utils/Dateutils'
import { ReactComponent as DelIcon } from '../Assests/del.svg';



const Reply = ({ reply, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(reply.text);

  const handleEdit = () => {
    if (editText.trim() !== reply.text) {
      onEdit(reply.id, editText);
    }
    setIsEditing(false);
  };

  return (
    <div className="reply">
      <span>{formatDate(reply.date)}</span>
      {isEditing ? (
        <div className="edit-form">
          <textarea value={editText} onChange={(e) => setEditText(e.target.value)} />
          <button onClick={handleEdit}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <p>{reply.text}</p>
      )}
      <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
      <button className='del' onClick={() => onDelete(reply.id)}><DelIcon/></button>
    </div>
  );
};

export default Reply;
