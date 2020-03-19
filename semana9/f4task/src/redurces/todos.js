import { deleteTask, completeAllTasks, setFilter, createTask} from "../actions/todos";
import { deleteAllTasks } from "../actions/todos"; 

const initalState = {
    todosList: [
        {
            id: 1,
            text: 'Task one',
            done: false
        },
        {
            id: 2,
            text: 'Task two',
            done: true
        }
    ],
    taskList: [],
    filter: 'todas'    
}

export const todos = (state = initalState, action) => {
    switch(action.type) {
        case 'CREATE_TASK':
            const newTodo = {
                id: Date.now(),
                text: action.payload.text,
                done: false,
            };

            return {
                ...state,
                taskList: [newTodo, ...state.taskList]
            }
        case 'TOGGLE_TASK': {
            const newTodosList = state.taskList.map( todo => {
                if(todo.id === action.payload.id) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo
            })
            return {
                ...state,
                taskList: newTodosList
            };
        }    
        case 'DELETE_TASK': {
            const newTodosList = state.taskList.filter(todo => {
                if (todo.id === action.payload.id) {
                    return false
                }

                return true
            })
            return {
                ...state,
                taskList: newTodosList
            };
        }
        case 'COMPLETE_ALL_TASKS': {
            const newTodosList = state.taskList.map( todo => {
                return {
                    ...todo,
                    done: true
                };
            }); 
            return {
                ...state,
                taskList: newTodosList
            };
        }   
        case 'DELETE_ALL_COMPLETE_TASKS': {
            const newTodosList = state.taskList.filter(todo => {
                if (todo.done) {
                    return false;
                }
                return true;
            });
            return {
                ...state,
                taskList: newTodosList
            };
        } 
        case 'SET_FILTER': {
            console.log('oi')
            return {
                ...state,
                filter: action.payload.filter
            }
        }
        case 'SET_TASKS': {
            return {
                ...state,
                taskList: action.payload.taskList
            }
        }
        default:
            return state;
    }
}