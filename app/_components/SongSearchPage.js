import React, { useState } from 'react';

const SongSearchPage = ({ handleSearch }) => {
  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(artist, song);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex space-x-4 mb-3">
        <input
          type="text"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          placeholder="Artist"
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-black"
        />
        <input 
          type="text"
          value={song}
          onChange={(e) => setSong(e.target.value)}
          placeholder="Song Title"
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-black"
        />
        <button type="submit" className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-2 md:text-sm md:px-4">Get Song Details</button>
      </form>
    </div>
  );
};

export default SongSearchPage;