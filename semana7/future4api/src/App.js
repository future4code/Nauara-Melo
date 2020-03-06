import React from 'react';
import Filtrar from './components/Filtrar';
import styled from 'styled-components';

const DivForHeader = styled.div`
  background-color: #323b3f;
  color: whitesmoke;
  font-size: 20px;
  display: flex;
  text-align: center;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
`

const DivForFooter = styled.div`
  background-color: #fe7e02;
  color: whitesmoke;
  font-size: 15px;
  display: flex;
  text-align: center;
  justify-content: center;
  justify-items: center;
  margin: 0 ;  
  line-height: 20px;
  margin-top: 20px;
  min-height: 5%;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-top: 10px;
  padding-bottom: 10px;
  -webkit-box-pack: end;
`

export default function App() {
  return (
    <div>
      <DivForHeader> 
        <header>
          <p>LET'S PASS THE TIME!</p>
        </header>
      </DivForHeader>
        <Filtrar />
        <DivForFooter> 
          <span> Future4API </span>
        </DivForFooter>
    </div>
  )
}

