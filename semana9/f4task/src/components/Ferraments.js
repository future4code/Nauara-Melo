import React from 'react';
import { connect } from 'react-redux';
import { completeAllTasks, deleteAllCompleteTasks, setFilter } from '../actions/todos';

const Ferraments = (props) => {
    return (
        <div>
          <button onClick={props.completeAllTasks}> Marcar todas como completas</button>
          <button onClick={props.setFilter('todas')}> Todas </button>
          <button onClick={props.setFilter('pendentes')}> Pendentes </button>
          <button onClick={props.setFilter('completas')}> completas</button>
          <div> 
            <button onClick={props.deleteAllCompleteTasks}>Remover Completas </button>
          </div>
       </div>
    );
};

const mapDispatchToProps = dispatch => {
  return {
    completeAllTasks: () => dispatch(completeAllTasks()),
    deleteAllCompleteTasks: () => dispatch(deleteAllCompleteTasks()),
    setFilter: (filter) => dispatch(setFilter(filter))
  };
};

export default connect(
  null,
  mapDispatchToProps
  )(Ferraments);