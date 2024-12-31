
import express from "express";
import givecards from "../controllers/react_api/showCardController.js";


let Routes = express.Router();

let cardShowRoutes = ( app ) => {

    Routes.post( "/give/cards", givecards );

    return app.use("/", Routes);
}

export {
    cardShowRoutes
}