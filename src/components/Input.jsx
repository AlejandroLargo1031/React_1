import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Input() {
  const [mensaje, setMensaje] = useState("");

  const [contador, setContador] = useState(0);

  const handleClick = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <h1>Cliker</h1>
      <button onClick={handleClick}>Click</button>
      <p>{contador}</p>
      <h3>Ingrese un Mnsaje</h3>
      <input
        type="text"
        value={mensaje}
        placeholder="Escribe un mensaje"
        onChange={(evento) => [setMensaje(evento.target.value)]}
      />
      <p>{mensaje}</p>
      <h1>Retornar a home</h1>
      <li>
        <Link to="/">Home</Link>
      </li>
    </div>
  );
}
