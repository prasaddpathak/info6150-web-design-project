import React,{useState} from "react";
import './signin.scss';


const Signin =() => {

    //declaring user state woth name,email addresses etc
    const [user, setUser]=useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:""
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
        <div className="signin">
        <h1>Sign Up</h1>
        {console.log("user",user)}
        <input type="text" name="name" value={user.name} placeholder="Your name" onChange={handleChange}></input>
        <br/>
        <input type="text" name="email" value={user.email} placeholder="Your email" onChange={handleChange}></input>
        <br/>
        <input type="text" name="password" value={user.password} placeholder="Your password" onChange={handleChange}></input>
        <br/>
        <input type="text" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter password" onChange={handleChange}></input>
        <br/>
        <div className="button">Sign Up</div>
        <div>or</div>
        <div className="button">Login</div>

    </div>

    )

}
export default  Signin;