import db from '../models/index';
import CRUDServices from '../Services/CRUDServices';

let getHomePage = async (req, res) => {

    try {
        let data = await db.User.findAll();
        return res.render('Index.ejs', {
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e)
    }
}

let getAboutPage = (req, res) => {
    return res.render('Text/About.ejs');
}

let getRegisterPage = (req, res) => {
    return res.render('Register.ejs');
}

let getCrudPage = (req, res) => {
    return res.render('crud.ejs');
}

let postCRUD = async (req, res) => {
    let message = await CRUDServices.CreateNewUser(req.body);
    console.log(message);
    return res.send('post crud');
}

let displayCrud = async (req, res) => {
    let data = await CRUDServices.GetAllUser();
    console.log('---------------------')
    console.log(data)
    console.log('---------------------')
    return res.render('default.ejs', {
        dataTable: data
    });
}

module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getRegisterPage: getRegisterPage,
    getCrudPage: getCrudPage,
    postCRUD: postCRUD,
    displayCrud: displayCrud,
}