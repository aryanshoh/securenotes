import React, { useEffect, useState } from 'react';
import { notes as notesApi } from '../../services/api';
import { useNotes } from '../../context/NotesContext';

const NotesList = () => {
    const { notes, setNotes, selectedNote, setSelectedNote } = useNotes();
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        loadNotes();
    }, []);

    const loadNotes = async () => {
        try {
            const response = await notesApi.getAll();
            setNotes(response.data);
        } catch (error) {
            console.error('Failed to load notes:', error);
        }
    };

    // Фильтрация заметок на основе поискового запроса
    const filteredNotes = notes.filter(note => 
        note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.content.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="notes-list">
            <div className="notes-header">
                <h2>Мои заметки</h2>
                <input
                    type="text"
                    placeholder="Поиск заметок..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                />
                <button
                    className="new-note-btn"
                    onClick={() => setSelectedNote(null)}
                >
                    Новая заметка
                </button>
            </div>
            <div className="notes-container">
                {filteredNotes.length === 0 ? (
                    <div className="empty-notes">
                        {searchQuery ? 'Заметки не найдены' : 'У вас пока нет заметок'}
                    </div>
                ) : (
                    filteredNotes.map(note => (
                        <div
                            key={note._id}
                            className={`note-item ${selectedNote?._id === note._id ? 'selected' : ''}`}
                            onClick={() => setSelectedNote(note)}
                        >
                            <h3>{note.title || 'Без названия'}</h3>
                            <p>{note.content?.substring(0, 100)}...</p>
                            <div className="note-meta">
                                <small>{new Date(note.createdAt).toLocaleString('ru-RU', {
                                    year: 'numeric',
                                    month: 'numeric',
                                    day: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit'
                                })}</small>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default NotesList;