import express from "express";
import homecontroler from "../Controller/HomeController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", homecontroler.getHomePage);
    router.get("/About", homecontroler.getAboutPage);
    return app.use("/", router)
}

module.exports = initWebRoutes;