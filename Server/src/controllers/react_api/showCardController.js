
import * as questions from "../../services/showCardServices.js"
import { unknownError as tryErr } from "../../utils/responses.js";


let givecards = async ( req,res ) => {

    try{

        if( req.body.selectedType == 1 ){

            let cards = await questions.mcqsQuestions(req.body.selectedValue);
            const arrayOfCards = [];

            cards.forEach(row => {
                const rowObject = {};
  
                for (const [key, value] of Object.entries(row)) {
                    rowObject[key] = value;
                }
                if( row.answerOption == "A")    rowObject["ans"] = row.ChooseA
                if( row.answerOption == "B")    rowObject["ans"] = row.ChooseB
                if( row.answerOption == "C")    rowObject["ans"] = row.ChooseC
                if( row.answerOption == "D")    rowObject["ans"] = row.ChooseD

                arrayOfCards.push(rowObject);
            });

            return res.status(200).json({ success: true, msg: arrayOfCards });
        }
        if( req.body.selectedType == 2 ){
            let cards = await questions.objectiveQuestions(req.body.selectedValue);
            const arrayOfCards = [];

            cards.forEach(row => {
                const rowObject = {};
  
                for (const [key, value] of Object.entries(row)) {
                    rowObject[key] = value;
                }
                
                arrayOfCards.push(rowObject);
            });

            return res.status(200).json({ success: true, msg: arrayOfCards });
        }

        return res.status(400).json({ success: true, msg: ["Invalid Cridentials"] });
    }
    catch(err){
        return res.status(500).json({ success: false, msg : tryErr });
    }
}

export default givecards;