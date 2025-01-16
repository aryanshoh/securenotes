import React from 'react';

const CookiePolicy = () => {
    return (
        <div className="policy-container">
            <h1>Политика использования файлов cookie</h1>
            <div className="policy-content">
                <section>
                    <h2>1. Что такое файлы cookie</h2>
                    <p>Cookie - это небольшие текстовые файлы, которые сохраняются на вашем устройстве при посещении нашего сайта.</p>
                </section>

                <section>
                    <h2>2. Какие cookie мы используем</h2>
                    <ul>
                        <li>Необходимые cookie для работы сайта</li>
                        <li>Cookie для аутентификации</li>
                        <li>Cookie для сохранения пользовательских настроек</li>
                    </ul>
                </section>

                <section>
                    <h2>3. Цели использования cookie</h2>
                    <p>Мы используем cookie для:</p>
                    <ul>
                        <li>Обеспечения работы основных функций сайта</li>
                        <li>Сохранения сессии пользователя</li>
                        <li>Улучшения производительности сайта</li>
                    </ul>
                </section>

                <section>
                    <h2>4. Управление cookie</h2>
                    <p>Вы можете управлять использованием cookie через настройки вашего браузера:</p>
                    <ul>
                        <li>Отключить сохранение cookie</li>
                        <li>Удалить существующие cookie</li>
                        <li>Настроить уведомления о cookie</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default CookiePolicy;