import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { routes } from "../Router"
import { Input, MenuItem } from "@material-ui/core";
import { getTrips } from "../../actions/trips";
import { applyToTrip } from "../../actions/trips";


const Form = styled.form`
  width: 100%;
  height: 100vh; 
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`

const Titulo = styled.h3`

`

var country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

const fields = [
    {
        name: "name",
        type: "text",
        label:"Nome:",
        pattern: "^[a-z-A-Z\\s]{3,}$",
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
        name: "applicationText",
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
        options: country_list,
    },
    {
        name: "trip",
        type: "select",
        label: "Viagem:",
        options: [],
        required: true,
    }
]

class FormPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {}
        }
    }

    componentDidMount() {
        if (this.props.getTrips) {
            this.props.getTrips()
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
        this.props.applyToTrip(this.state.form)
    }

    render() {
        return (
            <Form onSubmit={this.handleOnSubmit}>
                 { fields.map(input => (
                    input.type == 'select' ?
                            <div key={input.name}>
                                <TextField label="Size" id="outlined-size-normal" variant="outlined"
                                    select
                                    onChange={this.handleInputChange}
                                    name={input.name}
                                    type={input.type}
                                    label={input.label}
                                    required={input.required}
                                    value={this.state.form[input.name]}
                                >
                                    { input.name == 'trip' ? 
                                            this.props.trips.map(trip => (
                                                <MenuItem key={trip.id} value={trip.id}> { `${trip.name} - ${trip.planet}` } </MenuItem>
                                            ))
                                        :
                                            input.options.map(option => (
                                                <MenuItem key={option} value={option}> {option} </MenuItem>
                                            ))   
                                    }
                                </TextField>
                            </div>
                        :
                        
                            <div key={input.name}>
                                <TextField label="Dense" id="outlined-margin-dense" variant="outlined" fullWidth
                                    onChange={this.handleInputChange}
                                    name={input.name}
                                    type={input.type}
                                    label={input.label}
                                    inputProps={ { pattern: input.pattern} }
                                    required={input.required}
                                />
                            </div>
                ))}
                <Button type="submit"> Enviar </Button>
            </Form>
        )
    }
}


const mapStateToProps = state => ({
    trips: state.trips.trips
})

const mapDispatchToProps = dispatch => ({
    getTrips: () => dispatch(getTrips()),
    applyToTrip: (form) => { 
        const candidate = {
            "name": form.name,
            "age": form.age,
            "applicationText": form.applicationText,
            "profession": form.profession,
            "country": form.country
        }

        dispatch(applyToTrip(form.trip, candidate))
    }
     
})

export default connect(mapStateToProps, mapDispatchToProps)(FormPage)