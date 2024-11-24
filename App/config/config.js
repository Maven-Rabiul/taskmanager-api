import path from 'path';

export const PORT=7070
export const DATABASE="mongodb+srv://mavenrabiul:maven1234@cluster0.wdzls.mongodb.net/practice_api";

export const JWT_SECRET ="5EC7CEFA1BE7C9354A639369A2AA8";
export const JWT_EXPIRATION_TIME = 60*60*24*30;

export const EMAIL_HOST = "smtp.titan.email";
export const EMAIL_PORT = "465";
export const EMAIL_SECURITY = false;
export const EMAIL_USER = "support@laravelpoint.com";
export const EMAIL_PASSWORD = "Rup77_4827";
export const EMAIL_ENCRYPTION="ssl";
export const EMAIL_UN_AUTH=false;


export const WEB_CACHE=false;
export const MAX_JSON_SIZE = "50mb";
export const URL_ENCODE = true;


export const REQUEST_TIME = 15 * 60 * 1000; // 15 Min
export const REQUEST_NUMBER = 3000; // Per 15 Min 3000 Request Allowed


export function UPLOAD_FOLDER(fileName){
    return path.resolve(process.CWD(),'storage',fileName);

}