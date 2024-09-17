
import mongoose from 'mongoose';


const adminSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }

});



// Create the model based on the schema
const admin = mongoose.model('Admin', adminSchema);

export { admin }
