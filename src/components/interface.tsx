import { FC } from "react";
import backgroudimage from '../assets/backgroundmountain3.jpg';
import '../style/interface.css';

const Interface: FC = () => {
    return ( 
        <div className="interface">
            <div className="mountain-background">
                <img src={backgroudimage} alt="" />
                <div className="gradient"></div>
                <div className="overlay"></div>
            </div>
            <div className="main-components">
                
            </div>
        </div>
     );
}

export default Interface;
