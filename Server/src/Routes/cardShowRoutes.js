
import express from "express";
import givecards from "../controllers/react_api/cardqueryController.js";


let Routes = express.Router();

let cardQueryRoutes = ( app ) => {

    Routes.post( "/give/cards", givecards );

    return app.use("/", Routes);
}

export {
    cardQueryRoutes
}