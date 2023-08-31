import './TodoSearch.css';
function TodoSearch(){
    return(
     <input className="TodoSearch" placeholder="pelar cebolla" 
     onChange = {(event)=>{
        console.log('escribiste en todoSearch');
        console.log(event);
        console.log(event.target);
        console.log(event.target.value)
     }
     }
     />
    );
}

export {TodoSearch};