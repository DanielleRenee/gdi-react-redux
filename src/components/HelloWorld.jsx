import React, { Component } from 'react';

// make a class component that renders 'Hello World' in a div

class HelloGoodbye extends Component {
hello () {
        console.log('helllllllllllllllllo');
}

goodbye () {
    console.log('I SAY GOOD DAY');
}

render () {
    this.hello();

    return (
        <span>React is the best!</span>
        );
    }
}

export default HelloGoodbye;




