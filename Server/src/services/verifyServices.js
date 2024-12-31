
import { admin } from "../models/admins.js";


let checkAdmin = (email, password, key) => {

    return new Promise( async (resolve,reject) => {
        try{
            const user = await admin.findOne({
                email, email
            })
            if(!user || user.password != password || user.securityKey != key){
                return resolve({ success: false, msg: [ "Invalid credentials" ]});
            }

            resolve({ success: true, msg: user});

        }catch(err){
            reject(err);
        }
    });
}


export{
    checkAdmin
}


