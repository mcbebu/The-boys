import React, { useState, useEffect } from 'react';

function MyVideoPlayer() {
  const [videoUrl, setVideoUrl] = useState('');

  useEffect(() => {
    fetch('/api/video') //edit this path
      .then(response => response.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob);
        setVideoUrl(url);
      })
      .catch(error => {
        console.error('Error loading video:', error);
      });
  }, []);

  return (
    <video controls style={{ width: '100%', height: 'auto' }}>
      <source src={videoUrl} type="video/mp4" />
    </video>
  );
}

export default MyVideoPlayer