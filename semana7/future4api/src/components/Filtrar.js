import React from 'react';
import axios from  'axios';
import select from 'react-select';

const baseURL = "http://www.boredapi.com/api/activity/";

class Filtrar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentActivity: undefined,
            typeOfActivity: 'education'
        }
    }

    handleOnChangeType = (event) => {
        const NewTypeOfActivity = event.target.value

        this.setState({typeOfActivity: NewTypeOfActivity})
    }

    getActivity = async () => {
        const response = await axios.get(`http://www.boredapi.com/api/activity?type=${this.state.typeofActivity}`)

        this.setState({currentActivity: response.data})
    }

    render() {
        return(
            <div>
                <select onChange={this.handleOnChangeType} value={this.state.typeOfActivity}>
                <option value="education"> Education</option>
                <option value="recreational"> Recreational</option>
                <option value="social"> Social</option>
                <option value="diy"> Diy</option>
                <option value="charity"> Charity</option>
                <option value="cooking"> Cooking</option>
                <option value="relaxation"> Relaxation</option>
                <option value="music"> Music</option>
                <option value="busywork"> Busywork</option>
                </select>
                {this.state.currentActivity &&
                    <div>
                        <p>Tipo de Atividade: {this.state.currentActivity.type}</p>
                        <p>Atividade: {this.state.currentActivity.activity}</p>
                        <p>Participantes: {this.state.currentActivity.participants} </p>
                    </div>
                }
            </div>
        )
    }
}

export default Filtrar