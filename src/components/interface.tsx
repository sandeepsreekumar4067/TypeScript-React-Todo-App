import { ChangeEvent, FC, useState } from "react";
import backgroudimage from '../assets/backgroundmountain3.jpg';
import '../style/interface.css';
import tickMark from '../assets/checkmark-512.png'
import arrow from '../assets/arrow.png'
import Tasklist from "./tasklist";

const Interface: FC = () => {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [itemlist,additemlist] = useState(["hello","hey","hi","heyman","how are you bro"])
    const [value,setValue] = useState<string>('')
    const [itemCount,setItemCount] = useState<number>(0)
    const handleValueChange = (event:ChangeEvent<HTMLInputElement>)=>{
        setValue(event.target.value)
    }
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    
    return ( 
        <div className="interface">
            <div className="mountain-background">
                <img src={backgroudimage} alt="" />
                <div className="gradient"></div>
                <div className="overlay">
                    <div className="title">TODO</div>
                    <div className="input-box">
                        <div className={`custom-checkBox ${isChecked?'checked':''}`} onClick={handleCheckboxChange}>
                            <img src={tickMark} alt="" />
                        </div>
                        <input type="text" placeholder="Enter the Task"/>
                        <div className="button">
                            <img src={arrow} />
                        </div>
                    </div>
                    <div className="task-container">
                        <div className="task-list">
                            <Tasklist itemlist={itemlist} />
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
