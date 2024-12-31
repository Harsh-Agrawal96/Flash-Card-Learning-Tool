
import express from "express";
import { queryCards } from "../controllers/react_api/cardqueryController.js";


let route = express.Router();

let allCardQueryRoutes = (app) => {

    route.post('/cards', queryCards );

    return app.use('/', route);
}

export{
    allCardQueryRoutes,
}