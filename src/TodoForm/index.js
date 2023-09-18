import react from "react";
import './TodoForm.css';
import { TodoContext } from '../TodoContext';
function TodoForm(){
    const {
        addTodo,
        setOpenModal,
    } =react.useContext(TodoContext);
    const onSubmit=(event)=>{
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false);
        //console.clear(  );
    };
    const onCancel=()=>{
        setOpenModal(false);
    };
    const [newTodoValue,setNewTodoValue] = react.useState('');

    const onChange=(event)=>{
        setNewTodoValue(event.target.value);
        console.log(newTodoValue);
    };

    return(
        <form onSubmit={onSubmit} >
            <label>Escribe tu nuevo TODO</label>
            <textarea placeholder="Agrega alguna actividad"
            value={newTodoValue}
            onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button onClick={onCancel}
                type="button"
                className="TodoForm-button
                TodoForm-button--cancel"
                >Cancelar</button>
                <button type="submit"
                className="TodoForm-button
                TodoForm-button--add"
                >Agregar</button>
            </div>

        </form>

    );
}

export { TodoForm };