
import express from "express";
import dotenv from "dotenv";
import { allAdminVerifyRoutes } from "./src/Routes/adminVerifyRoutes.js";
import { allcardUpdateRoutes } from "./src/Routes/cardupdateRoutes.js";
import { cardQueryRoutes } from "./src/Routes/cardShowRoutes.js";
import allConfigurations from "./src/config/configs.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

allConfigurations(app);



allAdminVerifyRoutes(app);
allcardUpdateRoutes(app);
cardQueryRoutes(app);


app.get("/", (req,res) => {
    res.send("hello world");
})

app.listen( port, () => {
    console.log(`server is running on ${port} `);
})