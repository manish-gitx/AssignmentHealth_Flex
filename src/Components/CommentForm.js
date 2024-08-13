import React, { useState } from 'react';

const CommentForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && text.trim()) {
      onSubmit({ name, text });
      setName('');
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Comment"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">POST</button>
    </form>
  );
};

export default CommentForm;
