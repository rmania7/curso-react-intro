import react from 'react';
import './Todoloading.css';

function TodosLoading(){
    return(
     <div className="container">
  <div className="cargando">
    <div className="pelotas"></div>
    <div className="pelotas"></div>
    <div className="pelotas"></div>
    <span className="texto-cargando">Cargando...</span>
  </div>
</div>
    );
}

export {TodosLoading};