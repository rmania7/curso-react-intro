import react from 'react';
import './CreateTodoButton.css';
//import { TodoContext } from '../TodoContext';
function CreateTodoButton({setOpenModal}){
  //const  {openModal,setOpenModal}=react.useContext(TodoContext);
    return (
      <button className="CreateTodoButton" onClick= {
        (event) => {
          console.log('diste click');
          console.log(event);
          console.log(event.target);
          setOpenModal(state => !state);
        }
      }>+</button>
    );
  }

  export {CreateTodoButton}