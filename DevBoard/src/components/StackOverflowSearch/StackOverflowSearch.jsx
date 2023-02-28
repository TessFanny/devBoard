import React, { useState } from 'react';

function StackOverflowSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false); // Ajout de l'état de chargement

  const searchStackOverflow = async () => {
    setLoading(true); // Mettre l'état de chargement à true au début de la recherche
    const url = `https://api.stackexchange.com/2.3/search?order=desc&sort=activity&intitle=${query}&site=stackoverflow`;
    const response = await fetch(url);
    const data = await response.json();
    setResults(data.items);
    setLoading(false); // Mettre l'état de chargement à false une fois que la recherche est terminée
  };

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (query.trim() !== '') {
      searchStackOverflow();
    }
  };

  return (
    <div style={{ backdropFilter: 'blur(10px)', opacity: 1 }}>
      <form onSubmit={handleFormSubmit} style={{ paddingTop: '2rem' }}>
        <label>
          Search Stack Overflow:
          <input type="text" value={query} onChange={handleQueryChange} />
        </label>
        <button type="submit">Search</button>
      </form>
      {loading ? ( // Vérifier si l'état de chargement est vrai pour afficher le flou ou l'opacité
        <div style={{ backdropFilter: 'blur(10px)', opacity: 0.5 }}>
          <p>Searching...</p>
        </div>
      ) : results.length > 0 ? (
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
