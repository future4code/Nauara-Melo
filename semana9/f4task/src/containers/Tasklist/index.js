import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';
import { getTask, checkedTask, removeTask } from '../../actions/todos'

class TaskList extends Component {
    componentDidMount () {
        this.props.fetchTasks();
    }

    render() {
        return (
            <ul>
                {this.props.taskList.filter((task) => {
                    const filter = this.props.filter

                    if (filter === 'pendentes') {
                        return task.done === false
                    }

                    if (filter === 'completas') {
                        return task.done === true
                    }

                    return true
                }).map(task => (
                    <li onClick={() => this.props.toggleTask(task.id)}>
                      {task.text} - Completa: {String(task.done)}
                      <button onClick={() => this.props.deleteTask(task.id)}> Apagar </button>
                    </li>
                ))}
            </ul>  
        );
    }
} 

const mapStatetoProps = state => ({
        taskList: state.todos.taskList,
        filter: state.todos.filter
})

const mapDispatchToProps = dispatch => {
    return {
        fetchTasks: () => dispatch(getTask()),
        toggleTask: id => dispatch(checkedTask(id)),
        deleteTask: id => dispatch(removeTask(id))
    };
} 

export default connect(mapStatetoProps, mapDispatchToProps)(TaskList); 