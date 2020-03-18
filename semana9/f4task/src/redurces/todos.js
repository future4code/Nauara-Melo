import { deleteTask, completeAllTasks, setFilter} from "../actions/todos";
import { deleteAllTasks } from "../actions/todos"; 

const initalState = {
    todosList: [
        {
            id: 1,
            text: 'Task one',
            complete: false
        },
        {
            id: 2,
            text: 'Task two',
            complete: true
        }
    ],
    filter: 'todas'    
}

export const todos = (state = initalState, action) => {
    switch(action.type) {
        case 'ADD_TASK':
            const newTodo = {
                id: Date.now(),
                text: action.payload.text,
                complete: false,
            };
            return {
                ...state,
                todosList: [newTodo, ...state.todosList]
            }
        case 'TOGGLE_TASK': {
            const newTodosList = state.todosList.map( todo => {
                if(todo.id === action.payload.id) {
                    return {
                        ...todo,
                        complete: !todo.complete
                    }
                }
                return todo
            })
            return {
                ...state,
                todosList: newTodosList
            };
        }    
        case 'DELETE_TASK': {
            const newTodosList = state.todosList.filter(todo => {
                if(todo.id === action.payload.id) {
                    return false
                }
            })
            return {
                ...state,
                todosList: newTodosList
            };
        }
        case 'COMPLETE_ALL_TASKS': {
            const newTodosList = state.todosList.map( todo => {
                return {
                    ...todo,
                    complete: true
                };
            }); 
            return {
                ...state,
                todosList: newTodosList
            };
        }   
        case 'DELETE_ALL_COMPLETE_TASKS': {
            const newTodosList = state.todosList.filter(todo => {
                if(todo.complete) {
                    return false;
                }
                return true;
            });
            return {
                ...state,
                todosList: newTodosList
            };
        } 
        case 'SET_FILTER': {
            return {
                ...state,
                filter: action.payload.filter
            }
        }
        default:
            return state;
    }
}