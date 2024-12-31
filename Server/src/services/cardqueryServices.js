
import { admin } from "../models/admins.js";
import { mcqsCard } from "../models/mcqsCard.js";
import { objCard } from "../models/objectiveCard.js";


let checkAdmin = (id) => {

    return new Promise( async (resolve,reject) => {
        try{

            const user = await admin.findOne({
                _id : id
            })
            resolve(user);

        }catch(err){
            reject(err);
        }
    });
}

let getMcqsCard = (id) => {

    return new Promise( async (resolve,reject) => {
        try{

            const cards = await mcqsCard.find({
                addedby : id
            })
            resolve(cards);

        }catch(err){
            reject(err);
        }
    });
}

let getObjCard = (id) => {

    return new Promise( async (resolve,reject) => {
        try{

            const cards = await objCard.find({
                addedby : id
            })
            resolve(cards);

        }catch(err){
            reject(err);
        }
    });
}


export{
    checkAdmin,
    getMcqsCard,
    getObjCard
}