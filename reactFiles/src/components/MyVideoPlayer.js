import React from 'react';
import vid4 from '../assets/vid4.mp4'

function MyVideoPlayer() {
  return (
    <video controls loop style={{ width: '100%', height: 'auto' }}>
      <source src={vid4} type="video/mp4" />
    </video>
  );
  
}

export default MyVideoPlayer