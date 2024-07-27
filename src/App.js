import React, { useState, useEffect } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import Pagination from './components/Pagination';
import Search from './components/Search';
import { getNotes, saveNotes } from './utils/localStorage';
import "./App.css"

const App = () => {
   const [notes, setNotes] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [notesPerPage] = useState(10);
   const [searchQuery, setSearchQuery] = useState('');

   useEffect(() => {
       setNotes(getNotes());
   }, []);

   const addNote = (note) => {
       const newNotes = [...notes, note];
       setNotes(newNotes);
       saveNotes(newNotes);
   };

   const deleteNote = (id) => {
       const newNotes = notes.filter(note => note.id !== id);
       setNotes(newNotes);
       saveNotes(newNotes);
   };

   const editNote = (id) => {
       const title = prompt('Enter new title');
       const content = prompt('Enter new content');
       const newNotes = notes.map(note =>
           note.id === id ? { ...note, title, content, timestamp: new Date().toLocaleString() } : note
       );
       setNotes(newNotes);
       saveNotes(newNotes);
   };

   const indexOfLastNote = currentPage * notesPerPage;
   const indexOfFirstNote = indexOfLastNote - notesPerPage;
   const currentNotes = notes
       .filter(note => note.title.includes(searchQuery) || note.content.includes(searchQuery))
       .slice(indexOfFirstNote, indexOfLastNote);

   const paginate = (pageNumber) => setCurrentPage(pageNumber);

   return (
       <div className='container'>
           <h1>Simple Note Taking App</h1>
           <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
           <NoteForm addNote={addNote} /><br/>
           <NoteList notes={currentNotes} deleteNote={deleteNote} editNote={editNote} />
           <Pagination totalNotes={notes.length} notesPerPage={notesPerPage} paginate={paginate} />
       </div>
   );
};

export default App;
