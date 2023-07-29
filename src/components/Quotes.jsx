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

  

  return (
    <>
      <h2 class="subtitle is-3">A Quote For Inspiration</h2>
      <div class="box">
        <blockquote>
          {quote}
        </blockquote>
        <button class="button is-small is-success is-light is-rounded">Save</button>
      </div>
      <div>
        <button class="button is-success" onClick={handleRefreshClick}>Refresh</button>
      </div>
    </>
  );
};

export default Quotes;


