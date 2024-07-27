import React from 'react';
import {
  NoteListWrapper,
  NoteItem,
  NoteTitle,
  NoteContent,
  NoteTimestamp,
  NoteButton
} from '../styles/NoteList.styles';

const NoteList = ({ notes, deleteNote, editNote }) => {
  return (
    <NoteListWrapper>
      {notes.map((note) => (
        <NoteItem key={note.id}>
          <NoteTitle>{note.title}</NoteTitle>
          <NoteContent>{note.content}</NoteContent>
          <NoteTimestamp>{note.timestamp}</NoteTimestamp>
          <NoteButton onClick={() => editNote(note.id)}>Edit</NoteButton>
          <NoteButton onClick={() => deleteNote(note.id)}>Delete</NoteButton>
        </NoteItem>
      ))}
    </NoteListWrapper>
  );
};

export default NoteList;
