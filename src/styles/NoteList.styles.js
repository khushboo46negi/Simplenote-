import styled from 'styled-components';

export const NoteListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NoteItem = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 0.5rem;
  border-radius: 4px;
`;

export const NoteTitle = styled.h3`
  margin: 0 0 0.5rem 0;
`;

export const NoteContent = styled.p`
  margin: 0 0 0.5rem 0;
`;

export const NoteTimestamp = styled.small`
  display: block;
  margin-bottom: 0.5rem;
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
