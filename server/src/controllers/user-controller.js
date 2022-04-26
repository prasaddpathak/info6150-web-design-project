import * as userService from './../services/user-services.js';
import * as utils from './../helpers/utils.js';
import bcrypt, { hash, hashSync } from 'bcrypt';
import Model from '..//models/user.js'
import express from 'express';
import { SESS_LIFETIME, SESS_SECRET } from '..//config/config.js';
import jwt from 'jsonwebtoken';


export const post = async(request, response) => {
    try {
        //put await for the variable since its a async function
        // const userNew=await Model.findOne({email:request.body.email})
        // if(userNew){
        //     return response.status(409).send({message:"User already present"});
        // }
        const payload = request.body;
        const user = await userService.save(payload);
        utils.setSuccessResponse({ message: `User successfully added` }, response);
    } catch (error) {
        utils.setErrorResponse(error, response);
    }
}

export const index = async(request, response) => {
    try {
        console.log(request.query);
        const firstName = request.query.firstName;
        const lastName = request.query.lastName;
        const query = {};
        if (firstName) {
            query.firstName = firstName;
        }
        if (lastName) {
            query.lastName = lastName;
        }
        const users = await userService.search(query);
        utils.setSuccessResponse(users, response);

    } catch (error) {
        utils.setErrorResponse(error, response);
    }
}


export const get = async(request, response) => {
    try {
        const id = request.params.id;
        const user = await userService.get(id);
        utils.setSuccessResponse(user, response);
    } catch (error) {
        utils.setErrorResponse(error, response);
    }
}

export const update = async(request, response) => {
    try {
        const id = request.params.id;
        const updated = {...request.body };
        updated.id = id;
        const user = await userService.update(updated);
        console.log('check', user)
        utils.setSuccessResponse(user, response);
    } catch (error) {
        utils.setErrorResponse(error, response);
    }
}

export const remove = async(request, response) => {
    try {
        const id = request.params.id;
        await userService.remove(id);
        utils.setSuccessResponse({ message: `Successfully removed ${id}` }, response);
    } catch (error) {
        utils.setErrorResponse(error, response);
    }
}

export const login = async(request, response) => {
    try {

        const { email, password } = request.body;
        const user = await userService.checkPassword(email);
        const userN = await Model.findOne({ email });
        if (user) // if the user is already present
        {

            if (password === user.password) {

                const token = jwt.sign({
                    email: userN.email,
                    userId: userN._id
                }, SESS_SECRET, {
                    expiresIn: SESS_LIFETIME
                });


                utils.setSuccessResponse({ message: `Successfully Logged In`, token: token, userID: userN._id }, response);
            } else {
                utils.setSuccessResponse({ message: `Oops!! Password Did not match,Invalid credentials` }, response);
            }
        } else //if user does not exist
        {
            utils.setSuccessResponse({ message: `User does not exist` }, response);
        }
    } catch (error) {
        utils.setErrorResponse(error, response);
    }
}

export const getPlaylists = async(request, response) => {
    try {
        const id = request.params.id;
        console.log(`Getting playlists for: ${id}`);
        const user = await userService.getPlaylistsForAUser(id);
        utils.setSuccessResponse(user, response);

    } catch (error) {
        utils.setErrorResponse(error, response);
    }
}

export const updatePlaylists = async(request, response) => {
    try {
        const id = request.params.id;
        const playlist_name = request.body.playlist_name;
        const playlist_details = request.body.playlist_details.map((value) => {
            return {
                'song_name': value
            }
        });

        const playlist = {
            'playlist_name': playlist_name,
            'playlist_details': playlist_details
        }

        // console.log(payload);
        const result = await userService.appendPlaylistForAUser(id, playlist);
        utils.setSuccessResponse(result, response);
    } catch (error) {
        utils.setErrorResponse(error, response);
    }
}

export const deletePlaylist = async(request, response) => {
    try {
        const id = request.params.id;
        const playlist_name = request.params.playlist;
        // console.log(`Delete PLaylist: ${playlist_name} for User: ${id}`);

        const result = await userService.deletePlaylistForAUser(id, playlist_name);
        utils.setSuccessResponse(result, response);

    } catch (error) {
        utils.setErrorResponse(error, response);
    }
}