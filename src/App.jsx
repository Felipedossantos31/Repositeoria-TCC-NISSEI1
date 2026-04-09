import { useState } from 'react'
import logoNikkei from './assets/logotipo-1.png'
import ex1 from './assets/ex1.webp'
import ex2 from './assets/ex2.webp'
import ex3 from './assets/ex3.webp'
import hidraulica from './assets/hidraulica.webp'
import iluminacao from './assets/iluminação.webp'
import acabamento from './assets/acabamentos.webp'

import './App.css'

export default function App() {
  return (
    <main className="container-principal">
      <header className="header-nissei">
        <div id="logo">
          <img src={logoNikkei} alt="Logo Nikkei" />
        </div>
        <nav id="menu">
          <button>home</button>
          <button>produtos</button>
          <button>quem somos</button>
          <button>contatos</button>
        </nav>
      </header>
      <section id="presentation" className="hero-full-bg">
        <div className="hero-overlay">
          <div className="hero-text-container">
            <h1>
              <span className="destaque-red">Reformar,</span>
              <br /> construir e curtir.
            </h1>
          </div>
        </div>
      </section>
      <section className="service-section">
        <div className="service-header">
          <p className="subtitle-red">Tudo num só lugar!</p>
          <h2>O atendimento personalizado é o seu melhor aliado na hora da compra!</h2>
        </div>
        <div id="service-options">
          <div className="service-coluna">
            <div className="icon-circle">
              <img src="" alt="" />
            </div>
            <p>Atualização</p>
          </div>
          <div className="service-coluna">
             <div className="icon-circle">
              <img src="" alt="" />
             </div>
             <p>Pintura & Proteção</p>
          </div>
          <div className="service-coluna">
             <div className="icon-circle">
              <img src="" alt="" />
             </div>
             <p>Ferramentas</p>
          </div>
          <div className="service-coluna">
             <div className="icon-circle">
              <img src="" alt="" />
             </div>
             <p>Ferragens</p>
          </div>
        </div>
      </section>
      <div id="slider" className="galeria-fotos">
        <img src={ex1} alt="Exemplo 1" />
        <img src={ex2} alt="Exemplo 2" />
        <img src={ex3} alt="Exemplo 3" />
      </div>
      <div className='h1s'>
        <h1 id='h1-1'>Para todas as fases! </h1>
          <h1 id='h1-2'>Do alicerce ao telhado.</h1>
            <h1 id='h1-3'>Você encontra tudo aqui!</h1>
          
      </div>
        
          
      <div id='imgs'>  
        <img  src={hidraulica} alt="hidraulica" className='img-hidraulica'/>

          <img src={acabamento} alt="acabamento" className='img-acabamento'/>

          <img src={iluminacao} alt="iluminacao" className='img-iluminacao' />
      </div>
          <h1 className='h1-hidraulica'>Basico/Elétrica/Hidráulica</h1>
          <h1 className='h1-acabamento'>Acabamentos</h1>
          <h1 className='h1-iluminacao'>Iluminação & Decoração</h1>


      <footer className="footer-nissei">
        <div id="footer-content">
           <img src={logoNikkei} alt="Logo" className="footer-logo" />
           <div className="footer-info">
              <p>(19) 3261-1271</p>
              <p>Campinas - SP</p>
           </div>
        </div>
        <p className="copyright">© 2026 Nikkei. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}