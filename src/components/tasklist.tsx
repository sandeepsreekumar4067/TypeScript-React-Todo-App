import '../style/tasklist.css';
import { FC } from 'react';
import tickMark from '../assets/checkmark-512.png';
import { RxCross2 } from "react-icons/rx";

interface TodoItem {
    id: number;
    text: string;
    isChecked: boolean;
}

interface TasklistProps {
    itemlist: TodoItem[];
    handleCheckboxChange: (id: number) => void;
    handleDeleteTask: (id: number) => void; // Function to handle task deletion
}

const Tasklist: FC<TasklistProps> = ({ itemlist, handleCheckboxChange, handleDeleteTask }) => {
    const handleDeleteButtonClick = (id: number) => {
        handleDeleteTask(id); // Call the parent component's delete function
    };

    return (
        <>
            {itemlist.map((task) => (
                <div className="tasks" key={task.id}>
                    <div className="checkBox">
                        <div className={`custom-checkBox ${task.isChecked ? 'checked' : ''}`} onClick={() => handleCheckboxChange(task.id)}>
                            <img src={tickMark} alt="" />
                        </div>
                    </div>
                    <span>{task.text}</span>
                    <div className="deleteButton">
                        <div className="custom-delete" onClick={() => handleDeleteButtonClick(task.id)}>
                            <RxCross2 />
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Tasklist;