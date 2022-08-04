import  express, { request }  from "express";
import bodyParser from "body-parser";
import viewEngine from "./Config/ViewEngine";
import initWebRoutes from './Route/Web';

require('dotenv').config();


let app = express();

//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

viewEngine(app);
initWebRoutes(app);

let port = process.env.PORT || 2626;
//PORT === underfined => port = 2626
app.listen(port, () =>{
    //callback
    console.log("Backend" + port)
})