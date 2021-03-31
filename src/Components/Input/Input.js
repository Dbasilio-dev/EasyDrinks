import React from "react";

export default function Input({ ...props }) {
  const [entrada, setEntrada] = React.useState();

  const evento = (e) => {
    setEntrada(e.target.value);
    console.log(entrada);
  };
  return (
    <div>
      <input id={props.id} type={props.type} onChange={evento}></input>
      <label htmlFor={props.htmlFor} name={props.name}></label>
    </div>
  );
}
