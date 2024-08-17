
import express from "express";
import { passportOfAdmin } from "../controllers/react_api/loginPassportController.js";
import passport from "passport";



passportOfAdmin();


let routes = express.Router();


let allAdminVerifyRoutes = (app) => {

    // routes.post( "/login", passport.authenticate( "local", {
    //     successRedirect : "/",
    //     failureRedirect : "/login",
    //     successFlash : true,
    //     failureFlash : true
    // }) );

    routes.post( "/login", ( req,res ) => {
        console.log(req.body);

        res.json("ok");
    } );
    routes.get( "/here", (req,res) => {
         res.send(
            "by"
         )
    })

    return app.use("/", routes);
}

export {

    allAdminVerifyRoutes,
}