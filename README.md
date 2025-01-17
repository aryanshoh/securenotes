# SecureNotes 📝

Веб-приложение для создания и хранения личных заметок с системой аутентификации и безопасным хранением данных.

https://securenotesfa.netlify.app

## Особенности

- 🔒 Безопасная регистрация и авторизация пользователей
- ✨ Создание, редактирование и удаление заметок
- 🔍 Поиск по заметкам
- 📱 Адаптивный дизайн
- 🛡️ Защита персональных данных

## Технологический стек

### Frontend
- React.js
- React Router для маршрутизации
- Axios для HTTP-запросов
- CSS3 для стилизации

### Backend
- Node.js
- Express.js
- MongoDB (Atlas - БД на облаке)
- JWT для аутентификации
- bcrypt для хеширования паролей

## Установка и запуск
Необходимо иметь на компьютере Node.js перед выполнением всех последующих шагов.

1. **Клонируйте репозиторий:**
```bash
git clone https://github.com/your-username/securenotes.git
cd securenotes
```

2. **Установите зависимости:**
```bash
# Установка зависимостей для клиентской части
cd client
npm install

# Установка зависимостей для серверной части
cd ../server
npm install
```

3. **Настройка окружения:**

Создайте файл `.env` в папке server:
```env
MONGODB_URI=mongodb+srv://admin:admin@cluster0.dbzzl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
PORT=3001
JWT_SECRET=super_secret_key_123
```

4. **Запуск приложения:**
```bash
# Запуск сервера
cd server
npm start

# Запуск клиента (в новом терминале)
cd client
npm start
```


## API Endpoints

### Аутентификация
- `POST /api/auth/register` - Регистрация нового пользователя
- `POST /api/auth/login` - Вход в систему

### Заметки
- `GET /api/notes` - Получение всех заметок
- `POST /api/notes` - Создание заметки
- `PUT /api/notes/:id` - Обновление заметки
- `DELETE /api/notes/:id` - Удаление заметки

## Основной функционал

- Регистрация и авторизация пользователей
- Создание и редактирование заметок
- Поиск по заметкам
- Автоматическое сохранение изменений
- Защита персональных данных

## Безопасность

- Хеширование паролей с использованием bcrypt
- JWT для безопасной аутентификации
- CORS защита
- Валидация данных на сервере
