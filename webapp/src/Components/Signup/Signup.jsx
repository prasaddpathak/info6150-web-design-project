import React, { useState } from "react"
import "./Signup.scss"
import axios from "axios";


import { useHistory } from "react-router-dom"

const Signup = () => {

    const history = useHistory()

    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: "",
        contactNo:""

    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const signin = () => {
        console.log(user);
        const { name, email, password, reEnterPassword ,contactNo} = user
        if( name && email && password &&contactNo &&(password === reEnterPassword)){
            
            axios.post("http://localhost:9001/signin/", user) 
            .then( res => {
                alert(res.data.message)
                history.push("/login")
            })
        } else {
            alert("invlid input")
        }
        
    }

    return (
        <div className="signin">
            {console.log("User", user)}
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
            <br/>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <br/>
            <input type="text" name="contactNo" value={user.contactNo} placeholder="Your contact number" onChange={ handleChange }></input>
            <br/>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <br/>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
            <br/>
           
        
            <div className="button" onClick={signin} >Register</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/login")}>Login</div>
        </div>
    )
}

export default Signup;