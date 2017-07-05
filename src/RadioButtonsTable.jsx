import React, { Component } from 'react';
import RadioButton from './RadioButton';

class RadioButtonsTable extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedOption: 'option2' };

        //this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
        this.onOptionChange = this.onOptionChange.bind(this);
    }
    onOptionChange(option) {
        console.log(option);
        this.setState({ selectedOption: option });
    }
    render() {
        return (
            <div>
                
                <table>
                    <thead>
                        <tr>
                            <td>Header 1</td>
                            <td>Header 2</td>
                            <td>Header 3</td>
                            <td>Header 3</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Cell 1</td>
                            <td>Cell 2<RadioButton name="option1" checked={this.state.selectedOption === 'option1'} onOptionChange={this.onOptionChange} /></td>
                            <td>Cell 3<RadioButton name="option2" checked={this.state.selectedOption === 'option2'} onOptionChange={this.onOptionChange}  /></td>
                            <td>Cell 3<RadioButton name="option3" checked={this.state.selectedOption === 'option3'} onOptionChange={this.onOptionChange}  /></td>
                        </tr>
                        <tr>
                            <td>Cell 1</td>
                            <td>Cell 2<RadioButton name="option4" checked={this.state.selectedOption === 'option4'} onOptionChange={this.onOptionChange}  /></td>
                            <td>Cell 3<RadioButton name="option5" checked={this.state.selectedOption === 'option5'} onOptionChange={this.onOptionChange}  /></td>
                            <td>Cell 3<RadioButton name="option6" checked={this.state.selectedOption === 'option6'} onOptionChange={this.onOptionChange}  /></td>
                        </tr>
                    </tbody>

                </table>
            </div>
        );
    }
}

export default RadioButtonsTable;
