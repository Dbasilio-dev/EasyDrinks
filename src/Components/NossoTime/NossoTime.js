import React from "react";
import "./NossoTime.css";
import PrimeiroIntegrante from "../../imgs/pessoa1.jpg";
import SegundoIntegrante from "../../imgs/pessoa2.jpg";
import TerceiroIntegrante from "../../imgs/pessoa3.jpg";
import QuartoIntegrante from "../../imgs/pessoa4.jpg";

export default function NossoTime() {
  return (
    <div>
      <div className="container-nossotime">
        <div className="nossotime">
          <h1 className="titulo-nossotime">Nosso Time</h1>
          <div className="pessoa1 pessoas">
            <img src={PrimeiroIntegrante}></img>
            <h2>Carolina Aoki</h2>
          </div>
          <div className="pessoa2 pessoas">
            <img src={SegundoIntegrante}></img>
            <h2>Marina Lima</h2>
          </div>
          <div className="pessoa3 pessoas">
            <img src={TerceiroIntegrante}></img>
            <h2>Thiago Santos</h2>
          </div>
          <div className="pessoa4 pessoas">
            <img src={QuartoIntegrante}></img>
            <h2>Vinicius Corte</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
