import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

import React from 'react';
import react from 'react';

const defaultTodo =[
  { text: 'Cortar', completed: true},
  { text: 'Pelar', completed: false},
  { text: 'Correr', completed: true},
  { text: 'picar', completed: false},
];

function App() {
  const [searchValue, setSearchValue]= react.useState('');
  console.log(searchValue);
  const [todos,setTodos]= react.useState(defaultTodo);

  const completedTodos = todos.filter(todos => todos.completed).length;
  const totalTodos = todos.length;

  return (
    <React.Fragment>
          <TodoCounter completed={completedTodos} total={totalTodos}/>
          <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
          <TodoList>
            {defaultTodo.map(
              todo =>(<TodoItem 
                key={todo.text}
                text={todo.text}
                completed={todo.completed}

              />)
              )
              }
          </TodoList> 
          <CreateTodoButton/>   
      
    </React.Fragment>
  );
}

export default App;
