import React from 'react';
import { connect } from 'react-redux';
import { createTask } from '../../actions/todos';

class TaskForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputText: ''
        };
    }


    onChangeInput = (event) => {
        this.setState({ inputText: event.target.value });
    };

    buttonAdd = () => {
        this.props.addTask(this.state.inputText)
    }

    render() {
        return (
            <form>
                <input type="text" onChange={this.onChangeInput} value={this.state.inputText} placeholder="O que precisa ser feito?" />  
                <button type="button" onClick={this.buttonAdd}> Adicionar Tarefa </button>
            </form>
        )
    }

}

const mapStateToProps = state => {
    return {};
};
    
const mapDispatchToProps = dispatch => {
    return {
        addTask: text => {
            const action = createTask(text)
            dispatch(action);
        }
    };
};

export default connect(null, mapDispatchToProps)(TaskForm); 