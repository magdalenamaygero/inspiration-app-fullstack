import React, { useEffect, useState } from 'react';

const SavedQuotes = () => {
  const [savedQuotes, setSavedQuotes] = useState([]);

  useEffect(() => {
    // Fetch the saved quotes from localStorage on component mount
    const savedQuotesData = localStorage.getItem('savedQuotes');
    if (savedQuotesData) {
      setSavedQuotes(JSON.parse(savedQuotesData));
    }
  }, []);

  return (
    <>
      <h2 className="subtitle is-3">Saved Quotes</h2>
      {savedQuotes.length === 0 ? (
        <p>No quotes saved yet.</p>
      ) : (
        <ul>
          {savedQuotes.map((quote, index) => (
            <li key={index}>{quote}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default SavedQuotes;
