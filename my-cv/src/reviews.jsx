import React, { useState, useEffect } from 'react';

const Reviews = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/29/comments')
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
      })
      .catch((error) => console.error('Помилка завантаження:', error));
  }, []);

  return (
    <section className="reviews-section">
      <h2>Відгуки ]</h2>
      <div className="comments-list">
        {comments.map((comment) => (
          <div key={comment.id} className="comment-card">
            <strong>{comment.name}</strong>
            <p><small>{comment.email}</small></p>
            <p>{comment.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;