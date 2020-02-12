import React from 'react';
import './App.css';
import PageSection from './components/PageSection/PageSection';
import BigCard from './components/BigCard/BigCard';
import SmallCard from './components/SmallCard/SmallCard';
import ImageButton from './components/ImageButton/ImageButton';

function App() {
  return (
    <div className="App">
      <PageSection>
        <h3> Dados Pessoais </h3>
        <BigCard titulo="Nauara Melo" imagem={require('./image/profile.png')} texto="Oi, eu sou a Nauara Melo, sou estudante do curso Web Full Stack na Future4, adoro assistir as aulas e fazer os projetos."/>
        <SmallCard label="Email:" imagem={require('./image/emailicone.png')} texto="nauaramelo@gmail.com" />
        <SmallCard label="Endereço:" imagem={require('./image/home.png')} texto="João Pessoa-PB"/>
        <ImageButton texto=" Ver Mais" imagem={require('./image/botao1.png')} />
      </PageSection>
      <PageSection>
        <h3> Experiências Profissionais </h3>
        <BigCard titulo="Future4" imagem={require('./image/future4.png')} texto="Formando desenvolvedores para o futuro!"/>
        <BigCard titulo="NuBank" imagem={require('./image/nu.png')} texto="Reinventando a sua vida financeira! "/>
      </PageSection>
      <PageSection>
        <h3> Formação Acadêmica </h3>
        <BigCard titulo="Administração" imagem={require('./image/uninassau.png')} texto="Faculdade Mauricio de Nassau"/>
        <BigCard titulo="Relações Públicas" imagem={require('./image/ufpb.png')} texto="Universidade Federal da Paraíba"/>
        <ImageButton texto=" Ver Mais" imagem={require('./image/botao1.png')} />
      </PageSection>
      <PageSection>
        <h3> Minhas Redes Sociais </h3>
        <ImageButton texto=" Linkedin" imagem={require('./image/in.png')} />
      </PageSection>
    </div>
  );
}

export default App;