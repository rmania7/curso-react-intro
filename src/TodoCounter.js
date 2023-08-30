import './TodoCounter.css';
function TodoCounter({ total, completed}){
    return(
      <h1>Completados {completed}  de {total} ToDos</h1>
    );
  }

  export {TodoCounter};