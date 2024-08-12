
import express from "express";
import dotenv from "dotenv";
import { db } from "../src/models/index.js";
import { allAdminVerifyRoutes } from "./Routes/adminVerifyRoutes.js";
import { allcardUpdateRoutes } from "./Routes/cardupdateRoutes.js";
import { configViewEngine } from "./config/configfils.js";


const app = express();
const port = process.env.PORT || 4000;

configViewEngine(app);



allAdminVerifyRoutes(app);
allcardUpdateRoutes(app);

app.get("/", (req,res) => {
    res.send("hello world");
})

app.listen( port, () => {
    console.log(`server is running on ${port} `);
})