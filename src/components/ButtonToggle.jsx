import React, { Component } from 'react';

// create a class component that toggles a button on and off

// don't forget to export your component!

// we'll do this

class ButtonToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: false

    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }


  handleButtonClick() {
    this.setState((prevState) => {
      return {
        toggled: !prevState.toggled
      };
    });
  }


  render() {
    return (
      <div className="ButtonToggle">
        <button onClick={this.handleButtonClick}>{this.state.toggled ? 'On' : 'Off'}</button>
      </div>
    );
  }
}

export default ButtonToggle;