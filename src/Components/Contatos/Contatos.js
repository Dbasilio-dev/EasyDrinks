import React, { Component } from "react";
import contatoImg from "../../imgs/contact-pic.jpg";
import Botao from "../Botao/Botao";

export default class Contatos extends Component {
  render() {
    return (
      <div className="conteudo-container">
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
              <textarea className="user-message" rows="5" colums="5"></textarea>
              <div className="button-container">
                <div className="button-area">
                  <Botao value="Enviar" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
