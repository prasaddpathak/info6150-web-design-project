import User from './../models/user.js';
import {extractPlaylistNameFromUser} from '../helpers/utils.js'

export const save = (newContact) => {
    const user = new User(newContact);
    return user.save();
}

export const search = (query) => {
    const params = {...query};
    return User.find(params).exec();
}

export const get = (id) => {
    return User.findById(id).exec();
}

export const update = (updatedUser) => {
    updatedUser.modifiedDate = new Date();
    return User.findByIdAndUpdate(updatedUser.id,updatedUser).exec();
}

export const remove = (id) => {
    User.findByIdAndDelete(id).exec();
}

export const checkPassword = (email) => {
    return User.findOne({email : email}).exec();
}

export const getPlaylistsForAUser = async (id) => {
    const user = await User.findById(id).exec();
    const playlists = extractPlaylistNameFromUser(user);
    return playlists;
}