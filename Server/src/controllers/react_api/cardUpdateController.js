import * as cardUpdates from "../../services/cardupdateServices.js";
import { unknownError as tryErr } from "../../utils/responses.js";


let deleteCard = async (req,res) => {

    try{
        const data = req.body;

        if( data.questype == 1 ){
            const card = await cardUpdates.getMcqsCard(data.id, data.adminId);
            const admin = await cardUpdates.getAdmin(data.adminId, data.key);

            return await performDeletion( res, card, admin, data.id, data.questype );
        }
        if( data.questype == 2 ){
            const card = await cardUpdates.getObjCard(data.id, data.adminId);
            const admin = await cardUpdates.getAdmin(data.adminId, data.key);

            return await performDeletion( res, card, admin, data.id, data.questype );
        }

        res.status(400).json({ success: false, msg: [ "Invalid credentials" ]});
    }catch(err){
        res.status(500).json({ success: false, msg: tryErr });
    }
}

let performDeletion = async ( res, card, admin, cardId, type ) => {
    
    try{
        console.log(card, admin);
        console.log("here")
        if( !card || !admin ){
            return res.status(400).json({ success : false, msg : [ "Invalid credentials" ]});
        }

        const response = await cardUpdates.cardDeletion(type, cardId);

        res.status(200).json({ success : true, msg : [ "Card deleted successfully" ] })
    }catch(err){
        res.status(500).json({ success: false, msg: tryErr });
    }
}


let addCard = async (req,res) => {
    
    try{
        const data = req.body;
        if( data.mcqans == '' && data.questype == 1 ){
            return res.status(400).json({ success: false, msg: [ "Invalid credentials" ]});
        }

        const admin = await cardUpdates.getAdmin(data.adminId,data.key);
        if( admin == null ){
            return res.status(400).json({ success : false, msg : [ "Invalid credentials" ]});
        }

        const response = await cardUpdates.cardAddition(data);

        res.status(200).json({ success: true, msg: ["card added successfully"]});
    }catch(err){
        res.status(500).json({ success: false, msg: tryErr });
    }
}


let updateCard = async (req,res) => {

    try{
        const data = req.body;
        if( data.mcqans == '' && data.questype == 1 ){
            return res.status(400).json({ success: false, msg: [ "Invalid credentials" ]});
        }

        if( data.questype == 1 ){
            const card = await cardUpdates.getMcqsCard(data.id, data.adminId);
            const admin = await cardUpdates.getAdmin(data.adminId, data.key);

            return await performUpdation( res,card, admin, data );
        }
        if( data.questype == 2 ){
            const card = await cardUpdates.getObjCard(data.id, data.adminId);
            const admin = await cardUpdates.getAdmin(data.adminId, data.key);
            
            return await performUpdation( res, card, admin, data );
        }

        res.status(400).json({ success: false, msg: [ "Invalid credentials" ]});
    }catch(err){
        res.status(500).json({ success: false, msg: tryErr });
    }
}

let performUpdation = async ( res, card, admin, data) => {

    try{
        if( !card || !admin ){
            return res.status(400).json({ success : false, msg : [ "Invalid credentials" ]});
        }

        const response = await cardUpdates.cardUpdation(data);

        res.status(200).json({ success : true, msg : [ "Card updated successfully" ] })
    }catch(err){
        res.status(500).json({ success: false, msg: tryErr });
    }
}


export{
    deleteCard,
    addCard,
    updateCard
}