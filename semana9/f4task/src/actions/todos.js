import axios from 'axios';

export const CreateTask = (text) => {
    return {
        type: 'CREATE_TASK',
        payload: {
            text: text
        }
    };
};

export const toggleTask = (id) => {
    return {
        type: 'TOGGLE_TASK',
        payload: {
            id
        }
    };
};

export const deleteTask = (id) => {
    return {
        type: 'DELETE_TASK',
        payload: {
            id
        }
    };
};

export const completeAllTasks = () => {
    return {
        type: 'COMPLETE_ALL_TASKS',
    };
};

export const deleteAllCompleteTasks = () => {
    return {
        type: 'DELETE_ALL_COMPLETE_TASKS'
    };
};

export const setFilter = (filter) => {
    return {
        type: 'SET_FILTER',
        payload: {
            filter
        }
    };
};

export const setList = taskList => {
    return {
        type: 'SET_TASKS',
        payload: {
            taskList
        }
    }
}


export const createTask = (text) => async (dispatch, getState) => {
    try {
        await axios.post(
            "https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/nauaramelo/todos",
            {
                text
            }
        );

        dispatch(CreateTask(
            text
        ));
    } catch (error) {
        console.log('oi')
    }
};

export const getTask = () => async (dispatch) => {
    const response = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/nauaramelo/todos");
    
    dispatch(setList(response.data.todos));
};

export const checkedTask = (id) => async (dispatch) => {
    const response = await axios.put(
        `https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/nauaramelo/todos/${id}/toggle`
    );

    dispatch(toggleTask(id))
};

export const removeTask = (id) => async (dispatch) => {
    const response = await axios.delete(
        `https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/nauaramelo/todos/${id}`
    )

    dispatch(deleteTask(id))
};

 export const deleteDoneTodos = () => async (dispatch) => {
     const response = await axios.delete(
        'https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/nauaramelo/todos/delete-done'
    )

    dispatch(deleteAllCompleteTasks())
 }; 
