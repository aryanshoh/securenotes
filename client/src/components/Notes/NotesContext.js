import React, { createContext, useState } from 'react';

export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);

  const addNote = (note) => {
    const newNote = {
      id: Date.now(),
      title: note.title,
      content: note.content,
      createdAt: new Date().toISOString()
    };
    setNotes([...notes, newNote]);
  };

  const updateNote = (updatedNote) => {
    setNotes(notes.map(note => 
      note.id === updatedNote.id ? updatedNote : note
    ));
  };

  const deleteNote = (noteId) => {
    setNotes(notes.filter(note => note.id !== noteId));
    if (currentNote?.id === noteId) {
      setCurrentNote(null);
    }
  };

  return (
    <NotesContext.Provider value={{ 
      notes, 
      currentNote, 
      setCurrentNote,
      addNote,
      updateNote,
      deleteNote
    }}>
      {children}
    </NotesContext.Provider>
  );
};