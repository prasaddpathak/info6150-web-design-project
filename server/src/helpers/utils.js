import { json } from "express";

export const setErrorResponse = (error, response) => {
    response.status(500);
    response.json(error);
}

export const setSuccessResponse = (obj, response) => {
    response.status(200);
    response.json(obj);
}

export const extractPlaylistNameFromUser = (obj) => {
    const userPlaylists =  obj.playlists;
    const playlistNames = []
    userPlaylists.forEach(item => {
        playlistNames.push(item.playlist_name);
    });
    console.log(`Returning : ${playlistNames}`);
    return playlistNames;
}