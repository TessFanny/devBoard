import React, { useState } from 'react';

function StackOverflowSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const searchStackOverflow = async () => {
    const url = `https://api.stackexchange.com/2.3/search?order=desc&sort=activity&intitle=${query}&site=stackoverflow`;
    const response = await fetch(url);
    const data = await response.json();
    setResults(data.items);
  };

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    searchStackOverflow();
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          Search Stack Overflow:
          <input type="text" value={query} onChange={handleQueryChange} />
        </label>
        <button type="submit">Search</button>
      </form>
      {results.length > 0 ? (
        <ul>
          {results.map((result) => (
            <li key={result.question_id}>
              <a href={result.link} target="_blank" rel="noreferrer">
                {result.title}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results.</p>
      )}
    </div>
  );
}

export default StackOverflowSearch;
