import react from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext';

function TodoSearch(){
    const  {searchValue,setSearchValue}=react.useContext(TodoContext);
    return(
     <input className="TodoSearch" placeholder="pelar cebolla" 
     value={searchValue}
     onChange = {(event)=>{
        console.log('escribiste en todoSearch');
        setSearchValue(event.target.value); //target es el propio objeto
     }
     }
     />
    );
}

export {TodoSearch};