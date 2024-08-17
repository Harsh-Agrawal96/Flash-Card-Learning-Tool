

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";


function configViewEngine (app) {

    const corsConfig = {
        origin : "*",
        credential: true,
        methods : ["GET", "POST", "PUT", "DELETE"],
    };

    app.use(cors(corsConfig));
    app.options("", cors(corsConfig));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

};

export {
    configViewEngine,
}