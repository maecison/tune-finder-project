import React, { useState } from 'react';

export default function RandomSongContainer() {
  const [song, setSong] = useState(null);

  const fetchRandomSong = async () => {
    const response = await fetch('/api/random-song');

    if (!response.ok) {
      console.error('Failed to fetch song');
      return;
    }

    const songData = await response.json();
    setSong(songData);
  };

  return (
    <div>
      <div className="rounded-md shadow sm:flex mb-3">
        <button 
          onClick={fetchRandomSong}
          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
        >
          Generate Random Song
        </button>
      </div>

      {song && (
        <div className="mt-5 bg-white shadow p-6 rounded-md">
          <h2 className="font-bold text-xl mb-2">{song.title}</h2>
          <p className="text-gray-700">{song.lyrics}</p>
        </div>
      )}
    </div>
  );
}