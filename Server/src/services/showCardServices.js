
import { mcqsCard } from "../models/mcqsCard.js";
import { objCard } from "../models/objectiveCard.js";

let mcqsQuestions = async ( cardCount ) => {

    return new Promise( async ( resolve,reject ) => {

        try{

            let count = Number(cardCount);
            mcqsCard.aggregate([{ $sample: { size: count } }])
            .then( cards => {

                console.log(cards);
                return resolve(cards);

            })
            .catch(error => {
                return reject(error);
            });
        }
        catch(err){
            console.log(err);

            return reject(err);
        }
    })
}


let objectiveQuestions = async ( cardCount ) => {
    
    return new Promise( async ( resolve,reject ) => {

        try{
            console.log("hsere");
            let count = Number(cardCount);
            objCard.aggregate([{ $sample: { size: count } }])
            .then( cards => {

                console.log(cards);
                return resolve(cards);

            })
            .catch(error => {
                return reject(error);
            });
        }
        catch(err){
            console.log(err);

            return reject(err);
        }
    })
}


export {
    
    mcqsQuestions,
    objectiveQuestions
}

