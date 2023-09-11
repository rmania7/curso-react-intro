import react from 'react';
import './TodoSearch.css';

function TodoSearch({searchValue,setSearchValue}){
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