import React, { useState, useEffect } from "react";

export default function Botoes() {
  const [startPoint, setStartPoint] = useState("");
  const [data, setData] = useState([]);

  async function getData() {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=100&${startPoint}`
    );
    const datajson = await response.json();

    await setData(datajson.results);
  }

  useEffect(() => {
    getData();
  }, [startPoint]);

  return (
    <div>
      <ul>
        {data.map((pokemon, index) => {
          return <li key={index}>{pokemon.name}</li>;
        })}
      </ul>
      <button onClick={() => setStartPoint("offset=151")}>Geração 2</button>
      <button onClick={() => setStartPoint("offset=251")}>Geração 3</button>
    </div>
  );
}
