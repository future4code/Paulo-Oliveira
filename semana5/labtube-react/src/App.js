import './App.css';

import videoAdd from './img/videoAdd.png'
import apps from './img/apps.png'
import notifications from './img/notifications.png'
import profile from './img/profile.png'
import search from './img/search.png'
import home from './img/home.png'
import fire from './img/fire.png'
import subscribe from './img/subscribe.png'
import library from './img/library.png'
import history from './img/history.png'
import display from './img/display.png'
import watch from './img/watch.png'
import like from './img/like.png'
import expande from './img/expande.png'
import menu from './img/menu.png'

function App() {
  const titulo = 'Título do vídeo'

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }

  return (
    <div>
      <div className="tela-inteira">
        <header>              
            <h1>Lab Tube</h1> 
            
            <div className='navbar-pesquisar'>
              <input type="text" placeholder="Pesquisar" id="campoDeBusca" />
              <button className='btn-pesquisar'><img className='icon-pesquisar' src={search} alt={search} /></button>
            </div>
            
            <div className='navbar-direita'>
              <a href='#'><img className='icons' src={videoAdd} alt={videoAdd} /></a>
              <a href='#'><img className='icons' src={apps} alt={apps} /></a>
              <a href='#'><img className='icons' src={notifications} alt={notifications} /></a>
              <a href='#'><img className='icons-big' src={profile} alt={profile} /></a>
            </div>
        </header>

        <main>
            <nav className="menu-vertical">
                <ul>
                    <li className="botoes-meunu-vertical"><img className='icons-lista' src={home} alt={home} /><a href='#'>Início</a></li>
                    <li className="botoes-meunu-vertical"><img className='icons-lista' src={fire} alt={fire} /><a href='#'>Em alta</a></li>
                    <li className="botoes-meunu-vertical"><img className='icons-lista' src={subscribe} alt={subscribe} /><a href='#'>Inscrições</a></li>
                    <hr />
                    <li className="botoes-meunu-vertical"><img className='icons-lista' src={library} alt={library} /><a href='#'>Biblioteca</a></li>
                    <li className="botoes-meunu-vertical"><img className='icons-lista' src={history} alt={history} /><a href='#'>Histórico</a></li>
                    <li className="botoes-meunu-vertical"><img className='icons-lista' src={display} alt={display} /><a href='#'>Seus vídeos</a></li>
                    <li className="botoes-meunu-vertical"><img className='icons-lista' src={watch} alt={watch} /><a href='#'>Assistir mais tarde</a></li>
                    <li className="botoes-meunu-vertical"><img className='icons-lista' src={like} alt={like} /><a href='#'>Vídeos marcad...</a></li>
                    <li className="botoes-meunu-vertical"><img className='icons-lista' src={expande} alt={expande} /><a href='#'>Mostrar mais</a></li>
                    <hr />
                </ul>
            </nav>
            
            <section className="painel-de-videos">
                <div className="box-pagina-principal media1" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=1 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media2" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=2 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media3" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=3 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media4" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=4 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media5" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=5 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media6" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=6 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media7" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=7 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media8" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=8 " alt="" />
                    <h4>{titulo}</h4>
                </div>
            </section>
        </main>
      </div>
    </div>
  );
}

export default App;
