import React, { useState } from 'react';

const ReplyForm = ({ onSubmit, onCancel }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onSubmit({ text });
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="reply-form">
      <textarea
        placeholder="Reply"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">POST</button>
      <button type="button" onClick={onCancel}>CANCEL</button>
    </form>
  );
};

export default ReplyForm;
