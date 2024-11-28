import taskModel from "../model/taskModel.js";
import TaskModel from "../model/taskModel.js";
import mongoose from "mongoose";

export const CreateTask = async(req,res)=>{

   try{
       let user_id = req.headers['user_id'];
       let reqBody = req.body;
       reqBody.user_id = user_id;
       await taskModel.create(reqBody);
       return res.json({status:"success","message":"CreateTask successfully"})

   }catch (err){
       return res.json({status:"Failed","message":err.toString()})
   }
}

export const UpdateTask = async(req,res)=>{

    try{
        let id = req.params.id;
        let status = req.params.status;
        let user_id = req.headers['user_id'];
        await taskModel.updateOne({"_id":id,"user_id":user_id,status:status},)
        return res.json({status:"success","message":"UpdateTask successfully"})

    }catch(err){
        return res.json({status:"Failed","message":err.toString()})
    }
}

export const TaskListStatus = async(req,res)=>{

    try {
        let status = req.params.status;
        let user_id = req.headers['user_id'];
        let data = await TaskModel.findOne({"user_id": user_id, "status": status});
        return res.json({status: "success", data: data, "message": "TaskListStatus successfully"})

    }catch(err){
        return res.json({status:"Failed","message":err.toString()})
    }
}

export const DeleteTask = async(req,res)=>{

    try{let id = req.params.id;
        let user_id = req.headers['user_id'];
        await taskModel.deleteOne({"_id":id, "user_id":user_id})
        return res.json({status:"success","message":"DeleteTask successfully"})

    }catch(err){
        return res.json({status:"Failed","message":err.toString()})
    }
}

export const CountTask = async(req,res)=>{

    try{
        let ObjectID=mongoose.Types.ObjectId;
        let user_id = req.headers['user_id'];
        let user_id_object = new ObjectID(user_id);

        let data = await TaskModel.aggregate([
            {$match:{"user_id":user_id_object}},
            {$group:{_id:"$status",sum:{$count:{}}}}
        ])
        return res.json({status:"success","data":data,"message":"CountTask successfully"})

    }catch(err){
        return res.json({status:"Failed","message":err.toString()})
    }

}