
import express from "express";
import * as updateCard from "../controllers/react_api/cardUpdateController.js";


let routes = express.Router();


let allcardUpdateRoutes = (app) => {

    routes.post( "/card/add", updateCard.addCard );

    routes.post( "/card/delete", updateCard.deleteCard );

    routes.post( "/card/update", updateCard.updateCard );


    return app.use("/", routes);
}

export {

    allcardUpdateRoutes,
}