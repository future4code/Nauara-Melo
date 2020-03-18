import React from 'react';
import styled from 'styled-components';


const Header = styled.header`
  height: 45px;
  color: white;
  background-color: #C0C0C0;
  text-align:center;
  font-size: 30px;
`
const Footer = styled.footer`
  color: whitesmoke;
  background-color: #C0C0C0;
  text-align:center;
  font-size: 25px;
  bottom: 0;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Card = styled.div`
  margin: 15px auto;
  width: 350px;
  height: 350px;
  border: solid black 1pt; 
  background-color: #304156;
  border-radius: 1vh;
  color: white;
`
const Main = styled.main`
  background-color: #F8F8FF;
  overflow: scroll;
`
const Titulo = styled.h1`
  font-size: 5vh;
`


function App() {
  return (
    <Container>
      <Card>
        <Header>
         f4Tasks
       </Header>
       <Main>
         <Titulo> Suas tarefas </Titulo>
          <input type="text" placeholder="O que precisa ser feito?" />
       </Main>
       <Footer>
         @nauaramelo
       </Footer>
      </Card>
    </Container>
  );
}

export default App;
