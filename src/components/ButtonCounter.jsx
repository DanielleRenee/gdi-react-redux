import React, { Component } from 'react';

// create a class component that toggles a button on and off

// don't forget to export your component!

// we'll do this

class ButtonCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0

    }
}


  handleButtonClick(event) {
    this.setState({
        count: this.state.count + 1
    });
  }

  render() {
    return (
      <div className="ButtonCounter">
      <h1>{this.state.count}</h1>
      <button onClick={this.handleButtonClick.bind(this)}></button>
      </div>
    );
  }
}

export default ButtonCounter;