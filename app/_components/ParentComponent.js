import React, { useState } from 'react';
import SongDetailsPage from './SongDetailsPage';

const ParentComponent = () => {
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (title) => {
    try {
      const details = await fetchSongDetailsByTitle(title);
      setDetails(details.response.song);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <SongDetailsPage handleSearch={handleSearch} details={details} error={error} />
    </div>
  );
};

export default ParentComponent;