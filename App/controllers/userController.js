import UserModel from "../model/userModel.js";
import {TokenEncode} from "../utility/tokenUtility.js";
import {json} from "express";
import userModel from "../model/userModel.js";

export const Registration = async(req,res)=>{
   try{
       let reqBody = req.body;
       await UserModel.create(reqBody)

       return res.json({status:"success","message":"Registered successfully"})

   }catch(err){
       return res.json({status:"Failed","message":err.toString()})

   }
}

export const Login = async(req,res)=>{

    try{
        let reqBody = req.body;
        let data = await UserModel.findOne(reqBody)
        if(!data === null){
            return res.json({status:"Failed","message":"User does not exist"})
        }else{
            //login success, token encode
            let token = TokenEncode(data['email'], data['_id'])
            return res.json({status:"success",Token:token, "message":"Login successfully"})
        }
    }
    catch(err){
        return res.json({status:"Failed","message":err.toString()})
    }
}

export const ProfileDetails = async(req,res)=>{
    try{
        let user_id = req.headers["user_id"];
        let data=await UserModel.findOne({"_id":user_id})
        return res.json({status:"success","message":"ProfilesDetails successfully",data:data})

    }catch(err) {
        return res.json({status: "Failed", "message": err.toString()})
    }
}

export const ProfileUpdate = async(req,res)=>{
    try{
        let reqBody = req.body;
        let user_id = req.headers["user_id"];
        await userModel.updateOne({"_id":user_id},reqBody)
        return res.json({status:"success","message":"Profile Update successfully"})

    }catch(err){}
    return res.json({status:"failed","message":err.toString()})
}

export const EmailVerify = async(req,res)=>{
    try{
        let email = req.params.email;
        let data = await userModel.findOne({email:email})
        if(data == null){
            return res.json({status:"Failed","message":"email not found"})
        }
        else{
            let code = Math.floor(100000+Math.random()*900000)
            let EmailTo = data['email'];
            let EmailText = "Your Code is"+ code;
            let EmailSubject = "Task Manager Verification Code";
            await SendEmail(EmailTo,EmailText,EmailSubject)

            await UserModel({email:email},{otp:code})
            return res.json({status:"success","message":"EmailVerify successfully"})
        }

    }catch(err){}
    return res.json({status:"failed","message":err.toString()})
}

export const CodeVerify = async(req,res)=>{
    try{
        let email = req.params.email;
        let code=req.params.code;

        let data = await userModel.findOne({email:email,otp:code})
        if(data == null){
            return res.json({status:"Failed","message":"wrong verification code"})
        }else{
            return res.json({status:"success","message":"CodeVerify successfully"})
        }

    }catch(err){
        return res.json({status:"Failed","message":err.toString()})
    }
}

export const ResetPassword=async(req,res)=>{
 try{
     let reqBody = req.body;
     let data = await userModel.findOne({email:reqBody['email'],otp:reqBody['code']})
     if(data == null){
         return res.json({status:"Failed","message":"wrong verification code"})
     }else{
         await UserModel.updateOne({email:reqBody['email']},{otp:"0",password:reqBody['password']
         })
         return res.json({status:"success","message":"Password reset successfully"})
     }
 }catch (err){
     return res.json({status:"Failed","message":err.toString()})

 }
}