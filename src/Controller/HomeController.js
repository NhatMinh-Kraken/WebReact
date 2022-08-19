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



module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getRegisterPage: getRegisterPage,
}