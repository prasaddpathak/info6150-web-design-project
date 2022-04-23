import * as userService from './../services/user-services.js';
import * as utils from './../helpers/utils.js';
import bcrypt from 'bcrypt';

export const post = async(request, response) => {
    try {
        const payload = request.body;
        const user = await userService.save(payload);
        utils.setSuccessResponse(user, response);
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
        const { email, password } = request.body
        const user = await userService.checkPassword(email);
        console.log(user);
        if (user) // if the user is already present
        {
            if (password === user.password) {
                utils.setSuccessResponse({ message: `Successfully Logged In`, userID: user._id }, response);
            } else {
                utils.setSuccessResponse({ message: `Password Did not match` }, response);
            }
        } else //if user does not exist
        {
            utils.setSuccessResponse({ message: `User does not exist` }, response);
        }
    } catch (error) {
        utils.setErrorResponse(error, response);
    }
}

export const getPlaylists = async (request,response) => {
    try {
        const id = request.params.id;
        console.log(`Getting playlists for: ${id}`);
        const user = await userService.getPlaylistsForAUser(id);
        utils.setSuccessResponse(user,response);

    } catch (error) {
        utils.setErrorResponse(error, response);
    }
}

export const updatePlaylists = async (request,response) => {
    try {
        const id = request.params.id;
        const playlist_name = request.body.playlist_name;
        const playlist_details = request.body.playlist_details.map((value) => {
            return{
                'song_name' : value  
            }
        });

        const playlist = {
            'playlist_name' : playlist_name,
            'playlist_details' : playlist_details
        }

        // console.log(payload);
        const result = await userService.appendPlaylistForAUser(id, playlist);
        utils.setSuccessResponse(result, response);
    } catch (error) {
        utils.setErrorResponse(error, response);
    }
}