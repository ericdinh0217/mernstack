import React, { Component } from 'react';

class OptimizeRendering extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ['A', 'B', 'C'],
      duplicateData: ['A', 'B', 'C'],
    };
  }

  componentDidMount() {
    // Simulate state change after some time
    setTimeout(() => {
      this.setState({ duplicateData: this.state.data });
    }, 3000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Compare the current state with the next state
    if (this.state.duplicateData !== nextState.duplicateData) {
      // Only update if duplicateData has changed
      return true;
    }
    return false; // Otherwise, prevent re-rendering
  }

  render() {
    console.log('Render');
    return <div>{this.state.duplicateData.join(', ')}</div>;
  }
}

export default OptimizeRendering;
