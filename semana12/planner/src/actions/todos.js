import axios from 'axios';

const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/generic/planner-sagan-nauaramelo'

export const getTasks = (tasks) => {
    return {
        type: 'GET_TASKS',
        payload: {
            tasks
        }
    } 
}

export const listTasks = () => async (dispatch) => {
    try {
        const response = await axios.get(`${baseUrl}`)

        const tasks = response.data

        dispatch(getTasks(tasks))

    } catch (error) {
        console.log(error)
    }
}

export const createTask = (task) => async (dispatch) => {

    try {
        const response = await axios.post(`${baseUrl}`, task)

        dispatch(listTasks())

    } catch (error) {
        console.log(error)
    }
}