import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

import React from 'react';
import react from 'react';

//crea un array para iniciar 
const defaultTodo =[
  { text: 'Cortar', completed: true},
  { text: 'Pelar', completed: false},
  { text: 'Correr', completed: true},
  { text: 'picar', completed: false},
];

function App() {
  //creacion de un ESTADO que viene del evento todoSearch.js onChange 
  const [searchValue, setSearchValue]= react.useState('');
  console.log(searchValue); //ocurre en todoSearch
  const [todos,setTodos]= react.useState(defaultTodo);// ESTADO para saber -todos- terminados y totales

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
    setTodos(newTodos);
  }
  const deleteTodos = (text)=> {
    const newTodos = [...todos]; // crea copia de array -todos-
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    newTodos.splice(todoIndex,1);
    setTodos(newTodos);
  }

  return (
    <React.Fragment>
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
      
    </React.Fragment>
  );
}

export default App;
