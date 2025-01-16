import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isAuthenticated, onLogout }) => {
    return (
        <>
            <header className="header">
                <nav className="nav">
                    <Link to="/" className="logo">SecureNotes</Link>
                    <div className="nav-links">
                        {isAuthenticated ? (
                            <>
                                <Link to="/notes" className="nav-link">Заметки</Link>
                                <button onClick={onLogout} className="nav-link">Выйти</button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="nav-link">Войти</Link>
                                <Link to="/register" className="nav-link">Регистрация</Link>
                            </>
                        )}
                    </div>
                </nav>
            </header>
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-copyright">
                        © 2025 SecureNotes
                    </div>
                    <div className="footer-links">
                        <Link to="/privacy">Политика конфиденциальности</Link>
                        <Link to="/cookies">Политика cookie</Link>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Header;