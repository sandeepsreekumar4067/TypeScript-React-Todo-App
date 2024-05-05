// Interface.tsx
import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import backgroudimage from '../assets/backgroundmountain3.jpg';
import '../style/interface.css';
import arrow from '../assets/arrow.png';
import Tasklist from "./tasklist";
import tickMark from '../assets/checkmark-512.png';

interface TodoItem {
    id: number;
    text: string;
    isChecked: boolean;
}

const Interface: FC = () => {
    const [itemlist, setItemlist] = useState<TodoItem[]>([]);
    const [value, setValue] = useState<string>('');

    const handleValueChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent the default form submission behavior
        if (value.trim() === '') return; // Don't add empty tasks
        const newItem: TodoItem = {
            id: Date.now(), // Generate a unique id
            text: value,
            isChecked: false
        };
        setItemlist(prevState => [...prevState, newItem]); // Add the new item to the list
        setValue(''); // Clear the input box after adding the item
    };

    const handleCheckboxChange = (id: number) => {
        setItemlist(prevState => {
            return prevState.map(item => {
                if (item.id === id) {
                    return { ...item, isChecked: !item.isChecked };
                }
                return item;
            });
        });
    };

    const handleDeleteTask = (id: number) => {
        setItemlist(prevState => prevState.filter(item => item.id !== id));
    };

    const [headerChecked, setHeaderChecked] = useState(false)
    const handleHeaderChecked = () => {
        setHeaderChecked(!headerChecked)
    }

    const itemCount = itemlist.filter(item => !item.isChecked).length;

    return (
        <div className="interface">
            <div className="mountain-background">
                <img src={backgroudimage} alt="" />
                <div className="gradient"></div>
                <div className="overlay">
                    <div className="title">TODO</div>
                    <form onSubmit={handleFormSubmit} className="input-box">
                        <div className={`custom-checkBox ${headerChecked ? 'checked' : ''}`} onClick={handleHeaderChecked}>
                            <img src={tickMark} alt="" />
                        </div>
                        <input type="text" placeholder="Enter the Task" value={value} onChange={handleValueChange} />
                    </form>
                    <div className="task-container">
                        <div className="task-list">
                            <Tasklist itemlist={itemlist} handleCheckboxChange={handleCheckboxChange} handleDeleteTask={handleDeleteTask} />
                        </div>
                        <div className="task-details">
                            <div className="item-left">
                                {itemCount} items left
                            </div>
                            <div className="sort-list">
                                <div className="all">all</div>
                                <div className="active">active</div>
                                <div className="complete">complete</div>
                            </div>
                            <div className="endTask">
                                <div className="clear">Clear Completed</div>
                            </div>
                        </div>
                    </div>
                    <div className="message">
                        Drag and drop to reorder list
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Interface;
