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
    password : {
        type: String,
        required: 'Phone number is requried.'
    },
    contactNo: {
        type: String,
    },
    playlists: [{  
        playlist_name : String,
        playlist_details : [{
            song_name: String,
            song_type : String
        }]
    }],
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