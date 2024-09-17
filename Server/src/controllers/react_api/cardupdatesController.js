
import * as updatecardsevice from "../../services/cardupdateServices.js";



let sampleCardAdd = async ( req,res ) => {

    try{

        console.log(req.body);
        await updatecardsevice.addcard(req.body);

        res.status(500).json({ success: true, message: 'question added' })

    }
    catch(err){
        console.log(err);

        res.status(401).json({ success: false, message: err })
    }
}


let cardAdding = async ( req,res ) => {

    try{

        console.log("here");
        console.log(req.body);

        await updatecard.addingCard(req.body);
        console.log("heofj")
        res.json("ok");
    }
    catch(err){
        console.log(err);
        
        res.json("no");
    }
    
}


let cardRemove = async ( req,res ) => {

    try{

        await updatecard.removecard(req.body.id);

        res.JSON("ok");
    }
    catch(err){
        console.log(err);
        
        res.JSON("no");
    }
}

let cardUpdate = async ( req,res ) => {

    try{

        await updatecard.changecard(req.body);

        res.JSON("ok");
    }
    catch(err){
        console.log(err);
        
        res.JSON("no");
    }
}

export {

    cardAdding,
    cardRemove,
    cardUpdate,
    sampleCardAdd
}