import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { routes } from "../Router"
import { signInUser } from "../../actions/login";

const LoginWrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();

    this.props.signIn(this.state.email, this.state.password)
  };

  render() {
    const { email, password } = this.state;

    return (
      <LoginWrapper onSubmit={this.handleOnSubmit}>
        <TextField
          onChange={this.handleFieldChange}
          name="email"
          type="email"
          label="E-mail"
          value={this.state.email}
          inputProps = { { pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" } }
        />
        <TextField
          onChange={this.handleFieldChange}
          name="password"
          type="password"
          label="Password"
          value={password}
          inputProps={ { pattern: "^.{3,}$" } }
          /* required={required.input} */
        />
        <Button type="submit">Login</Button>
      </LoginWrapper>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signIn: (email, password) => dispatch(signInUser(email, password))
});

export default connect(
  null,
  mapDispatchToProps
)(LoginPage)
