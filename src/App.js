import react from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

//crea un array para iniciar 
  // const defaultTodos =[
  //   { text: 'Cortar', completed: true},
  //   { text: 'Pelar', completed: false},
  //   { text: 'Correr', completed: true},
  //   { text: 'picar', completed: false},
  // ];
  // const stringifyTodos = JSON.stringify(defaultTodos);
  
  // localStorage.setItem(itenName, stringifyTodos);

function useLocalStorage(itenName,initialValue){
    //localStorage
    // se crea un nuevo Estado
    const localStorageItem = localStorage.getItem(itenName);
    
    let parsedItem;
    
    if(!localStorageItem){ // si no tiene datos genero un array vacio
      localStorage.setItem(itenName, JSON.stringify(initialValue));
      parsedItem=initialValue;
    } else {
      parsedItem = JSON.parse(localStorageItem);
    }

    const [item, setItem]= react.useState(parsedItem);

    const saveItem = (newItem) =>{
      localStorage.setItem(itenName, JSON.stringify(newItem));
      setItem(newItem);
    }
    // fin localStorage
    return [item, saveItem];
}

function App() {


  //creacion de un ESTADO que viene del evento todoSearch.js onChange 
  const [searchValue, setSearchValue]= react.useState(''); 
  console.log(searchValue); //ocurre en todoSearch
  const [todos,saveTodos]= useLocalStorage('TODOS_V1',[]);// ESTADO para saber -todos- terminados y totales. "defaultTodos" cambia si quieres el array por defaul-

  const completedTodos = todos.filter(todos => todos.completed).length; //-todos- terminados
  const totalTodos = todos.length;//total -todos-
  if (completedTodos == totalTodos) console.log("felicidades todo COMPLETO");

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

  return (
    <react.Fragment>
          <TodoCounter completed={completedTodos} total={totalTodos}/>
          <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
          <TodoList>
            {searchedTodos.map(
              todo =>(<TodoItem 
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodos(todo.text)}
                onDelete={() => deleteTodos(todo.text)}
              />)
              )
              }
          </TodoList> 
          <CreateTodoButton/>   
      
    </react.Fragment>
  );
}

export default App;
