import react from 'react';
import './TodosError.css';

function TodosError(){
    return(
     <div className="container">
  <div className="cargando">
    <div className="pelotas"></div>
    <div className="pelotas"></div>
    <div className="pelotas"></div>
    <span className="texto-cargando">Error...</span>
  </div>
</div>
    );
}

export {TodosError};