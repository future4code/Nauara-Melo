import React from 'react';
import axios from  'axios';
import select from 'react-select';
import styled from 'styled-components';

const BoxContainer = styled.div`
    text-align: center;
`

const Bloco = styled.div`
    display: flex; 
    flex-direction: column;
    border: solid 1px black;
    width: 20%;
    margin: 0 auto;
    margin-top: 20px;
    padding: 30px;
`

const baseURL = "http://www.boredapi.com/api/activity/";

class Filtrar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentActivity: undefined,
            typeOfActivity: 'education',
            historyActivity: []
        }
    }

    handleOnChangeType = (event) => {
        const newTypeOfActivity = event.target.value

        this.setState({ typeOfActivity: newTypeOfActivity })
        this.getActivity(newTypeOfActivity)
    }

    getActivity = async (typeofActivity) => {
        const response = await axios.get(`${baseURL}?type=${typeofActivity}`)

        this.setState({ currentActivity: response.data })

        const historyActivityCopy = [...this.state.historyActivity]

        historyActivityCopy.push(response.data)

        this.setState({
            historyActivity: historyActivityCopy.reverse()
        })
    }

    render() {
        return(
            <BoxContainer>
                <h3>Por favor, selecione o tipo de atividade que deseja realizar.</h3>
                <select onChange={this.handleOnChangeType} value={this.state.typeOfActivity}>
                <option value="education"> Education</option>
                <option value="recreational"> Recreational</option>
                <option value="social"> Social</option>
                <option value="diy"> Diy</option>
                <option value="charity"> Charity </option>
                <option value="cooking"> Cooking </option>
                <option value="relaxation"> Relaxation </option>
                <option value="music"> Music </option>
                <option value="busywork"> Busywork </option>
                </select>
                {this.state.historyActivity.map(currentActivity => {
                    return (<Bloco>
                        <p>Type of Activity: {currentActivity.type}</p>
                        <p>Activity: {currentActivity.activity}</p>
                        <p>Participants: {currentActivity.participants} </p>
                        <p> Price: {currentActivity.price} </p>
                    </Bloco>)
                })}
            </BoxContainer>
        )
    }
}

export default Filtrar