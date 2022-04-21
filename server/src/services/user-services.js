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

export const checkPassword = (email) => {
    return User.findOne({email : email}).exec();
    // User.findOne({ email: email }, (err, user) => {
    //     if (user) // if the user is already present
    //     {
    //         if (password === user.password) {
    //             return "Login Successfull";
    //         } else {
    //             return "Password didn't match";
    //         }
    //     } else //if password doesnt match
    //     {
    //         return "User not registered";
    //     }
    // });
}