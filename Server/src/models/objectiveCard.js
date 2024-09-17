
import mongoose from 'mongoose';


const objectiveCardSchema = new mongoose.Schema({

    Question: {
        type: String,
        required: true,
        trim: true
    },
    Answer: {
        type: String,
        required: true,
        trim: true
    },
    addedby: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin',
        required: true
    }

});



// Create the model based on the schema
const objCard = mongoose.model('objectiveCard', objectiveCardSchema);

export { objCard }
