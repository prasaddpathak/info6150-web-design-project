import React,{useState } from "react";
import './login.scss';

import logo from './headphoneN.png'

const Login =() => {
        //declaring user state woth name,email addresses etc
        const [user, setUser]=useState({
            email:"",
            password:"",
           
        })
    
        const handleChange= e =>{
            
            const{name,value} =e.target;
            // console.log({name,value}); 
            // till here we got the name and the value of each state and now we are going to use setUser to set the state
            setUser({
                ...user,
                [name]:value  // when a user enter his name then this will keep his name in name, and will put the rest of things in ...user 
            })
        }
    return (
        

        <div className="login">
           
            <img height="35%" className="image animate__animated animate__heartBeat animate__repeat-3" src={logo} alt="app icon"/>
            <h1>On the aux</h1>
            {console.log("user",user)}
            <input type="text" name="email" value={user.email} placeholder="Enter your email" onChange={handleChange}></input>
            <br/>
            <input type="text" name="password" value={user.password} placeholder="Enter your password" onChange={handleChange}></input>
            <br/>
            <div className="button">Login</div>
            <div>or</div>
            <div className="button">Signup</div>

        </div>
    )

}
export default Login;