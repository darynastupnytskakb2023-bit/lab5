import React, { useState, useEffect } from 'react';

const ContactForm = () => {
  // 1. Створюємо змінну стану (початково false)
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // 2. Встановлюємо isOpen в true через 1 хвилину (60000 мс)
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000);

    // Очищення таймера при закритті компонента
    return () => clearTimeout(timer);
  }, []);

  // Якщо isOpen === false, компонент нічого не рендерить
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Зворотній зв'язок</h3>
        <p>Залиште ваше повідомлення:</p>
        
        <form>
          <input type="text" placeholder="Ваше ім'я" className="modal-input" />
          <textarea placeholder="Ваш відгук" className="modal-input"></textarea>
          <button type="button" className="send-btn">Надіслати</button>
        </form>

        {/* 3. Кнопка "Закрити", яка встановлює isOpen назад в false */}
        <button 
          className="close-btn" 
          onClick={() => setIsOpen(false)}
        >
          Закрити
        </button>
      </div>
    </div>
  );
};

export default ContactForm;