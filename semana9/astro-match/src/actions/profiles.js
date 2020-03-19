import axios from 'axios'

const clearMatches = () => {
	return {
		type: 'CLEAR_MATCHES'
	};
};

const matches = (data) => {
	return {
		type: 'MATCHES',
		payload: {
			data
		}
	}
}

const chooseAPerson = () => ({
	type: "CHOOSE_A_PERSON"
})

const profileToChoose = (profile) => {
	return {
		type: 'PROFILE_TO_CHOOSE',
		payload: {
			profile
		}
	}
}


export const clearSwipes = () => async (dispatch) => {
	await axios.put(
		'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/nauaramelo/clear'
	)

	dispatch(clearMatches())
}

export const matchesList = () => async (dispatch) => {
	const response = await axios.get(
		'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/nauaramelo/matches'
	)

	dispatch(matches(response.data.matches))
}

export const choosePerson = () => async (dispatch) => {
	await axios.post(
		'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/nauaramelo/choose-person'
	)

	dispatch(chooseAPerson)
}

export const getProfileToChoose = () => async (dispatch) => {
	const response = await axios.get(
		'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/nauaramelo/person'
	)

	dispatch(profileToChoose(response.data.profile))
}