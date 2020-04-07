const initialState = {}

const login = (state = initialState, action) => {
    switch (action.type) {
        case 'SIGNIN': {
            return {
                ...state,
            }
        }
        
        default:
            return state;
    }
}

export default login;