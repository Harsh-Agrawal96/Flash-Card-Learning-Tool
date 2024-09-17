
import { mcqsCard } from "../models/mcqsCard.js";
import { objCard } from "../models/objectiveCard.js";
import dotnev from "dotenv";


dotnev.config();


let addcard = async ( req_body ) => {

    return new Promise( async ( resolve,reject ) => {

        try{

            if( req_body.questype == 1 ){ // mcqs type question

                const card = new mcqsCard({
                    Question: req_body.que, 
                    ChooseA : req_body.options.optionA,
                    ChooseB : req_body.options.optionB, 
                    ChooseC : req_body.options.optionC, 
                    ChooseD : req_body.options.optionD,
                    answerOption : req_body.mcqans,
                    addedby : process.env.SecretAdmin
                })
                await card.save();

                return resolve("added mcqs question");
            }
            if( req_body.questype == 2 ){ // objective type question
    
                const card = new objCard({
                    Question: req_body.que, 
                    Answer : req_body.ans, 
                    addedby : process.env.SecretAdmin
                })
                await card.save();

                return resolve("added objective question");
            }
    
            return reject("invalid input fields");
        }
        catch(err){
            console.log(err);
            reject(err);
        }

    })
}


// import { db } from "../models/index.js";

// let addingCard = ( data_body ) => {

//     return new Promise ( async ( resolve, reject ) => {

//         try{

//             const card = await db.card.build({
//                 cardques : data_body.que,
//                 cardans : data_body.ans
//             });
//             await card.save();

//             resolve("done!");
//         }
//         catch(err){
//             console.log(err);
//             reject(err);
//         }
//     })
// }


// let removecard = async (id) => {

//     return new Promise ( async ( resolve, reject ) => {

//         try{

//             await db.card.destroy({
//                 where: {
//                     id: id
//                 },
//             });

//             resolve("deleted!");
//         }
//         catch(err){
//             console.log(err);
//             reject(err);
//         }
//     })
// }

// let changecard = async ( data_body ) => {

//     return new Promise ( async ( resolve, reject ) => {

//         try{

//             let card = await db.card.findAll({
//                 where : {
//                     id : data_body.id
//                 }
//             })

//             let data = JSON.stringify(card);
//             if( data.length <= 2 ){
//                 return reject("card is not avaialable");
//             }

//             await db.card.update(
//                 { cardques : data_body.question, cardans : data_body.answer },
//                 {
//                     where : {
//                         id : data_body.id
//                     },
//                 },
//             )

//             resolve("done!");
            
//         }
//         catch(err){
//             console.log(err);
//             reject(err);
//         }
//     })
// }

export {

//     addingCard,
//     removecard,
//     changecard
    addcard
}

