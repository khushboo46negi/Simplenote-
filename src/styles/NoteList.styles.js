// NoteList.styles.js
import styled from 'styled-components';

export const NoteListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem; /* Space between boxes */
  height: 200px;
  width: 1400px; /* Adjust the width as needed */
  margin-right: auto;
`;

export const NoteItem = styled.div`
  flex: 0 9 calc(23% - 1rem); /* Four boxes per row with space */
  border: 0.7px solid #ccc;
  padding: 2rem;
  border-radius: 4px;
  box-sizing: border-box; 
  box-shadow: 0px 0px 8px
`;

export const NoteTitle = styled.h3`
  margin: 0 0 0.9rem 0;
`;

export const NoteContent = styled.p`
  margin: 0 0 0.5rem 0;
`;

export const NoteTimestamp = styled.small`
  display: block;
  margin-bottom: 0.8rem;
  color: #777;
`;

export const NoteButton = styled.button`
  padding: 0.3rem 0.5rem;
  margin-right: 0.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
