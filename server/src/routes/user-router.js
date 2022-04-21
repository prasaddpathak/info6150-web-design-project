import express from "express";
import * as userController from './../controllers/user-controller.js';

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

export default router;