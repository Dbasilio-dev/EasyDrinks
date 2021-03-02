import logo from "./logo.svg";
import "./App.css";
import Teste from "./Teste";
import contatoImg from "./imgs/contact-pic.jpg";

function App() {
  return (
    <div className="contato">
      <div className="header">
        <nav className="navPrincipal">
          <a className="headerItem">Drinks</a>
          <a className="headerItem">Sobre Nós</a>
          <a className="headerLogo">Bons Drinks</a>
          <a className="headerItem">Nosso Time</a>
          <a className="headerItem">Contato</a>
        </nav>
      </div>
      <div className="conteudo">
        <h1 className="contatoTitulo">Contato</h1>
        <img src={contatoImg} className="contatoImg"></img>
        <form className="contatoForm">
          <div className="inputWrapper">
            <label className="inputLabel">Nome:</label>
            <input type="text" className="inputText"></input>
          </div>
          <div className="inputWrapper">
            <label className="inputLabel">Email:</label>
            <input type="text" className="inputText"></input>
          </div>
          <div className="inputWrapper">
            <label className="inputLabel">Mensagem:</label>
            <textarea rows="5" colums="5">
              sss
            </textarea>
          </div>
        </form>
      </div>
      <div className="footer">
        <p className="copyFooter">Resilia 2020 - Alguns direitos reservados</p>
      </div>
    </div>
  );
}

export default App;
