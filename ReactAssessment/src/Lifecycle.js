import React, { Component } from 'react';

class Lifecycle extends Component {
  constructor(props) {
    super(props);
    console.log('Constructor');
  }

  componentDidMount() {
    console.log('Component Did Mount');
  }

  componentDidUpdate() {
    console.log('Component Did Update');
  }

  componentWillUnmount() {
    console.log('Component Will Unmount');
  }

  render() {
    console.log('Render');
    return <div>Lifecycle </div>;
  }
}

export default Lifecycle;
