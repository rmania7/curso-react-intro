import react from 'react';
import { TodoIcon } from './TodoIcon';

function CompleteIcon ({ completed,onComplete }){
    return (
        <TodoIcon
        type="check"
        color={completed ? 'green' : 'gray'} //se envia dinamico mediuante el prop
        onClick={onComplete}
        />
    );
}

export { CompleteIcon };