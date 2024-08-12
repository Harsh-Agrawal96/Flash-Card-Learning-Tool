

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";


function configViewEngine (app) {

    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

};

export {
    configViewEngine,
}