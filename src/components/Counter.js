import React from 'react'

import '../styling/Counter.css'

class Counter extends React.Component {
    state = { counter: 1, searchTerm: '' }

    //Made this to better organize how the setState is called
    buttonClick = (expression) => {
        switch (expression) {
            case 'increment':
                this.setState({ counter: this.state.counter + 1 })
                break;
            case 'decrement':
                this.setState({ counter: this.state.counter - 1 })
                break;
            default:
                break;
        }
    }

    onFormSubmit = (e) => {//When clicking enter on the SearchBar
        e.preventDefault()//Makes it so the page doesn't refresh

        this.props.SubmitForm(this.state.searchTerm, this.state.counter)//Call the function in App.js with these arguments
    }


    render() {
        return (
            <div>
                <div>
                    <h1 className='counter-style'>{this.state.counter}</h1>
                </div>
                <div className='buttons'>
                    <button onClick={() => this.buttonClick('decrement')}>-</button>
                    <button onClick={() => this.buttonClick('increment')}>+</button>
                </div>
                <div>
                    <form onSubmit={this.onFormSubmit}>
                        <input
                            type='text'
                            value={this.state.searchTerm /*This makes the initial value of state what appears on the SearchBar by default */}
                            onChange={(e) => { this.setState({ searchTerm: e.target.value }) }} /> {/*When the user types it changes the value of state */}
                    </form>
                </div>
            </div>
        )
    }
}

export default Counter