import { useState } from 'react';
import LyricsPage from './LyricsPage';
import { useClient } from 'next/client';

const LyricsContainer = () => {
  useClient();

  const [lyrics, setLyrics] = useState('');
  const [artist, setArtist] = useState('');
  const [song, setSong] = useState('');

  const handleArtistChange = (event) => {
    setArtist(event.target.value);
  };

  const handleSongChange = (event) => {
    setSong(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);
    const data = await response.json();
    setLyrics(data.lyrics);
  };

  return (
    <LyricsPage 
      lyrics={lyrics} 
      artist={artist} 
      song={song} 
      handleArtistChange={handleArtistChange} 
      handleSongChange={handleSongChange} 
      handleSubmit={handleSubmit} 
    />
  );
};

export default LyricsContainer;