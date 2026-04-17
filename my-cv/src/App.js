import React, { useState, useEffect } from 'react';
import './styles.css';
import Reviews from './reviews';
import ContactForm from './contactform';

function App() {
  const [systemInfo, setSystemInfo] = useState('');
  // Стан для теми
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // 1. Дані про систему
    const info = `Браузер: ${navigator.userAgent} | Платформа: ${navigator.platform}`;
    localStorage.setItem('reactSystemInfo', info);
    setSystemInfo(info);

    // 2. Автоматичне перемикання теми за часом
    const currentHour = new Date().getHours();
    if (currentHour >= 7 && currentHour < 21) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);

  // Функція для ручного перемикання
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    /* Застосовуємо клас теми до головної обгортки */
    <div className={`app-container ${theme}`}>
      <header className="header">
        <h1>Ступницька Дарина - React CV</h1>
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === 'light' ? 'Темна тема' : 'Світла тема'}
        </button>
      </header>

      <main>
        <section className="section">
          <h2>Про мене</h2>
          <p>Студентка НУЛП, спеціальність "Кібербезпека".</p>
        </section>

        <Reviews />
        <ContactForm />
      </main>

      <footer className="footer">
        <p><strong>LocalStorage:</strong> {systemInfo}</p>
        <p>Поточний режим: {theme === 'light' ? 'Денний' : 'Нічний'}</p>
      </footer>
    </div>
  );
}

export default App;