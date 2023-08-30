import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';
import React from 'react';

const defaultTodo =[
  { text: 'Cortar', completed: true},
  { text: 'Pelar', completed: false},
  { text: 'Correr', completed: true},
  { text: 'picar', completed: false},
];

function App() {
  return (
    <div className="App">
          <TodoCounter completed={5} total={10}/>
          <TodoSearch/>
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
      
    </div>
  );
}

export default App;
