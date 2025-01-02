
import * as queryCardService from "../../services/cardqueryServices.js";
import { unknownError as tryErr } from "../../utils/responses.js";


let queryCards = async (req,res) => {

    try{
        const data = req.body;

        const admin = await queryCardService.checkAdmin(data.adminId);
        if( !admin ){
            return res.status(400).json({ success: false, msg : ["Invalid Credentials"]});
        }

        const cards = {};

        const mcqCards = await queryCardService.getMcqsCard(data.adminId);
        cards['mcqs'] = mcqCards;
        const objCards = await queryCardService.getObjCard(data.adminId);
        cards['objs'] = objCards;

        res.status(200).json({ success : true, msg : cards });
    }catch(err){
        res.status(500).json({ success: false, msg : tryErr });
    }
}


export{
    queryCards
}