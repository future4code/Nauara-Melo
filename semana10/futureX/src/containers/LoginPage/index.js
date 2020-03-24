import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { routes } from "../Router"

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
    // Normalmente um formulário troca de página, a linha abaixo
    // previne essa mudança
    event.preventDefault();
    // seria o momento, por exemplo, de fazer o dipatch da action

    this.props.goToSwipeScreen()
  };

  render() {
    const { email, password } = this.state;
    const { goToSwipeScreen } = this.props;

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
          inputProps={ { pattern: "^[a-z]{3,}$" } }
          /* required={required.input} */
        />
        <Button type="submit">Login</Button>
      </LoginWrapper>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  goToSwipeScreen: () => dispatch(push(routes.inscrition)),
});

export default connect(
  null,
  mapDispatchToProps
)(LoginPage)
