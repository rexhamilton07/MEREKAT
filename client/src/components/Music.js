import React from 'react';
import '../styles/Music.css'

const Music = () => {
  return (
    <div className = 'Music'>
      <div className = 'GenMusic'>
        <div className = 'SpotifyProfile'>
          <iframe src="https://open.spotify.com/embed/artist/3JoWxHEY7RGWFGLIgrFA7K?utm_source=generator" 
          mid-width="50%" 
          height="452" 
          frameBorder="0" 
          allowfullscreen="" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy">
          </iframe>
        </div>
        <div className = 'AppleMusicAnotherOne'>
            <iframe id="embedPlayer" src="https://embed.music.apple.com/us/album/another-one-single/1697403034?app=music&amp;itsct=music_box_player&amp;itscg=30200&amp;ls=1&amp;theme=auto" 
            height="452" 
            frameborder="0" 
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" 
            allow="autoplay *; encrypted-media *; clipboard-write">
            </iframe>
        </div>
        <div className = 'AppleMusicTTAS'>
          <iframe id="embedPlayer" src="https://embed.music.apple.com/us/album/talking-thru-a-smile-single/1712236961?app=music&amp;itsct=music_box_player&amp;itscg=30200&amp;ls=1&amp;theme=auto" 
          height="452" 
          frameborder="0" 
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" 
          allow="autoplay *; encrypted-media *; clipboard-write">
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Music;