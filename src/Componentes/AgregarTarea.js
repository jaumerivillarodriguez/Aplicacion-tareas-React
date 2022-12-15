import React, {useState} from "react";
import '../Css/AgregarTarea.css';
import { v4 as uuidv4} from 'uuid';

function AgregarTarea (props) {

  const [input, setInput] = useState ('');

  const manejarCambio = e => {  //Cuando se cambia el texto
    setInput(e.target.value);
  }
  
  const manejarEnvio = e => { 
    e.preventDefault(); //Para que no se vuelva a cargar toda la aplicación cuando enviemos el formulario

    const tareaNueva = {
      id: uuidv4() ,
      texto: input,
      completada : false
    }
    props.onSubmit(tareaNueva); //cuando el formulario se envie
  }
  return(
    <form 
      className= 'tarea-formulario'
      onSubmit= {manejarEnvio}>
      <input 
      className= 'tarea-input'
      type = 'text'
      placeholder= 'Escribe una tarea'
      name = 'texto'
      onChange = {manejarCambio}
      />

      <button className= 'tarea-boton'>Agregar tarea</button>

    </form>
  );
}

export { AgregarTarea };