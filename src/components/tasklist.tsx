import '../style/tasklist.css';
import { FC } from 'react';

interface TasklistProps {
    itemlist: string[]; // Assuming itemList is an array of strings
}

const Tasklist: FC<TasklistProps> = (props) => {
    const tasklist = props.itemlist;
    return ( 
        tasklist.map((task,index)=>(
            <div className="tasks" key={index}>
                {task}
            </div>
        ))
     );
}
 
export default Tasklist;
