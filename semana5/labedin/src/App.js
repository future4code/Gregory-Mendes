import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import minhaFoto from './img/foto-greg.jpg';
import logoOab from './img/logo-oab-sp.png';
import logoPeDescalco from './img/logo-pe-descalco.jpg'
import logoTribunal from './img/logo-tribunal.jpg'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={minhaFoto}
          nome="Grégory Gustavo Mendes" 
          descricao="Sou estudante de Jogos Digitais e Desenvolvimento Web Full Stack e estou em busca da
                      minha primeira oportunidade na área. Gosto de tecnologia, além de ser uma pessoa
                      extrovertida, companheira, empática e bom ouvinte."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={logoPeDescalco} 
          nome="Pé Descalço - SP" 
          descricao="Professor de forró." 
        />
        <CardGrande 
          imagem={logoOab}
          nome="OAB-SP" 
          descricao="Auxiliar de serviços internos e externos." 
        />
        
        <CardGrande 
          imagem={logoTribunal} 
          nome="Tribunal de Justiça do Estado de São Paulo" 
          descricao="Jovem aprendiz." 
        />
      </div>

      <div className="page-section-container">
        <h2>Contato</h2>
        <CardPequeno
          email="gregory.bananinha@gmail.com"
          endereco= "Rua das Bananinhas, n° 01"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
