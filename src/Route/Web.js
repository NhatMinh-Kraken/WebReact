import express from "express";
import homecontroler from "../Controller/HomeController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", homecontroler.getHomePage);
    router.get("/About", homecontroler.getAboutPage);
    router.get("/add-crud", homecontroler.getCrudPage);

    router.post("/post-crud", homecontroler.postCRUD);
    router.get("/def-crud", homecontroler.displayCrud);
    router.get("/edit-crud", homecontroler.editCRUD);
    router.post("/Update-Crud", homecontroler.UpdateCrud);
    return app.use("/", router)
}

module.exports = initWebRoutes;