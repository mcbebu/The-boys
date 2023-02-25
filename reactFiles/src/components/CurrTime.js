import React, { useState, useEffect } from 'react';

function CurrTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      Current time: {time.toLocaleTimeString()}
    </div>
  );
}


export default CurrTime