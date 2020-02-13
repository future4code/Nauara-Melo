import React from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './Components/Post/Post';

function App() {
  return (
    <div className="App">
        <Post titulo="nauaramelo" imagem={require('./image/sunset.png')}/>
        <Post titulo="future4.br" imagem={require('./image/future4.png')} />
        <Post titulo="botafogopb" imagem={require('./image/belo.png')}/>
    </div>
  );
}

export default App;
