import React, { useState, useEffect } from 'react';

function App() {
  const [systemInfo, setSystemInfo] = useState('');

  useEffect(() => {
    // Отримуємо дані
    const info = `Браузер: ${navigator.userAgent} | Платформа: ${navigator.platform}`;
    // Записуємо в пам'ять
    localStorage.setItem('reactSystemInfo', info);
    // Оновлюємо екран
    setSystemInfo(info);
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <header>
        <h1>Ступницька Дарина - React CV</h1>
      </header>
      <main>
        <section>
          <h2>Про мене</h2>
          <p>Студентка НУЛП, спеціальність "Кібербезпека". Це мій перший додаток на React.</p>
        </section>
      </main>
      <footer style={{ marginTop: '50px', borderTop: '1px solid #ccc' }}>
        <p><strong>Дані з LocalStorage:</strong> {systemInfo}</p>
      </footer>
    </div>
  );
}

export default App;