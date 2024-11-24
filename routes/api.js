import express from 'express';
const router = express.Router();

import * as taskController from "../App/controllers/taskController.js"
import * as userController from "../App/controllers/userController.js"


//Users

router.post("/Registration",userController.Registration)
router.post("/Login", userController.Login);
router.get("/ProfileDetails", userController.ProfileDetails);
router.post("/ProfileUpdate", userController.ProfileUpdate);
router.post("/EmailVerify", userController.EmailVerify);
router.post("/CodeVerify", userController.CodeVerify);
router.post("/ResetPassword", userController.ResetPassword);

//Task

router.post("/CreateTask", taskController.CreateTask);
router.get("/UpdateTask", taskController.UpdateTask);
router.get("/TaskListStatus", taskController.TaskListStatus);
router.get("/DeteleTask", taskController.DeleteTask);
router.get("/CountTask", taskController.CountTask);




export default router;
