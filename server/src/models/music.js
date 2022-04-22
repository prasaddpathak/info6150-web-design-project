/*
    Author:     Web of lies
    Subject:    INFO6150 - Web Design and UX
    Purpose:    Schema for Music collection 
*/
import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    name : {
        type: String,
        required: 'Music short name is required.'
    },
    author_name:{ 
        type: String,
        required: 'author_name is required'
    },
    img : {
        type: String,
        required: 'Music image is requried.'
    },
    lang: {
        type: String,
    },
    timesPlayed: {
        type: Number
    },
    type: {
        type: String,
        required: 'Music type number is requried.'
    },
    musicName: {
        type: String,
        required: 'Music detail name number is requried.'
    }
}, {skipVersioning: true});


const model = mongoose.model('music', Schema);

export default model;