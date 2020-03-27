import axios from 'axios';
import { push } from 'connected-react-router';
import { routes } from '../containers/Router';

const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/futureX/nauaramelo'
const baseUrlTrips = `${baseUrl}/trips`

const listTrips = (trips) => {
    return {
        type: 'GET_TRIPS',
        payload: {
            trips
        }
    }
};

const createCandidate = () => {
	return {
        type: 'CREATE_CANDIDATE',
	};
}; 

const delTrip = () => {
    return {
        type: 'DELETE_TRIP'
    }
}

const detailTrip = (trip) => {
    return {
        type: 'DETAIL_TRIP',
        payload: {
            trip
        }
    }
}

export const setTrip = (trip) => {
    return {
        type: 'SET_TRIP',
        payload: {
            trip
        }
    }
}

export const getTrips = () => async (dispatch) =>  {
    try {
        const response = await axios.get(`${baseUrlTrips}`)

        const trips = response.data.trips

        dispatch(listTrips(trips))

    } catch (error) {
        console.log(error)
        alert('Por favor, tente novamente.')
    }
    
}

export const applyToTrip = (id, candidate) => async (dispatch) => {
    try {
        const response = await axios.post(
            `${baseUrlTrips}/${id}/apply`,
            candidate
        )

        dispatch(push(routes.inscrition))

    } catch (error) {
        alert('Por favor, tente novamente.')
    }
}

export const createTrip = (trip) => async (dispatch) => {
    const token = window.localStorage.getItem('token')
    try {
        const response = await axios.post(
            `${baseUrlTrips}`,
            trip,
            { headers: {
                'auth': token
            }}
        )
        
        dispatch(push(routes.listtrip))
    } catch (error) {
        alert('Por favor, tente novamente.')
    }
}

export const deleteTrip = (id) => async (dispatch) => {
    try {
        const response = await axios.delete(
            `${baseUrlTrips}/${id}`
        )

        dispatch(getTrips())

    } catch (error) {
        alert('Por favor, tente novamente.')
    }
}

export const getTripDetail = (id) => async (dispatch) => {
    const token = window.localStorage.getItem('token')

    try {
        const response = await axios.get(
            `${baseUrl}/trip/${id}`,
            { headers: {
                'auth': token
            }}
        )

        dispatch(setTrip(response.data.trip))

    } catch (error) {
        alert('Por favor, tente novamente.')
    }

}

export const decideCandidate = (idTrip, idCandidate) => async (dispatch) => {
    const token = window.localStorage.getItem('token')

    try {
        const response = await axios.put(
            `${baseUrl}/trips/${idTrip}/candidates/${idCandidate}/decide`,
            { "approve": true },
            { headers: {
                'auth': token
            }}
        )

        dispatch(getTripDetail(idTrip))

    } catch(error) {
        alert('Por favor, tente novamente.')
    }
}