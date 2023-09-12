import react from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';

//crea un array para iniciar 
  // const defaultTodos =[
  //   { text: 'Cortar', completed: true},
  //   { text: 'Pelar', completed: false},
  //   { text: 'Correr', completed: true},
  //   { text: 'picar', completed: false},
  // ];
  // const stringifyTodos = JSON.stringify(defaultTodos);
  
  // localStorage.setItem(itenName, stringifyTodos);



function App() {


  //creacion de un ESTADO que viene del evento todoSearch.js onChange 
  const [searchValue, setSearchValue]= react.useState(''); 
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
//interfaz grafica
  return (
    <AppUI
    loading={loading}
    error={error} 
    completedTodos={completedTodos}
    totalTodos={totalTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodos={completeTodos}
    deleteTodos={deleteTodos}
    />
  );
}

export default App;
