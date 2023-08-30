import logo from './platzi.webp';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
          <TodoCounter/>
          <TodoSearch/>
          <TodoList>
            <TodoItem/>  
            <TodoItem/> 
            <TodoItem/> 
          </TodoList>    
      
      <header className="App-header">


      </header>
    </div>
  );
}

function TodoItem(){
  return (
    <li>
      <span>V</span>
      <p>Llorar con la Llorona</p>
      <span>X</span>
    </li>
  );
}

export default App;
