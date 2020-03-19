const initialState = { profileToSwipe: {} }

const profiles = (state = initialState, action) => {
  switch(action.type) {
    case 'PROFILE_TO_CHOOSE': {
      return {
        profileToSwipe: action.payload.profile
      }
    }

    default:
      return state;
  }
}

export default profiles
