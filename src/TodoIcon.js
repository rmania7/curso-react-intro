import{ReactComponent as CheckSVG}from './check.svg';
import{ReactComponent as DeleteSVG}from './delete.svg';
import './TodoIcon.css';

//se contruye una condicional para cada futuro icon a necesitar
const iconsTypes = {
    "check": (color)=> <CheckSVG className="Icon-svg" fill={color}/>,
    "delete": (color)=> <DeleteSVG className="Icon-svg" fill={color}/>,
};

function TodoIcon({ type, color,onClick }){
return (
<span className={`Icon-container 
      Icon-container-${type}`}
      onClick={onClick}>
    {iconsTypes[type](color)}
</span>
);
}

export { TodoIcon };