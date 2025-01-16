import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Layout/Header';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import NotesList from './components/Notes/NotesList';
import NoteEditor from './components/Notes/NoteEditor';
import PrivacyPolicy from './components/Policy/PrivacyPolicy';
import CookiePolicy from './components/Policy/CookiePolicy';
import { useAuth } from './hooks/useAuth';
import { NotesProvider } from './context/NotesContext';
import './styles/main.css';

const App = () => {
    const { isAuthenticated, login, logout } = useAuth();

    return (
        <Router>
            <div>
                <Header isAuthenticated={isAuthenticated} onLogout={logout} />
                <Routes>
                    <Route path="/login" element={
                        !isAuthenticated ? <Login onLogin={login} /> : <Navigate to="/notes" />
                    } />
                    <Route path="/register" element={
                        !isAuthenticated ? <Register onRegister={login} /> : <Navigate to="/notes" />
                    } />
                    <Route path="/notes" element={
                        isAuthenticated ? (
                            <NotesProvider>
                                <main className="main-content">
                                    <NotesList />
                                    <NoteEditor />
                                </main>
                            </NotesProvider>
                        ) : <Navigate to="/login" />
                    } />
                    <Route path="/privacy" element={<PrivacyPolicy />} />
                    <Route path="/cookies" element={<CookiePolicy />} />
                    <Route path="/" element={<Navigate to="/notes" />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;