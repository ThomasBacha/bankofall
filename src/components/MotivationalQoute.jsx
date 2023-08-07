import React, { useState, useEffect } from 'react';

const MotivationalQuote = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetch('https://zenquotes.io/api/')
      .then(response => response.json())
      .then(data => {
        const randomQuote = data[0].q;
        setQuote(randomQuote);
      })
      .catch(error => console.error('Error fetching quote:', error));
  }, []);

  return (
    <div className="motivational-quote">
      <blockquote>
        <p>{quote}</p>
      </blockquote>
    </div>
  );
};

export default MotivationalQuote;
