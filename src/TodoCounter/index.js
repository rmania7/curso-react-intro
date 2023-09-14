import react from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';
function TodoCounter({ total, completed}){
  const  {completedTodos,totalTodos}=react.useContext(TodoContext);
    return(
      <h1 className="TodoCounter">Completados <span>{completedTodos}</span>  de <span>{totalTodos}</span> ToDos</h1>
    );
  }

  export {TodoCounter};