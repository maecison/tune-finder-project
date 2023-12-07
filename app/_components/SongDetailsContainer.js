import { useState, useEffect } from 'react';
import SongDetailsPage from './SongDetailsPage';

const SongDetailsContainer = ({ id }) => {
  const [details, setDetails] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSongDetails = async () => {
      const url = `https://genius-song-lyrics1.p.rapidapi.com/song/details/?id=${id}`;
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
        if (data) {
          setDetails(data);
          setError(null);
        } else {
          setDetails({});
          setError('Song details not found.');
        }
      } catch (error) {
        setError('Error fetching song details.');
      }
    };

    fetchSongDetails();
  }, [id]);

  return (
    <SongDetailsPage 
      details={details}
      error={error}
    />
  );
};

export default SongDetailsContainer;