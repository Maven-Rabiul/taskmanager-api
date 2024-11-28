import req from "express/lib/request.js";
import {TokenDecode} from "../utility/tokenUtility.js";

export default (req, res, next)=> {

    let token = req.headers['token'];
    let decoded = TokenDecode(token);
    if (decoded === null) {
            return res.status(401).send({status:"failed", message:"Unauthorized"});
    }else{
        //Retrive from token
        let email = decoded.email;
        let user_id = decoded.user_id;

        req.headers.email = email;
        req.headers.user_id = user_id;

        next();
    }
}