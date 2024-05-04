import { FC, useState } from "react";
import backgroudimage from '../assets/backgroundmountain3.jpg';
import '../style/interface.css';
import tickMark from '../assets/checkmark-512.png'


const Interface: FC = () => {
    const [isChecked, setIsChecked] = useState(false);

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
                    </div>
                    <div className="task-list">
                        
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Interface;
