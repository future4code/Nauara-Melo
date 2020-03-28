import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { routes } from "../Router"
import logo from '../../img/futurex.png'
import { connect } from "react-redux";
import { push } from "connected-react-router";

const Container = styled.div`
  justify-content: center;
  display: flex;
`;

const Center = styled.div`
  text-align: center;
`

class HomePage extends Component {
  render() {
    return (
        <Container>
          <Center>
            <img src={logo} width="300ch" />
            <h2>Encontre as melhores viagens espaciais!</h2>
            <Button type="button" color="primary" onClick={this.props.redirectLogin}> Login </Button>
            <Button type="button" color="primary" onClick={this.props.redirectInscrition}> Inscreva-se </Button>
          </Center>
        </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  redirectInscrition: () => dispatch(push(routes.inscrition)),
  redirectLogin: () => dispatch(push(routes.root))   
})

export default connect(null, mapDispatchToProps)(HomePage)
