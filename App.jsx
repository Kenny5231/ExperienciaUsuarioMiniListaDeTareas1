import React, { useState } from 'react';
import FormularioTarea from './components/FormularioTarea';
import ListaTareas from './components/ListaTareas';

const App = () => {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    if (tarea.trim() !== '') {
      setTareas([...tareas, tarea]);
    }
  };

  const eliminarTarea = (indice) => {
    const nuevasTareas = tareas.filter((_, i) => i !== indice);
    setTareas(nuevasTareas);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Lista de Tareas</h1>
      <FormularioTarea agregarTarea={agregarTarea} />
      <ListaTareas tareas={tareas} eliminarTarea={eliminarTarea} />
      <p>Total: {tareas.length} tareas</p>
    </div>
  );
};

export default App;