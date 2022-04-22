import Music from './../models/music.js';

export const getAllMusic = (query) => {
    const param = {...query};
    return Music.find(param).exec();
}

export const saveAllMusic = (newMusic) => {
    const music = new Music(newMusic);
    return music.save();
}