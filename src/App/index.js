import react from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}
export default App;

    //sintaxis antes de implementar -Context-
    // loading={loading}
    // error={error} 
    // completedTodos={completedTodos}
    // totalTodos={totalTodos}
    // searchValue={searchValue}
    // setSearchValue={setSearchValue}
    // searchedTodos={searchedTodos}
    // completeTodos={completeTodos}
    // deleteTodos={deleteTodos}
