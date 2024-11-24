import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import mongoose from 'mongoose';
import {DATABASE, MAX_JSON_SIZE, PORT, REQUEST_NUMBER, REQUEST_TIME, URL_ENCODE,WEB_CACHE} from './app/config/config.js';
import router from './routes/api.js';
import * as console from "node:console";


const app = express();

//app use default middleware

app.use(cors());
app.use(express.json({limit:MAX_JSON_SIZE}));
app.use(express.urlencoded({extended:URL_ENCODE}));
app.use(helmet());

//app use rate limiter

const limiter=rateLimit({windowMS:REQUEST_TIME,max:REQUEST_NUMBER})
app.use(limiter)

//cache

app.set("etag" ,WEB_CACHE);

//Database connect

mongoose.connect(DATABASE,{autoIndex:true}).then(()=>{
    console.log("MongoDB Connected");
}).catch(()=>{
    console.log("MongoDB Disconnected");
})

app.use("/api", router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
