import React, { Component } from 'react'

import ToDo from './ToDo'

export default class ToDos extends Component {
    state = {
        newTodo: '',
        toDos: this.props.tasks
    }

    handleChange = e => {
        this.setState({
            newTodo: e.target.value,
        })
    }

    addTodo = () => {
        this.setState({
            toDos: [...this.state.toDos, {newTodo: this.state.newTodo, isDone: false}],
            newTodo: ''
        })
    }

    markComplete = todo => {
        this.setState(
            prevState => ({
                toDos: prevState.toDos.map(task => {
                    if (task === todo) task.isDone = !task.isDone;
                    return task;
                })
        }))
    }

    render() {
        return (
            <div>
                <input onChange={this.handleChange} />
                {this.state.toDos.map((task, idx) =>
                    <ToDo task={task} key={idx} markComplete={this.markComplete}/>
                )}
                <button className="add-button" onClick={this.addTodo}>Add Todo</button>
            </div>
        )
    }
}