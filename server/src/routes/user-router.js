/*
    Author:     Web of lies
    Subject:    INFO6150 - Web Design and UX
    Purpose:    Provide route for all available API 
*/
import express from "express";
import * as userController from './../controllers/user-controller.js';
import * as musicController from './../controllers/music-controller.js';

const router = express.Router();

router.route('/user')
    .post(userController.post)
    .get(userController.index);

router.route('/login')
    .get(userController.login)

router.route('/user/:id')
    .get(userController.get)
    .put(userController.update)
    .delete(userController.remove);

router.route('/music')
    .post(musicController.postallMusic)
    .get(musicController.allMusic);    

export default router;