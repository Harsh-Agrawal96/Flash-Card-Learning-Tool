
import mongoose from 'mongoose';


const mcqsCardSchema = new mongoose.Schema({

    Question: {
        type: String,
        required: true,
        trim: true
    },
    ChooseA: {
        type: String,
        required : true,
        trim: true
    },
    ChooseB: {
        type: String,
        required : true,
        trim: true
    },
    ChooseC: {
        type: String,
        required : true,
        trim: true
    },
    ChooseD: {
        type: String,
        required : true,
        trim: true
    },
    answerOption : {
        type: String,
        enum: ['A', 'B', 'C','D'],
        required: true
    },
    addedby: {
        type: mongoose.Schema.Types.ObjectId,
          ref: 'Admin',
          required: true
    }

});


// Create the model based on the schema
const mcqsCard = mongoose.model('mcqsCard', mcqsCardSchema);

export{  mcqsCard }
