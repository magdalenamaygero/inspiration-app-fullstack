import React, { useEffect, useState } from 'react';

const Quotes = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      const url = 'https://healthruwords.p.rapidapi.com/v1/quotes/?t=Wisdom&maxR=1&size=medium&id=731';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'f8cd80ea91msh402cc4346626cf4p17407ejsn91636161557c',
          'X-RapidAPI-Host': 'healthruwords.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();

        if (data.length > 0) {
          setQuote(data[0].media);
        } else {
          setQuote('No quotes found.');
        }
      } catch (error) {
        console.error('Error fetching quote:', error);
        setQuote('Error fetching quote.');
      }
    };

    fetchQuote();
  }, []);

  return (
    <div>
      <h2>Quote for Inspiration</h2>
      <blockquote>
        {quote}
      </blockquote>
    </div>
  );
};

export default Quotes;


