import './TodoItem.css';
import { BsSendCheck } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";


function TodoItem(props){
  return(
    <li className='TodoItem'>
      
      <span 
        className={`Icon-Icon-check ${props.completed && "Icon-check--active"} `}
        onClick={props.onComplete}>
          <BsSendCheck />
      </span>
      <p 
        className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      
      <span 
        className='Icon Icon-delete'
        onClick={props.onDelete}>
          <AiFillDelete/>
      </span>
    </li>
  );
}
export { TodoItem }