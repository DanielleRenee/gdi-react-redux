import React, { Component } from 'react';

// we'll do this

class NameAnnouncer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleInputChange(event) {
        console.log(this)
        const value = event.target.value;
        this.setState({
            inputValue: value
        });
        console.log('changed');
    }

    handleClick(event) {
        event.preventDefault();
        alert(this.state.inputValue);
        console.log('clicked');
        this.setState({
            inputValue: ''
        });

        this.setState((prevState, props) => {
            return {
                toggle: !prevState.toggle
            };
        })
    }

     render () {
        return (
        <form> 
            <input 
             placeholder="Enter your name" 
             onChange={this.handleInputChange}
             value={this.state.inputValue}
            />
            <button onClick={this.handleClick}>Submit</button>
        </form>
         );
    }
}

export default NameAnnouncer


