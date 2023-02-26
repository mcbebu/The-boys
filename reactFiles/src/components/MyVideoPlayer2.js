import React from 'react';
import vid3 from '../assets/vid3.mov'

function MyVideoPlayer2() {
  return (
    <video controls loop style={{ width: '100%', height: 'auto' }}>
      <source src={vid3} type="video/mp4" />
    </video>
  );
  
}

export default MyVideoPlayer2