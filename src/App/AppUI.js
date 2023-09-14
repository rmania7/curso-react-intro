import react from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { TodosEmpty } from '../TodosEmpty';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI({
    error,
    loading,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodos,
    deleteTodos
}){
    return (
        <react.Fragment>
              <TodoCounter completed={completedTodos} total={totalTodos}/>
              <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
              <TodoList>
                {loading && <TodosLoading />}
                {error && <TodosError />}
                {(!loading && searchedTodos.length===0) && <TodosEmpty />}
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

export { AppUI};