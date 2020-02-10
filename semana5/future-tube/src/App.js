import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body>
      <header>
        <p>FutureTube</p>
        <input placeholder="Busca" id="input"/>
      </header>
      <div className="conteudo">

        <aside>
            <ul>
              <li> <a href="index.html"> Inicio </a> </li>
              <li> Em alta </li>
              <li> Inscrições </li>
              <li> Biblioteca </li>
              <li> Histórico </li>
            </ul>
        </aside>
        <main>
          <section>
            <article>
              <a href="FutureTube.html">
                <img src={require("./imagens/v1.png")} width="250" height="250" alt="Video 1" />
              </a>
              <p> Video 1 </p>
            </article>
            <article>
              <a href="FutureTube2.html">
                <img src={require("./imagens/v2.png")} width="250" height="250" alt="Video 2" />
              </a>
              <p> Video 2 </p>
            </article>
            <article>
              <a>
                <img src={require("./imagens/v3.png")} width="250" height="250" alt="Video 3" />
              </a>
              <p> Video 3 </p>
            </article>
            <article>
              <a>
                <img src={require("./imagens/v4.png")} width="250" height="250" alt="Video 4"/>
              </a>
              <p> Video 4 </p>
            </article>
          </section>
          <section>
            <article>
              <a>
                <img src={require("./imagens/v5.png")} width="250" height="250" alt="Video 5" />
              </a>
              <p> Video 5 </p>
            </article>
            <article>
              <a>
                <img src={require("./imagens/v6.png")} width="250" height="250" alt="Video 6" />
              </a>
              <p> Video 6 </p>
            </article>
            <article>
              <a>
                <img src={require("./imagens/v7.png")} width="250" height="250" alt="Video 7" />
              </a>
              <p> Video 7 </p>
            </article>
            <article>
              <a>
                <img src={require("./imagens/v8.png")} width="250" height="250" alt="Video 8" />
              </a>
              <p> Video 8 </p>
            </article>
          </section>
        </main>
      </div>
      <footer>
        <p> © 2019 FutureTube </p>
      </footer>
    </body>
  );
}

export default App;
