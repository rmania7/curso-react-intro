import react from 'react';
import './TodosEmpty.css';

function TodosEmpty(){
    return(
        <li className="TodoItemEmpty">
        <p className="TodoItemEmpty-p">Crea tu primer TODO</p>
      </li>
    );
}

export {TodosEmpty};