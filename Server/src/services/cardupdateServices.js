
import { db } from "../models/index.js";

let addingCard = ( data_body ) => {

    return new Promise ( async ( resolve, reject ) => {

        try{

            const card = await db.card.build({
                cardques : data_body.que,
                cardans : data_body.ans
            });
            await card.save();

            resolve("done!");
        }
        catch(err){
            console.log(err);
            reject(err);
        }
    })
}


let removecard = async (id) => {

    return new Promise ( async ( resolve, reject ) => {

        try{

            await db.card.destroy({
                where: {
                    id: id
                },
            });

            resolve("deleted!");
        }
        catch(err){
            console.log(err);
            reject(err);
        }
    })
}

let changecard = async ( data_body ) => {

    return new Promise ( async ( resolve, reject ) => {

        try{

            let card = await db.card.findAll({
                where : {
                    id : data_body.id
                }
            })

            let data = JSON.stringify(card);
            if( data.length <= 2 ){
                return reject("card is not avaialable");
            }

            await db.card.update(
                { cardques : data_body.question, cardans : data_body.answer },
                {
                    where : {
                        id : data_body.id
                    },
                },
            )

            resolve("done!");
            
        }
        catch(err){
            console.log(err);
            reject(err);
        }
    })
}

export {

    addingCard,
    removecard,
    changecard
}