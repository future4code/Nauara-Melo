import axios from 'axios';

export const getTasks = () => {
    return axios.get (
        "https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/:nauaramelo/todos"
    );
};

export const toggleTask = id => {
    return axios.put(
      "https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/:nauaramelo/todos/:id/toggle"
    );
};

export const createTask = text => {
    return axios.post(
      "https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/:nauaramelo/todos",
      {
        text
      }
    );
};

export const deleteTask = id => {
    return axios.delete(
        "https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/:nauaramelo/todos/:id"
    );
};

export const deleteAlltasks = id => {
    return axios.delete(
        "https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/:aluno/todos/delete-done"
    )
}; 