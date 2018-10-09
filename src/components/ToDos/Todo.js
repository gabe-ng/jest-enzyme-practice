import React from 'react'

const ToDo = ({ task, markComplete }) => {
    return (
        <div>
            <button className="mark-done" onClick={e => markComplete(task)}>Done</button>
            <div className={`task-name ${task.isDone ? 'checked' : 'unchecked'}`}>{task.task}</div>
        </div>
    )
}

export default ToDo;