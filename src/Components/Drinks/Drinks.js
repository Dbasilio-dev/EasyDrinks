import React from "react";
import "./Drinks.css";
import Botao from "../Botao/Botao";

export default function Drinks() {
  return (
    <div>
      <div className="container-drinks">
        <div className="drinks-area">
          <h2 className="titulo-drinks">Drink do Dia</h2>
          <Botao value="Gerar Drink" className="gerador-drinks"></Botao>
        </div>
      </div>
    </div>
  );
}
