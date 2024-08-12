
import express from "express";
import * as updatecard from "../controllers/react_api/cardupdatesController.js";


let routes = express.Router();


let allcardUpdateRoutes = (app) => {

    routes.post( "/card/remove", updatecard.cardRemove );

    routes.post( "/card/add", updatecard.cardAdding );

    routes.post( "card/update", updatecard.cardUpdate );


    return app.use("/", routes);
}

export {

    allcardUpdateRoutes,
}