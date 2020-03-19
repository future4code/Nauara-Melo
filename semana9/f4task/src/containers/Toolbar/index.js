import React from 'react';
import { connect } from 'react-redux';
import { deleteDoneTodos, setFilter } from '../../actions/todos';

const Toolbar = (props) => {
    return (
        <div>
         <button onClick={props.completeAllTasks}> Marcar todas como completas</button>
         <button onClick={() => props.setFilter('pendentes')}> Pendentes </button>
         <button onClick={() => props.setFilter('completas')}> Completas </button>
         <button onClick={() => props.setFilter('todas')}> Todas </button>
         <div>
            <button onClick={props.deleteAllDoneTasks}>Remover Todas as Tarefas Completas</button>
         </div>
        </div> 
    )
}

const mapDispatchToProps = dispatch => {
    return {
        deleteAllDoneTasks: () => dispatch(deleteDoneTodos()),
        setFilter: filter => dispatch(setFilter(filter))
    };
} 

export default connect(
    null,
    mapDispatchToProps
    )(Toolbar);