import React from 'react';

const SuccessStory = ({ story, sendRandomValue }) => {
  const randomValue = Math.floor(Math.random() * 1000);
  sendRandomValue(randomValue);

  return (
    <div>
      <p>{story}</p>
      <p>Random Value: {randomValue}</p>
    </div>
  );
};

export default SuccessStory;
