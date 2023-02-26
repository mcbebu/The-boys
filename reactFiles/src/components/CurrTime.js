import React, { useState, useEffect } from 'react';

function CurrTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTime = new Date(time.getTime() + 5 * 60000); // Add 10 minutes to current time
      setTime(newTime);
    }, 3000); // Update every 3 seconds

    return () => clearInterval(intervalId);
  }, [time]);

  return (
    <div>
      Current time: {time.toLocaleTimeString()}
    </div>
  );
}

export default CurrTime;