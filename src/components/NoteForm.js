import React, { useState } from 'react';
import { FormWrapper, Input, Textarea, Button } from '../styles/NoteForm.styles';

const NoteForm = ({ addNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote({
      id: Date.now(),
      title,
      content,
      timestamp: new Date().toLocaleString()
    });
    setTitle('');
    setContent('');
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button type="submit">Add Note</Button>
    </FormWrapper>
  );
};

export default NoteForm;
