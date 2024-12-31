
import { mcqsCard } from "../models/mcqsCard.js";
import { objCard } from "../models/objectiveCard.js";
import { admin } from "../models/admins.js";


let cardDeletion = async (type, cardId) => {

    return new Promise ( async (resolve,reject) => {
        try{

            if( type == 1){
                const result = await mcqsCard.deleteOne({
                    _id : cardId
                })
                return resolve();
            }
            const result = await objCard.deleteOne({
                _id : cardId
            })
            return resolve();
            
        }catch(err){
            reject(err);
        }
    })
}

let cardAddition = async (data) => {

    return new Promise( async ( resolve,reject ) => {
        try{

            if( data.questype == 1 ){

                const card = new mcqsCard({ // mcqs type question
                    Question: data.que, 
                    ChooseA : data.options.optionA,
                    ChooseB : data.options.optionB, 
                    ChooseC : data.options.optionC, 
                    ChooseD : data.options.optionD,
                    answerOption : data.mcqans,
                    addedby : data.adminId
                })
                await card.save();

                return resolve();
            }
            if( data.questype == 2 ){ // objective type question
    
                const card = new objCard({
                    Question: data.que, 
                    Answer : data.ans, 
                    addedby : data.adminId
                })
                await card.save();

                return resolve();
            }
    
            reject();
        }
        catch(err){
            reject(err);
        }
    })
}


let cardUpdation = async (data) => {

    return new Promise( async ( resolve,reject ) => {
        try{

            if( data.questype == 1 ){ // mcqs type question
                const result = await mcqsCard.updateOne( { _id : data.id },
                    {
                        Question: data.que, 
                        ChooseA : data.options.optionA,
                        ChooseB : data.options.optionB, 
                        ChooseC : data.options.optionC, 
                        ChooseD : data.options.optionD,
                        answerOption : data.mcqans,
                    }
                )

                return resolve();
            }
            if( data.questype == 2 ){ // objective type question
                const result = await objCard.updateOne( { _id : data.id },
                    {
                        Question: data.que, 
                        Answer : data.ans, 
                    }
                )

                return resolve();
            }
    
            reject();
        }
        catch(err){
            reject(err);
        }
    })
}


let getAdmin = async (id,key) => {

    return new Promise ( async (resolve,reject) => {
        try{
            const user = await admin.findOne({
                _id : id,
                securityKey : key
            })
            resolve(user);
        }catch(err){
            reject(err);
        }
    })
}

let getMcqsCard = async (id, adminId) => {

    return new Promise ( async (resolve,reject) => {
        try{
            const card = await mcqsCard.findOne({
                _id : id,
                addedby : adminId
            })
            resolve(card);
        }catch(err){
            reject(err);
        }
    })
}

let getObjCard = async (id, adminId) => {
    
    return new Promise ( async (resolve,reject) => {
        try{
            const card = await objCard.findOne({
                _id : id,
                addedby : adminId
            })
            resolve(card);
        }catch(err){
            reject(err);
        }
    })
}


export{
    cardDeletion,
    cardUpdation,
    cardAddition,
    getAdmin,
    getMcqsCard,
    getObjCard
}