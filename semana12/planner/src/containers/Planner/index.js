import React from "react";
import { connect } from "react-redux";
import { createTask, listTasks } from '../../actions/todos';
import styled from "styled-components";
import foto2 from '../../img/foto2.png';

const Container = styled.div`
  background-image: url(${foto2});
  background-color: #F0FFF0;
  background-size: contain;
`
const Header = styled.footer`
  background-color:	#B0C4DE; 
  color: whitesmoke;
  font-size: 25px;
  height: 40px;
  text-align: center;
  padding-top: 10px;
`
const CreateTask = styled.div`
  text-align: center;
  margin-top: 40px;
`
const ListTasks = styled.div`
  font-family: "Roboto";
  text-align: center;
  margin-top: 50px;
  border: solid 1px;
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto; 
`
const DivTask = styled.div`
  border: solid 1px;
  height: 400px;
`

const TituloStyle = styled.span`
  font-weight: bold;
  margin-bottom: 10px;
`

const InputStyle = styled.input`
  margin: 0.5%;
`
const SelectStyle = styled.select`
  margin: 0.5%;
`
const UlStyle = styled.ul`
  margin: 0;
  padding: 0;
`

const LiStyle = styled.li`
  list-style-type: none;
  text-align: left;
  padding-top: 10px;
  padding-left: 10px;
`

const Footer = styled.footer`
  background-color:	#B0C4DE; 
  color: whitesmoke;
  font-size: 25px;
  height: 40px;
  text-align: center;
  padding-top: 10px;
`

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

    const tasksSeg = this.props.tasks.filter((task) => {
      return task.day === "seg"
    })

    const tasksTer = this.props.tasks.filter((task) => {
      return task.day === "ter"
    })

    const tasksQua = this.props.tasks.filter((task) => {
      return task.day === "qua"
    })    

    const tasksQui = this.props.tasks.filter((task) => {
      return task.day === "qui"
    })

    const tasksSex = this.props.tasks.filter((task) => {
      return task.day === "sex"
    })

    const tasksSab = this.props.tasks.filter((task) => {
      return task.day === "sab"
    })

    const tasksDom = this.props.tasks.filter((task) => {
      return task.day === "dom"
    })

    return(
      <Container>
        <Header>
          MINHA SEMANA
        </Header>
        <CreateTask>
          <label for='novaTarefa'> Nova Tarefa: </label>
          <InputStyle type='text' name="textTask" onChange={this.handleOnChange} id='novaTarefa' value={this.state.textTask}/>
          <SelectStyle id='diaDaSemana' name="dayOfWeek" onChange={this.handleOnChange} value={this.state.dayOfWeek}>
            <option value="seg"> Segunda-Feira </option>
            <option value="ter"> Terça-Feira </option>
            <option value="qua"> Quarta-Feira </option>
            <option value="qui"> Quinta-Feira </option>
            <option value="sex"> Sexta-Feira </option>
            <option value="sab"> Sábado </option>
            <option value="dom"> Domingo </option>
          </SelectStyle>
          <button onClick={this.handleOnClick}> Criar Tarefa! </button>          
        </CreateTask>


        <ListTasks> 
          <DivTask> 
            <TituloStyle> Segunda-Feira </TituloStyle>
              <UlStyle> 
                {tasksSeg.map(task => {
                  return (
                  <LiStyle>{task.text}</LiStyle>
                  )
                })}
              </UlStyle>
          </DivTask>
          <DivTask>
          <TituloStyle> Terça-Feira </TituloStyle>
              <UlStyle>
                {tasksTer.map(task => {
                  return (
                  <LiStyle>{task.text}</LiStyle>
                  )
                })}
              </UlStyle>
          </DivTask>
          <DivTask>
          <TituloStyle> Quarta-Feira </TituloStyle>
              <UlStyle>
                {tasksQua.map(task => {
                  return (
                  <LiStyle>{task.text}</LiStyle>
                  )
                })}
              </UlStyle>
          </DivTask>
          <DivTask>
            <TituloStyle> Quinta-Feira </TituloStyle>
              <UlStyle>
                {tasksQui.map(task => {
                  return (
                  <LiStyle>{task.text}</LiStyle>
                  )
                })}
              </UlStyle>
          </DivTask>
          <DivTask>
            <TituloStyle> Sexta-Feira </TituloStyle>
              <UlStyle>
                {tasksSex.map(task => {
                  return (
                  <LiStyle>{task.text}</LiStyle>
                  )
                })}
              </UlStyle>
          </DivTask>
          <DivTask>
            <TituloStyle> Sábado </TituloStyle>
              <UlStyle>
                {tasksSab.map(task => {
                  return (
                  <LiStyle>{task.text}</LiStyle>
                  )
                })}
              </UlStyle>
          </DivTask>
          <DivTask>
            <TituloStyle> Domingo </TituloStyle>
              <UlStyle>
                {tasksDom.map(task => {
                  return (
                  <LiStyle>{task.text}</LiStyle>
                  )
                })}
              </UlStyle>
          </DivTask>            
        </ListTasks>
        <Footer>
          @nauaramelo
        </Footer>
      </Container> 
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
