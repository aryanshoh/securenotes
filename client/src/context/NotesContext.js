import React, { createContext, useContext, useState } from 'react';

const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
    const [notes, setNotes] = useState([]);
    const [selectedNote, setSelectedNote] = useState(null);

    const value = {
        notes,
        setNotes,
        selectedNote,
        setSelectedNote
    };

    return (
        <NotesContext.Provider value={value}>
            {children}
        </NotesContext.Provider>
    );
};

export const useNotes = () => {
    const context = useContext(NotesContext);
    if (!context) {
        throw new Error('useNotes must be used within a NotesProvider');
    }
    return context;
};