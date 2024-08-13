import React from 'react';
import useStore from './store/useStore';
import CommentForm from './Components/CommentForm';
import CommentList from './Components/CommentList';

const App = () => {
  const { 
    comments, 
    replies, 
    addComment, 
    editComment, 
    deleteComment, 
    addReply, 
    editReply, 
    deleteReply 
  } = useStore();

  const handleEdit = (id, newText) => {
    if (comments.some(comment => comment.id === id)) {
      editComment(id, newText);
    } else {
      editReply(id, newText);
    }
  };

  const handleDelete = (id) => {
    if (comments.some(comment => comment.id === id)) {
      deleteComment(id);
      replies.forEach(reply => {
        if (reply.parentId === id) {
          deleteReply(reply.id);
        }
      });
    } else {
      deleteReply(id);
    }
  };

  return (
    <div className="app">
      <h1>Comments</h1>
      <CommentForm onSubmit={addComment} />
      <CommentList 
        comments={comments}
        replies={replies}
        onReply={addReply}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default App;
