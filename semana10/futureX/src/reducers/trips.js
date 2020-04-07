const initialState = {
    trips: [],
    tripDetailed: {}
}

const trips = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_TRIPS': {
            return {
                ...state, 
                trips: action.payload.trips
            }
        }

        case 'DETAIL_TRIP' : {
            return {
                ...state,
                tripDetailed: action.payload.trip
            }
        }

        case 'SET_TRIP' : {
            return {
                ...state,
                tripDetailed: action.payload.trip
            }
        }

        default:
            return state;

    }
}

export default trips;