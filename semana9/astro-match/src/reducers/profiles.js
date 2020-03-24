const initialState = {}

const profiles = (state = initialState, action) => {
  switch (action.type) {
    case 'PROFILE_TO_CHOOSE': {
      return {
        ...state,
        profileToSwipe: action.payload.profile
      }
    }

    case 'MATCHES': {
      return {
        ...state,
        matches: action.payload.matchesList
      }
    }

    case 'CLEAR_MATCHES': {
      return {
        ...state,
        matches: []
      }
    }

    default:
      return state;
  }
}

export default profiles
