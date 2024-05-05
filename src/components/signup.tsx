import { FC } from "react";
import '../style/login.css'
import loginImage from '../assets/login-container.jpg'
const SignUp:FC = () => {
    return ( 
        <div>
            <div className="login-interface">
                <div className="login-component">
                    <input type="text" placeholder="Enter the Username"/>
                    <input type="text" placeholder="Password" />
                    <input type="button" value="Submit" />
                </div>
                <div className="image-container">
                    <img src={loginImage} alt="" />
                    <div className="gradient">
                    <div className="title">Sign Up</div>
                    <div className="subtitle">
                        Gets Started
                    </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default SignUp;