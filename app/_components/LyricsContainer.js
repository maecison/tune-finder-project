import { useState } from 'react';
import LyricsPage from './LyricsPage';

const LyricsContainer = () => {
  const [lyrics, setLyrics] = useState('');
  const [artist, setArtist] = useState('');
  const [song, setSong] = useState('');
  const [error, setError] = useState(null);

  const handleArtistChange = (event) => {
    setArtist(event.target.value);
  };

  const handleSongChange = (event) => {
    setSong(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);
      const data = await response.json();
      if (data.lyrics) {
        setLyrics(data.lyrics);
        setError(null);
      } else {
        setLyrics('');
        setError('Lyrics not found.');
      }
    } catch (error) {
      setError('Error fetching lyrics.');
    }
  };

  return (
    <LyricsPage 
      lyrics={lyrics} 
      artist={artist}
      song={song} 
      error={error}
      handleArtistChange={handleArtistChange} 
      handleSongChange={handleSongChange} 
      handleSubmit={handleSubmit} 
    />
  );
};

export default LyricsContainer;