import logo from "./logo.svg";
import "./App.css";
import Contatos from "./Components/Contatos/Contatos";
import SobreNos from "./Components/SobreNos/SobreNos";
import Home from "./Components/Home/Home";
import NossoTime from "./Components/NossoTime/NossoTime";
import Drinks from "./Components/Drinks/Drinks";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="contato">
        <div className="header">
          <nav className="navPrincipal">
            <Link to="/Drinks" className="headerItem">
              Drinks
            </Link>
            <Link to="/SobreNos" className="headerItem">
              Sobre Nós
            </Link>
            <Link to="/" className="headerLogo">
              Bons Drinks
            </Link>
            <Link to="/NossoTime" className="headerItem">
              Nosso Time
            </Link>
            <Link to="/Contatos" className="headerItem">
              Contato
            </Link>
          </nav>
        </div>
      </div>

      <Switch>
        <Route path="/SobreNos">
          <SobreNos></SobreNos>
        </Route>
        <Route path="/Contatos">
          <Contatos />
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/NossoTime">
          <NossoTime></NossoTime>
        </Route>
        <Route path="/Drinks">
          <Drinks></Drinks>
        </Route>
      </Switch>
      <div className="footer">
        <p className="copyFooter">Resilia 2020 - Alguns direitos reservados</p>
      </div>
    </Router>
  );
}

export default App;
