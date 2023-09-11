import react from 'react';
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
export { useLocalStorage };