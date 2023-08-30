import './TodoCounter.css';
function TodoCounter({ total, completed}){
    return(
      <h1 className="TodoCounter">Completados <span>{completed}</span>  de <span>{total}</span> ToDos</h1>
    );
  }

  export {TodoCounter};