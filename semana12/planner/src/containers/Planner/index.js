import React from "react";
import { connect } from "react-redux";
import { createTask, listTasks } from '../../actions/todos';


class Planner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textTask: '',
      dayOfWeek: 'seg'
    }
  };

  componentDidMount() {
    if (this.props.listTasks) {
        this.props.listTasks()
    }
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleOnClick = event => {
    event.preventDefault();
    
    const task = {
      text: this.state.textTask,
      day: this.state.dayOfWeek
    }

    this.props.createTask(task)
  };

  render() {
    return(
      <div>
          <label for='novaTarefa'> Nova Tarefa: </label>
          <input type='text' name="textTask" onChange={this.handleOnChange} id='novaTarefa' value={this.state.textTask}/>
          <select id='diaDaSemana' name="dayOfWeek" onChange={this.handleOnChange} value={this.state.dayOfWeek}>
            <option value="seg"> Segunda-Feira </option>
            <option value="ter"> Terça-Feira </option>
            <option value="qua"> Quarta-Feira </option>
            <option value="qui"> Quinta-Feira </option>
            <option value="sex"> Sexta-Feira </option>
            <option value="sab"> Sábado </option>
            <option value="dom"> Domingo </option>
          </select>
          <button onClick={this.handleOnClick}> Criar Tarefa! </button>

          {this.props.tasks.map(task => {
            return (
              <div>
                {task.day} - {task.text}
              </div>
            )
          })}
      </div> 
    )
  }
}

const mapStateToProps = state => ({
  tasks: state.todos.tasks
})

const mapDispatchToProps = dispatch => ({
  createTask: (task) => dispatch(createTask(task)),
  listTasks: () => dispatch(listTasks())
})

export default connect(mapStateToProps, mapDispatchToProps)(Planner);
