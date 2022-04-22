import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    name : {
        type: String,
        required: 'Name is required.'
    },
    email:{ 
        type: String,
        required: 'Email is required',
        index: true,
        unique: true
    },
    contactNo : {
        type: String,
        required: 'Phone number is requried.'
    },
    password: {
        type: String,
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    modifiedDate: {
        type: Date,
        default: Date.now
    }
}, {skipVersioning: true});

const model = mongoose.model('user', Schema);

export default model;