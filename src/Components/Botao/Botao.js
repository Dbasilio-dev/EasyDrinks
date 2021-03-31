import React from "react";
import "./Botao.css";

export default function Botao(props) {
  return (
    <div>
      <button className="custom-button">{props.value}</button>
    </div>
  );
}
