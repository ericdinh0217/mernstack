import React, { Component } from 'react';
import SuccessChild from './SuccessChild';  
import SuccessStory from './SuccessStory';  

class Success extends Component {
  getRandomValue = () => {
    return Math.floor(Math.random() * 1000);
  }

  receiveRandomValue = (randomValue) => {
    console.log("Random value received in Success:", randomValue);
  }

  render() {
    return (
      <div>
        <h2>Success Quotes</h2>
        <ul>
          <li>"Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill</li>
          <li>"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful." - Albert Schweitzer</li>
          <li>"The only place where success comes before work is in the dictionary." - Vidal Sassoon</li>
        </ul>
        <SuccessChild Name="John" Address="123 Main St" story={<SuccessStory story="I achieved success with React!" sendRandomValue={this.receiveRandomValue} />} />
      </div>
    );
  }
}

export default Success;
