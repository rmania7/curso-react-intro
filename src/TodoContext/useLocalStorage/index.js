import react from 'react';
function useLocalStorage(itenName,initialValue){
    //localStorage
    // se crea un nuevo Estado
    const [item, setItem]= react.useState(initialValue);
    const [loading,setLoading] =react.useState(true);
    const [error,setError] =react.useState(false);
    

    react.useEffect(()=> {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itenName);
          let parsedItem;
          if(!localStorageItem){ // si no tiene datos genero un array vacio
            localStorage.setItem(itenName, JSON.stringify(initialValue));
            parsedItem=initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
            setItem(parsedItem);
          }
        setLoading(false);  
        } catch (error) {
          setLoading(false);
          setError(true);
        }
      }, 2000);
    },[]);
       

    const saveItem = (newItem) =>{
      localStorage.setItem(itenName, JSON.stringify(newItem));
      setItem(newItem);
    }
    // fin localStorage
    return {item, saveItem, error, loading}; // return [item, saveItem];
}
export { useLocalStorage };

//crea un array para iniciar 
  // const defaultTodos =[
  //   { text: 'Cortar', completed: true},
  //   { text: 'Pelar', completed: false},
  //   { text: 'Correr', completed: true},
  //   { text: 'picar', completed: false},
  // ];
  // const stringifyTodos = JSON.stringify(defaultTodos);
  
  // localStorage.setItem(itenName, stringifyTodos);
