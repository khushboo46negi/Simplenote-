// NoteForm.styles.js
import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  height:200px;
  width: 400px; /* Adjust the width as needed */
  margin-left: 550px; /* Aligns the form to the right */
  margin-right: auto;
  border: 5px solid #ccc; /* Border color and thickness */
  padding: 0.5rem; /* Space between the border and the content */
  border-radius: 10px; /* Optional: rounded corners */
`;

export const Input = styled.input`
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  height:30px
`;

export const Textarea = styled.textarea`
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  height: 100px
`;

export const Button = styled.button`
  padding: 0.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 20%; 

  &:hover {
    background-color: #0056b3;
  }
`;
