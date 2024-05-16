import React, { Component } from 'react';

class UserSignIn extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    // Handle form submission
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default UserSignIn;
