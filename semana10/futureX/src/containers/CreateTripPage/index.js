import React, { Component } from 'react';
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { routes } from "../Router"
import { Input, MenuItem } from "@material-ui/core";
import { createTrip } from '../../actions/trips'

const planets = ['Mercurio', 'Vênus', 'Terra', 'Marte', 'Júpiter', 'Saturno', 'Urano', 'Netuno', 'Plutão']

const field = [
    {
        name: "name",
        type: "text",
        label: "Nome:",
        pattern: "^[a-z-A-Z\\s]{3,}$",
        required: true,
    },
    {
        name: "date",
        type: "text",
        label: "Data:",
        pattern: "[0-9]{2}\/([0][4-9]|[1][0-2])\/([2-9][0-9][0-9][0-9])",
        required: true
    },
    {
        name: "description",
        type: "text",
        label: "Descrição:",
        pattern: "^.{3,30}",
        required: true
    }, 
    {
        name: "durationInDays",
        type: "text", 
        label: "Duração da viagem:",
        pattern: "([5-9][0-9])|([1-9][1-9][0-9])|([2-9][0-9][0-9])|([1-9]\d{3}\d*)",
        required: true
    },
    {
        name: "planet",
        type: "select",
        label: "Planeta",
        options: planets,
        required: true, 
    },
]


class CreateTripPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {}
        }
    }

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            form: { ...this.state.form, [name]: value},
        });
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.createTrip(this.state.form)
    }

    render() {
        return (
            <form onSubmit={this.handleOnSubmit}>
                 { field.map(input => (
                    input.type == 'select' ?
                        <div key={input.name}>
                            <TextField
                                select
                                onChange={this.handleInputChange}
                                name={input.name}
                                type={input.type}
                                label={input.label}
                                required={input.required}
                                value={this.state.form[input.name]}
                            >
                                {input.options.map(option => (
                                    <MenuItem key={option} value={option} > {option} </MenuItem>
                                ))}
                            </TextField>
                        </div>
                    :
                        <div key={input.name}>
                            <TextField 
                                onChange={this.handleInputChange}
                                name={input.name}
                                type={input.type}
                                label={input.label}
                                inputProps={ { pattern: input.pattern } }
                                required={input.required}
                            />
                        </div>
                ))}
                <Button type="submit"> Enviar </Button>
            </form>
        )
    }
}

 const mapStateToProps = state => ({
     trips: state.trips.trips
 })

 const mapDispatchToProps = dispatch => ({
     createTrip: (trip) => dispatch(createTrip(trip))
 })
 

export default connect(mapStateToProps, mapDispatchToProps) (CreateTripPage);