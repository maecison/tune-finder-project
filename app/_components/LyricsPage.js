const LyricsPage = ({ lyrics, artist, song, handleArtistChange, handleSongChange, handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex space-x-4 mb-3">
        <input
          type="text"
          value={artist}
          onChange={handleArtistChange}
          placeholder="Artist"
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
        <input 
          type="text"
          value={song}
          onChange={handleSongChange}
          placeholder="Song Title"
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
        <button type="submit" className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-2 md:text-sm md:px-4">Get Lyrics</button>
      </form>

      <p className="text-gray-500">{lyrics}</p>
    </div>
  );
};

export default LyricsPage;