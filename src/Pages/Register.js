import React from "react";
import { useState } from 'react';
import '../Register.css'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import loginImage from "../image/loginImage.png";
import {FcGoogle} from 'react-icons/fc';



function Register () {  
        const [passwordType, setPasswordType] = useState("password");
        const [passwordIcon, setPasswordIcon] = useState(<FaEyeSlash />);
        const handelToggle = () => {
          if (passwordType === "password") {
            setPasswordType("text");
            setPasswordIcon(FaEye);
          } else {
            setPasswordType("password");
            setPasswordIcon(FaEyeSlash);
          }
        };
        
        const [confirmPasswordType, setPasswordTypeCon] = useState("password");
        const [passwordIconCon, setPasswordIconCon] = useState(<FaEyeSlash/>);
        const handelToggleCon = () => {
            if (confirmPasswordType === "password") {
                setPasswordTypeCon("text");
                setPasswordIconCon(FaEye);
            } else {
                setPasswordTypeCon("password");
                setPasswordIconCon(FaEyeSlash);
            }
        }
    return (
        <div>
            <img src={loginImage} height="auto"/>
             <div class="register" >
            <div>
            <h1 class="A0">Let get your Started</h1>
            </div>
            <div class="flex1">
            <p class="A1">Already have an account?</p>
            <p class="A2">Sign in</p>
            </div> 
            <div>
                <form>
                    <div class="Info">
                    <p class="useDis">Usename</p>
                    <input type="text" placeholder="Enter your usename"></input>
                    <p class="passDis">Password</p>
                    <div class="Input">
                    <input type={passwordType} placeholder="Enter your password"></input>
                    <span className="icons-span-1" onClick={handelToggle}>{passwordIcon}</span>
                    </div>
                    <p class="confDis">Confirm Password</p>
                    <div class="InputCon">
                    <input type={confirmPasswordType} placeholder="Confirm your password"></input>
                    <span className="icons-span-2" onClick={handelToggleCon}>{passwordIconCon}</span>
                    </div>
                    </div>
                    <div class="flex2">
                    <input type="checkbox"></input>
                    <p class="A3">I accepted with terms and conditions</p>
                    </div>
                    <input type="submit" value="Sign up" class="IP1"></input>
                    <p class="A5">Or</p>
                    <input type="submit" value="Sign in with Google" class="IP2"></input>
                    <div class="icon">
                    <FcGoogle/>
                    </div>
                </form>
            </div>
        </div> 
        </div>
    )
       
}

export default Register;