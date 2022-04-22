import * as  musicService from './../services/music-services.js';
import * as utils from './../helpers/utils.js';

export const allMusic = async (request, response) => {
    try{
        const query = {};
        const music = await musicService.getAllMusic(query);
        utils.setSuccessResponse(music, response);
    }catch(error) {
        utils.setErrorResponse(error, response);
    }
}

export const postallMusic = async (request, response) => {
    try {
        const payload = request.body;
        const music = await musicService.saveAllMusic(payload);
        utils.setSuccessResponse(music, response);
    } catch (error) {
        utils.setErrorResponse(error, response);
    }
}