import axios from 'axios';
import { push } from 'connected-react-router';
import { routes } from '../containers/Router';

const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/futureX/nauaramelo'

const signIn = (token) => {
    return {
        type: 'SIGNIN',
        payload: {
            token
        }
    }
}

export const signInUser = (email, password) => async (dispatch) => {

    const signInData = {
        email,
        password
    }

    try {
        const response = await axios.post(`${baseUrl}/login`, signInData);

        const token = response.data.token;

        window.localStorage.setItem("token", token);

        dispatch(push(routes.listtrip))
    } catch (error) {
        alert('Por favor, verifique os seus dados e tente novamente.')
    }

}

