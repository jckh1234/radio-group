import React, { Component } from 'react';

class RadioButton extends Component {
    constructor(props) {
        super(props);
        
        this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        console.log(event.target.value);
        this.props.onOptionChange(event.target.value);
    }

    render() {
        return (
            <input type="radio" value={this.props.name} checked={this.props.checked} onChange={this.handleChange} />
        );
    }
}

export default RadioButton;
