import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { routes } from "../Router"
import { Input } from "@material-ui/core";


const recordForm = [
    {
        name: "username",
        type: "text",
        label:"Nome:",
        pattern: "^[a-z-A-Z]{3,}",
        required: true,
    },
    {
        name: "age",
        type: "number",
        label: "Idade:",
        pattern: "^([1][8-9]|[2-5][0-9])$",
        required: true,
    },
    {
        name: "aplicationtext",
        type: "text",
        label: "Porque sou um bom candidato(a)?:",
        pattern: "^.{0,30}$",
        required: true,
    },
    {
        name: "profession",
        type: "text",
        label: "Profissão:",
        pattern: "^[a-z-A-Z]{10,}$",
        required: true,
    },
    {
        name: "country",
        type: "select",
        label: "País:",
        required: true,
        options: [],
        pattern: null
    },
    {
        name: "trip",
        type: "select",
        label: "Viagem:",
        options: [],
        required: true,
        pattern: null
    }
]

class FormPage extends Component {
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
        //fazer dispatch da action
    }

    render() {
        return (
            <form onSubmit={this.handleOnSubmit}>
                 {recordForm.map(input => (
                    <div key={input.name}>
                        <TextField
                            onChange={this.handleInputChange}
                            name={input.name}
                            type={input.type}
                            label={input.label}
                            inputProps={ { pattern: input.pattern} }
                            required={input.required}
                        />
                    </div>
                ))}
                <Button type="submit">teste</Button>
            </form>
        )
    }
}

export default FormPage;