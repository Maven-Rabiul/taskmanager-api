import express from 'express';
const router = express.Router();

import * as taskController from "../App/controllers/taskController.js"
import * as userController from "../App/controllers/userController.js"
import AuthMiddleware from "../App/middlewares/authMiddleware.js";


//Users

router.post("/Registration",userController.Registration)
router.post("/Login", userController.Login);
router.get("/ProfileDetails",AuthMiddleware,userController.ProfileDetails);
router.post("/ProfileUpdate",AuthMiddleware,userController.ProfileUpdate);
router.post("/EmailVerify/:email",userController.EmailVerify);
router.get("/CodeVerify/:email/:code",userController.CodeVerify);
router.post("/ResetPassword", userController.ResetPassword);

//Task

router.post("/CreateTask",AuthMiddleware, taskController.CreateTask);
router.get("/UpdateTask/:id/:status",AuthMiddleware, taskController.UpdateTask);
router.get("/TaskListStatus/:status",AuthMiddleware,taskController.TaskListStatus);
router.get("/DeteleTask/:id",AuthMiddleware,taskController.DeleteTask);
router.get("/CountTask",AuthMiddleware, taskController.CountTask);




export default router;
