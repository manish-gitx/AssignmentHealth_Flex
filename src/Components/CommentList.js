import React, { useState } from 'react';
import Comment from './Comment';

const CommentList = ({ comments, replies, onReply, onEdit, onDelete }) => {
  const [sortOrder, setSortOrder] = useState('desc');

  const sortedComments = [...comments].sort((a, b) => {
    return sortOrder === 'desc' 
      ? new Date(b.date) - new Date(a.date)
      : new Date(a.date) - new Date(b.date);
  });

  return (
    <div>
      <select onChange={(e) => setSortOrder(e.target.value)}>
        <option value="desc">Newest First</option>
        <option value="asc">Oldest First</option>
      </select>
      {sortedComments.map(comment => (
        <Comment 
          key={comment.id} 
          comment={comment} 
          replies={replies.filter(reply => reply.parentId === comment.id)}
          onReply={onReply}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default CommentList;
