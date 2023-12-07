import React, { useState } from 'react';

const SongDetailsPage = ({ handleSearch, details, error }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(title);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex space-x-4 mb-3">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Song Title"
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-black"
        />
        <button type="submit" className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-2 md:text-sm md:px-4">Get Song Details</button>
      </form>

      {error && <p className="text-red-500">{error}</p>}

      {details && !error && (
        <div className="mt-5">
          <h1 className="text-xl font-bold">{details.title}</h1>
          <h2 className="text-lg">{details.full_title}</h2>
          <h3 className="text-md text-gray-500">{details.primary_artist?.name}</h3>
          <div className="mt-4">
            <a href={details.url} target="_blank" rel="noreferrer" className="text-indigo-600 hover:text-indigo-800 mt-2 inline-block underline">See on Genius</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default SongDetailsPage;