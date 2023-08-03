import React, { useEffect, useState } from 'react';

const Quotes = () => {
  const [quote, setQuote] = useState('');
  const [refreshCount, setRefreshCount] = useState(0);

  // let API_KEY = 'slLKXe8niunyBJ1CI4GglA==miYB7SoEwaIImlBx'

  useEffect(() => {
    // Replace 'YOUR_API_KEY' with your actual API key
    const apiKey = 'slLKXe8niunyBJ1CI4GglA==miYB7SoEwaIImlBx';
    const category = 'happiness'; // You can change the category or make it dynamic based on user input

    const fetchQuote = async () => {
      try {
        const response = await fetch(
          `https://api.api-ninjas.com/v1/quotes`,
          {
            method: 'GET',
            headers: { 'X-Api-Key': apiKey },
          }
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        if (data && data.length > 0) {
          // Choose a random quote from the fetched data
          const randomIndex = Math.floor(Math.random() * data.length);
          setQuote(data[randomIndex].quote);

        } else {
          setQuote('No quotes found.');
        }
      } catch (error) {
        console.error('Error fetching quote:', error);
        setQuote('Error fetching quote.');
      }
    };

    fetchQuote();
  }, [refreshCount]);

  const handleRefreshClick = () => {
    // Increase the refreshCount to trigger a re-render and fetch a new quote
    setRefreshCount((prevRefreshCount) => prevRefreshCount + 1);
  };


  const handleSaveClick = () => {
    if (quote) {
      // Get the existing saved quotes from localStorage or initialize an empty array
      const savedQuotesData = localStorage.getItem('savedQuotes');
      const savedQuotes = savedQuotesData ? JSON.parse(savedQuotesData) : [];

      // Add the new quote to the array
      savedQuotes.push(quote);

      // Save the updated array back to localStorage
      localStorage.setItem('savedQuotes', JSON.stringify(savedQuotes));
    }
  };
  

  return (
    <>
      <h2 className="subtitle is-3">Take a Quote For Inspiration</h2>
      <div className="box">
        <blockquote>
          {quote}
        </blockquote>
        <button id="fav" className="button is-small is-success is-light is-rounded" onClick={handleSaveClick}>Favorite</button>
      </div>
      <div>
        <button id="refresh" className="button is-link is-light" onClick={handleRefreshClick}>Refresh</button>
      </div>
    </>
  );
};

export default Quotes;


