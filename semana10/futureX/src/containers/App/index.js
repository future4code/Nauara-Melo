import React from "react";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import theme from "../../style/theme";
import Router from "../Router";
import { createBrowserHistory } from "history";
import { createStore, applyMiddleware, compose } from "redux";
import { generateReducers } from "../../reducers";
import { routerMiddleware } from "connected-react-router";
import styled from 'styled-components';
import logo from '../../img/futurex.png'
import { push } from "connected-react-router";

const Container = styled.div`
  display: grid;
  grid-template-areas:
    "header"
    "main "
    "footer";
  grid-template-columns: auto;
  overflow: hidden;
  grid-template-rows: auto 88vh auto;
`

const Main = styled.main`
  grid-area: main;
  background-color: #F8F8FF;
`

const Header = styled.header`
  display: grid;
  grid-template-areas: "logo menu";
  height: 45px;
  color: white;
  background-color: #C0C0C0;
`
const Footer = styled.footer`
  color: whitesmoke;
  background-color: #C0C0C0;
  text-align:center;
  font-size: 25px;
  grid-area: footer;
  bottom: 0;
`

const UlFormatada = styled.ul`
  list-style: none;
  text-align: right;
`

const Menu = styled.nav`
  grid-area: menu;
  margin: 0;
`

const LiStyled = styled.li`
  cursor: pointer;
  display: inline-block;
  margin-right: 2ch;
`

const Logo = styled.div`
    text-align: left;
    grid-area: logo;
`

export const history = createBrowserHistory();

const middlewares = [
  applyMiddleware(routerMiddleware(history), thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
];

const store = createStore(generateReducers(history), compose(...middlewares));

export const App = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Header>
          <Logo>
            <img src={logo} width='40ch'/>
          </Logo>
          <Menu>
            <UlFormatada>
              <LiStyled onClick={ () => store.dispatch(push('/home')) }>Home</LiStyled>
              <LiStyled onClick={ () => store.dispatch(push('/list-trip')) }>Listar Viagens</LiStyled>
              <LiStyled onClick={ () => store.dispatch(push('/create-trip')) }>Cadastrar Viagens</LiStyled>
            </UlFormatada>
          </Menu>
        </Header>
        <Main>
          <Router history={history} />
        </Main>
        <Footer>
          @nauaramelo
        </Footer>
      </Container>

    </MuiThemeProvider>
  </Provider>
);

export default App;
