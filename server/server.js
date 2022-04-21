import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

//connecting to mongoDB
mongoose.connect("mongodb+srv://admin:admin@cluster0.tybff.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

//preparing model schema for signup
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    contactNo:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    
})

const User = new mongoose.model("User", userSchema)

//Defining routes here for signup and login page of our music app

app.post("/login", (req, res) => {
    const { email, password } = req.body
    User.findOne({ email: email }, (err, user) => {
        if (user) // if the user is already present
        {
            if (password === user.password) {
                res.send({ message: "Login Successfull", user: user })
            } else {
                res.send({ message: "Password didn't match" })
            }
        } else //if password doesnt match
        {
            res.send({ message: "User not registered" })
        }
    })
})

//this is dummy api to check user data
app.get("/getAll", (req, res) => {
        const { name, email, password } = req.body
        User.find({}, (err, user) => {
            res.send(user)
        }, (err => {
            if (err) {
                res.send(err)
            } else {
                res.send({ message: "Successfully Registered, Please login now." })
            }
        }))

    })
    //update password details
app.put("/updatePassword", (req, res) => {
    const { email, password, repassword } = req.body
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            User.findOneAndUpdate({ email: email }, { password: password }, (err, update) => {
                if (err) {
                    res.send({ message: "Server error!" })
                } else {
                    res.send({ message: "Password Updaetd Sucessfully" })
                }
            })
        } else {
            res.send({ message: "User not registered" })
        }
    })

})

//update personal details

app.put("/updatePDetails", (req, res) => {
    const { email, name, contactNo } = req.body
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            User.findOneAndUpdate({ email: email }, { name: name, contactNo: contactNo }, (err, update) => {
                if (err) {
                    res.send({ message: "Server error!" })
                } else {
                    res.send({ message: "Personal Details Updaetd Sucessfully" })
                }
            })
        } else {
            res.send({ message: "User not registered" })
        }
    })

})

app.post("/signin", (req, res) => {
    const { name, email, password:hasplaintext,contactNo} = req.body
    const password= new bcrypt.hashSync(hasplaintext,10);

    User.findOne({ email: email }, (err, user) => {
        if (user) {
            res.send({ message: "User already registerd" })
        } else 
        {
            const user = new User({
                name,
                email,
                password,
                contactNo

            })
            user.save(err => {
                if (err) {
                    res.send(err)
                } else {
                    res.send({ message: "Successfully Registered, Please login now." })
                }
            })
        }
    })

})

app.listen(9001, () => {
    console.log("BE started at port 9001")
})