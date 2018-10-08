import React, { Component } from 'react';

export default class Counter extends Component {
    state = {
        number: 0
    }

    incNum = () => {
        this.setState({ number: this.state.number + 1})
    }

    decNum = () => {
        this.setState({ number: this.state.number - 1})
    }

    render () {
        return <div>
            <h1>Counter</h1>
            <p className="number">{this.state.number}</p>
            <button className="plus" onClick={this.incNum}>+</button>
            <button className="minus" onClick={this.decNum}>-</button>
          </div>;
    }
}