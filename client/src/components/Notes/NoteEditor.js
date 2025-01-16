import React, { useState, useEffect } from 'react';
import { notes as notesApi } from '../../services/api';
import { useNotes } from '../../context/NotesContext';

const NoteEditor = () => {
    const { selectedNote, setSelectedNote, notes, setNotes } = useNotes();
    const [note, setNote] = useState({ title: '', content: '' });
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (selectedNote) {
            setNote(selectedNote);
        } else {
            setNote({ title: '', content: '' });
        }
    }, [selectedNote]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            if (selectedNote) {
                const response = await notesApi.update(selectedNote._id, note);
                setNotes(notes.map(n => n._id === selectedNote._id ? response.data : n));
            } else {
                const response = await notesApi.create(note);
                setNotes([...notes, response.data]);
            }
            setSelectedNote(null);
            setNote({ title: '', content: '' });
        } catch (error) {
            console.error('Failed to save note:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleDelete = async () => {
        if (!selectedNote || !window.confirm('Вы уверены, что хотите удалить эту заметку?')) {
            return;
        }

        setIsLoading(true);
        try {
            await notesApi.delete(selectedNote._id);
            setNotes(notes.filter(n => n._id !== selectedNote._id));
            setSelectedNote(null);
            setNote({ title: '', content: '' });
        } catch (error) {
            console.error('Failed to delete note:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };

    return (
        <div className="note-editor">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    value={note.title}
                    onChange={handleChange}
                    placeholder="Заголовок заметки"
                    className="note-title"
                    disabled={isLoading}
                />
                <textarea
                    name="content"
                    value={note.content}
                    onChange={handleChange}
                    placeholder="Текст заметки"
                    className="note-content"
                    disabled={isLoading}
                />
                <div className="editor-buttons">
                    <button type="submit" className="save-button" disabled={isLoading}>
                        {isLoading ? 'Сохранение...' : (selectedNote ? 'Сохранить' : 'Создать')}
                    </button>
                    {selectedNote && (
                        <button 
                            type="button" 
                            className="delete-button"
                            onClick={handleDelete}
                            disabled={isLoading}
                        >
                            {isLoading ? 'Удаление...' : 'Удалить'}
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default NoteEditor;