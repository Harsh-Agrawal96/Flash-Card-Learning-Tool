
import express from "express";
import dotenv from "dotenv";
import { initAllWebRoutes } from "./src/Routes/web.js";
import allConfigurations from "./src/config/configs.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

allConfigurations(app);

initAllWebRoutes(app);


app.get("/", (req,res) => {
    res.send("hello world");
})

app.listen( port, () => {
    console.log(`server is running on ${port} `);
})