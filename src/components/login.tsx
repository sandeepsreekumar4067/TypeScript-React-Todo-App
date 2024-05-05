import { FC } from "react";
import '../style/login.css'
import loginImage from '../assets/login-container.jpg'
const Loginpage:FC = () => {
    return ( 
        <div>
            <div className="login-interface">
                <div className="login-component">

                </div>
                <div className="image-container">
                    
                    <img src={loginImage} alt="" />
                    <div className="gradient">
                    <div className="title">LOGIN</div>
                    <div className="subtitle">
                        Welcome Back
                    </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Loginpage;