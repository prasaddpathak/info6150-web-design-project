import User from './../models/user.js';

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