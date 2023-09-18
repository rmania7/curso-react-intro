import react from 'react';
import {useLocalStorage} from './useLocalStorage'

const TodoContext = react.createContext();

function TodoProvider({ children }){
        //creacion de un ESTADO que viene del evento todoSearch.js onChange 
        const [searchValue, setSearchValue]= react.useState(''); 
    
        const [openModal, setOpenModal]= react.useState(false); 

    console.log(searchValue); //ocurre en todoSearch
    const {item: todos, // [] a {} y se hace un AS : para seguir usando el mismo nombre
        saveItem: saveTodos,
        loading,
        error,
    }= useLocalStorage('TODOS_V1',[]);// ESTADO para saber -todos- terminados y totales. "defaultTodos" cambia si quieres el array por defaul-

    const completedTodos = todos.filter(todos => todos.completed).length; //-todos- terminados
    const totalTodos = todos.length;//total -todos-


    //hace la busqueda de -todos- para filtrar los por lo escrito en el input
    const searchedTodos =  todos.filter(
        (todo) => {
        const todoText=todo.text.toLocaleLowerCase();
        const searchText = searchValue.toLocaleLowerCase(); 
        return todoText.includes(searchText);}
        );


    
    const completeTodos = (text)=> {
        const newTodos = [...todos]; // crea copia de array -todos-
        const todoIndex = newTodos.findIndex((todo) => todo.text == text);
        newTodos[todoIndex].completed= true;
        saveTodos(newTodos);
    }
    const deleteTodos = (text)=> {
        const newTodos = [...todos]; // crea copia de array -todos-
        const todoIndex = newTodos.findIndex((todo) => todo.text == text);
        newTodos.splice(todoIndex,1);
        saveTodos(newTodos);

    }
    const addTodo = (text)=>{
      const newTodos = [...todos]; // crea copia de array -todos-
      newTodos.push({text,completed: false});
      saveTodos(newTodos);

    }

    return (
        <TodoContext.Provider value={{
          loading,
          error,
          completedTodos,
          totalTodos,
          searchValue,
          setSearchValue,
          searchedTodos,
          completeTodos,
          deleteTodos,
          openModal,
          setOpenModal,
          addTodo,
        }}>
          {children}
        </TodoContext.Provider>
      );
    }
    
    export { TodoContext, TodoProvider };