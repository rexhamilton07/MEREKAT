import React from 'react';

const Music = () => {
  return (
    <div>
      <h1>Music</h1>

      {/* Spotify Embed Code for the specified track */}
      <iframe
        src="https://open.spotify.com/embed/track/70F56ADruJuHrqsM1U0hyt"
        width="300"
        height="380"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
        title="Spotify Track"
      ></iframe>
    </div>
  );
};

export default Music;