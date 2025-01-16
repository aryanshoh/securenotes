import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

const api = axios.create({
    baseURL: API_URL
});

// Перехватчик для добавления токена к запросам
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const auth = {
    register: (userData) => api.post('/auth/register', userData),
    login: (credentials) => api.post('/auth/login', credentials)
};

export const notes = {
    getAll: () => api.get('/notes'),
    create: (note) => api.post('/notes', note),
    update: (id, note) => api.put(`/notes/${id}`, note),
    delete: (id) => api.delete(`/notes/${id}`)
};

export default api;