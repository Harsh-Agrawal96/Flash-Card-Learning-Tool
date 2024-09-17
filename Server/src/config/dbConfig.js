
import mongoose from "mongoose";
import dotenv from "dotenv";

import { admin } from "../models/admins.js"


function configDB (app) {

    dotenv.config();

    // connect to mongoDb
    mongoose.connect( process.env.DatabaseURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 30000
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

};

export default configDB