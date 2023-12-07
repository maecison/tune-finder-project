import { useState } from 'react';
import SongDetailsPage from './SongDetailsPage';

const SongDetailsContainer = () => {
  const [details, setDetails] = useState({});
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

    const url = `https://genius-song-lyrics1.p.rapidapi.com/search/?q=${artist} ${song}&per_page=10&page=1`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '161993076cmsh75ac5486988cd75p12496cjsn074908f68041',
        'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      if (data.response.hits.length > 0) {
        // Get first hit
        const songDetails = data.response.hits[0].result;
        setDetails(songDetails);
        setError(null);
      } else {
        setDetails({});
        setError('Song details not found.');
      }
    } catch (error) {
      setError('Error fetching song details.');
    }
  };

  return (
    <SongDetailsPage 
      details={details}
      artist={artist}
      song={song} 
      error={error}
      handleArtistChange={handleArtistChange} 
      handleSongChange={handleSongChange} 
      handleSubmit={handleSubmit} 
    />
  );
};

export default SongDetailsContainer;