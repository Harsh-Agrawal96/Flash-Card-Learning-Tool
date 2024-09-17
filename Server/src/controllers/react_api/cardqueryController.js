
import * as questions from "../../services/cardqueryServices.js"


let givecards = async ( req,res ) => {

    try{

        console.log(req.body);
        console.log(req.body.selectedType);
        console.log(req.body.selectedValue);

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

            return res.status(200).json({ success: true, data: arrayOfCards });
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

            return res.status(200).json({ success: true, data: arrayOfCards });
        }

        return res.status(500).json({ success: true, message: 'form fields are invalid' });
    }
    catch(err){
        console.log(err);

        return res.status(400).json({ success: false, message: 'server error' });
    }
}

export default givecards;