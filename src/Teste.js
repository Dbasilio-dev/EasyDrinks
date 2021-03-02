import React, { Component } from "react";

export default class Teste extends Component {
  render() {
    const luana = {
      cliente: "Luana",
      idade: 27,
      compras: [
        { nome: "Notebook", preco: "2500" },
        { nome: "Geladeira", preco: "3000" },
        { nome: "Smartphone", preco: "1500" },
      ],
      ativa: true,
    };

    const mario = {
      cliente: "Mario",
      idade: 31,
      compras: [
        { nome: "Notebook", preco: "2500" },
        { nome: "Geladeira", preco: "3000" },
        { nome: "Smartphone", preco: "1500" },
        { nome: "Guitarra", preco: "3500" },
      ],
      ativa: false,
    };

    let user = mario;
    function somaPreco(user) {
      let userCompras = user.compras;
      let total = userCompras
        .map((item) => parseInt(item.preco))
        .reduce((a, b) => a + b);
      return total;
    }

    let comprasTotal = somaPreco(user);

    return (
      <div>
        <p>{user.cliente}</p>
        <p>{user.idade}</p>
        <p style={{ color: comprasTotal >= 10000 ? "red" : "green" }}>
          {" "}
          {comprasTotal}
        </p>
        <p>{comprasTotal >= 10500 ? "Você estourou o cartão!" : null}</p>
      </div>
    );
  }
}
