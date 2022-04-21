import React, { useState } from "react";
import './login.scss';
import { useHistory } from "react-router-dom";
import logo from './../../Assets/Img/logo.png';
import axios from "axios";


const Login = ({ setLoginUser }) => {
    //declaring user state woth name,email addresses etc
    const [user, setUser] = useState({
        email: "",
        password: "",

    })

    //using the history of singups
    const historydet = useHistory()

    const handleChange = e => {

        const { name, value } = e.target;
        // console.log({name,value}); 
        // till here we got the name and the value of each state and now we are going to use setUser to set the state
        setUser({
            ...user,
            [name]: value  // when a user enter his name then this will keep his name in name, and will put the rest of things in ...user 
        })
    }

    const login = () => {
        axios.post("http://localhost:9008/login", user)
            .then(res => {
                alert(res.data.message)
                setLoginUser(res.data.user)
                historydet.push("/")
            })

    }
    return (


        <div className="login">

            <img height="35%" className="image animate__animated animate__heartBeat animate__repeat-3" src={logo} alt="app icon" />
            <h1>On the aux</h1>
            {console.log("user", user)}
            <input type="text" name="email" value={user.email} placeholder="Enter your email" onChange={handleChange}></input>
            <br />
            <input type="text" name="password" value={user.password} placeholder="Enter your password" onChange={handleChange}></input>
            <br />
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => historydet.push("/signup")}>Signup</div>

        </div>
    )

}
export default Login;