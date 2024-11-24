import UserModel from "../model/userModel.js";

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
    return res.json({status:"success","message":"Login successfully"})
}

export const ProfileDetails = async(req,res)=>{
    return res.json({status:"success","message":"ProfilesDetails successfully"})
}

export const ProfileUpdate = async(req,res)=>{
    return res.json({status:"success","message":"ProfileUpdate successfully"})
}

export const EmailVerify = async(req,res)=>{
    return res.json({status:"success","message":"EmailVerify successfully"})
}

export const CodeVerify = async(req,res)=>{
    return res.json({status:"success","message":"CodeVerify successfully"})
}

export const ResetPassword=async(req,res)=>{
    return res.json({status:"success","message":"ResetPassword successfully"})
}