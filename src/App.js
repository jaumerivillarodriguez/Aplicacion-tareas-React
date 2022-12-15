import './App.css';
import { Logo } from './Componentes/Logo';
import { ListaDeTareas } from './Componentes/ListaDeTareas';

function App() {
  return (
    <div className="aplicacion-tareas">
      <Logo />
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <ListaDeTareas />
      </div>
    </div>

  );
}

export default App;
