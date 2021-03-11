import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardInteresses from './components/CardInteresses/CardInteresses';

import profilePhoto from './img/profile.png'
import labenuLogo from './img/labenu.png'
import unicariocaLogo from './img/unicarioca.png'
import CardPequeno from './components/CardPequeno/CardPequeno';
import emailIcon from './img/email.png'
import addressIcon from './img/address.png'
import googleLogo from './img/google.png'
import githubLogo from './img/github.png'
import tedLogo from './img/ted.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={profilePhoto} 
          nome="Paulo Oliveira"
          descricao="Oi, eu sou o Paulo Oliveira, estudante de desenvolvimento Web Fullstack na Labenu e amo codar!"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className='page-section-container'>
        <CardPequeno 
        imagem={emailIcon}
        titulo='Email:'
        texto='devpaulo@labenu.com.br'
        />

        <CardPequeno 
        imagem={addressIcon}
        titulo='Endereço:'
        texto='Rua Labenu nº 10'
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais e Pessoais</h2>
        <CardGrande 
          imagem={labenuLogo}
          nome="Estudante da Labenu" 
          descricao="Atualmente estudo no curso de formação de desenvolvimento web fullstack da Labenu." 
        />
        
        <CardGrande 
          imagem={unicariocaLogo}
          nome="UNICARIOCA" 
          descricao="Me formei pela Universidade Carioca do Rio de Janeiro, no curso de Comunicação Social voltado pra área de Publicidade e Propaganda." 
        />
      </div>

      <div className='page-section-container '>
        <h2>Interesses</h2>
        <div className='interestscard-container'>
          <div>
          <CardInteresses
            imagem={googleLogo}
            titulo='Google'
            texto='20.798.381 seguidores'
          />

          <CardInteresses
            imagem={githubLogo}
            titulo='GitHub'
            texto='1.818.918 seguidores'
          />
          </div>

          <div>
          <CardInteresses
            imagem={labenuLogo}
            titulo='Labenu'
            texto='2.109 seguidores'
          />

          <CardInteresses
            imagem={tedLogo}
            titulo='TED Conferences'
            texto='19.857.153 seguidores'
          />
          </div>
        </div>
        
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
