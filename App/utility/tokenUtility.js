import{JWT_EXPIRATION_TIME,JWT_SECRET} from "../config/config.js";
import jwt from "jsonwebtoken";

export const TokenEncode = (email,user_id)=>{
    const KEY = JWT_SECRET
    const EXPIRE = {expiresIn: JWT_EXPIRATION_TIME}
    const PAYLOAD = {email:email,user_id:user_id}
    return jwt.sign(PAYLOAD, KEY, EXPIRE);
}

export const TokenDecode = (token)=>{
    try{
        return jwt.verify(token,JWT_SECRET);
    }catch(e){
        return null;
    }
}