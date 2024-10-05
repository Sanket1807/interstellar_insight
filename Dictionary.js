import React, { useState } from 'react';
import axios from 'axios';

const Dictionary = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setResult(null);

        try {
            const response = await axios.get(
                `https://en.wikipedia.org/w/api.php?origin=*&action=query&list=search&srsearch=${searchTerm}&format=json`
            );
            const searchResults = response.data.query.search;

            if (searchResults.length > 0) {
                const pageId = searchResults[0].pageid;
                const detailedResponse = await axios.get(
                    `https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=extracts|pageprops|pageimages&exintro&explaintext&format=json&pageids=${pageId}&piprop=original|thumbnail`
                );
                const page = detailedResponse.data.query.pages[pageId];

                setResult({
                    title: page.title,
                    content: page.extract,
                    link: `https://en.wikipedia.org/?curid=${pageId}`,
                    image: page.original ? page.original.source : (page.thumbnail ? page.thumbnail.source : null), 
                });
            } else {
                setError('No results found');
            }
        } catch (err) {
            setError('Failed to fetch data. Please try again later.');
        }

        setLoading(false);
    };

    return (
        <div className="dictionary-page-bg">
            <div className="dictionary-page">
                <h1>Astronomical Glossary</h1>
                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search for astronomical terms"
                        className="search-input"
                    />
                    <button type="submit" className="search-button" disabled={loading}>
                        {loading ? 'Searching...' : 'Search'}
                    </button>
                </form>

                {error && <p className="error-message">{error}</p>}
                {result && (
                    <div className="result-container">
                        <h2>{result.title}</h2>
                        {result.image ? (
                            <img src={result.image} alt={result.title} className="result-image" />
                        ) : (
                            <p>No image available</p>
                        )}
                        <p>{result.content}</p>
                        <a href={result.link} target="_blank" rel="noopener noreferrer" className="signup-link">
                            Read more on Wikipedia
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dictionary;
