import { useState } from 'react';

const LyricsPage = () => {
  const [lyrics, setLyrics] = useState('');
  const [artist, setArtist] = useState('');
  const [song, setSong] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);
    const data = await response.json();
    setLyrics(data.lyrics);
  };

  return (
    <div>
      <h1>Lyrics</h1>

      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={artist} 
          onChange={(e) => setArtist(e.target.value)} 
          placeholder="Artist"
        />
        <input 
          type="text" 
          value={song} 
          onChange={(e) => setSong(e.target.value)} 
          placeholder="Song Title"
        />
        <button type="submit">Get Lyrics</button>
      </form>

      <p>{lyrics}</p>
    </div>
  );
};

export default LyricsPage;