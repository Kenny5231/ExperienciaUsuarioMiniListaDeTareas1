import React from 'react';

const ListaTareas = ({ tareas, eliminarTarea }) => {
  return (
    <ul>
      {tareas.map((tarea, index) => (
        <li key={index}>
          {tarea} <button onClick={() => eliminarTarea(index)}>❌</button>
        </li>
      ))}
    </ul>
  );
};

export default ListaTareas;