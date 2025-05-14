import React, { useState } from 'react';

const FormularioTarea = ({ agregarTarea }) => {
  const [input, setInput] = useState('');

  const manejarCambio = (e) => setInput(e.target.value);

  const manejarEnvio = (e) => {
    e.preventDefault();
    agregarTarea(input);
    setInput('');
  };

  return (
    <form onSubmit={manejarEnvio}>
      <input
        type="text"
        placeholder="Escribe una tarea..."
        value={input}
        onChange={manejarCambio}
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default FormularioTarea;