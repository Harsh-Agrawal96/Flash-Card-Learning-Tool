
import express from "express";
import { handleLogin } from "../controllers/react_api/verifyController.js";


let routes = express.Router();


let allAdminVerifyRoutes = (app) => {

    routes.post( "/login", handleLogin);

    return app.use("/", routes);
}

export {
    allAdminVerifyRoutes,
}