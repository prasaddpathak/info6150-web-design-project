import React, { useState } from "react";
import './Login.scss';
import { useHistory } from "react-router-dom";
import logo from './../../Assets/Img/logo.png';
import axios from "axios";



const Login = ({ setLoginUser }) => {



    //declaring user state with name and email addresses for login purpose
    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    //using the history of singups with useHistory method
    const historySignups = useHistory()

    const handle = e => {

        const { name, value } = e.target;
        // console.log({name,value}); 
        // till here we got the name and the value of each state and now we are going to use setUser to set the state
        setUser({
            ...user,
            [name]: value
            // when a user enter his name then this will keep his name in name, and will put the rest of things in ...user 
        })
    }

    const login = () => {
        axios.post("http://localhost:9008/login", user)
            .then(res => {
                alert(res.data.message)
                sessionStorage.setItem('userID', res.data.userID)
                setLoginUser(res.data.user)
                historySignups.push("/home")
            })

//         function login(setLoginUser) {
//             axios.post("http://localhost:9008/login",user)
//             .then(res=>{

//                 setLoginUser(res.data.token)
//                 // console.log(res.data.token)
//                 historySignups.push("/home");
//             });
            
// >>>>>>> develop

    }
    return (


        <div className="login">

            <img height="35%" className="image animate__animated animate__heartBeat animate__repeat-3" src={logo} alt="app icon" />
            <h1>On the aux</h1>
            {console.log("user", user)}
            <input type="text" name="email" value={user.email} placeholder="Please enter your email" onChange={handle}></input>
            <br />
            <input type="password" name="password" value={user.password} placeholder="Please enter your password" onChange={handle}></input>

            <br />
             <div className="buttonlogin" onClick={login}>Login</div> 
           
             {/* <div className="buttonlogin" onClick={() => login(props.setLoginUser)}>Login</div> */}
            <div>or</div>
            <div className="buttonsignup" onClick={() => historySignups.push("/signup")}>Signup</div>

        </div>
    )

}
export default Login;