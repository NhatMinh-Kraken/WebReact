
let getHomePage = (rep, res) =>{
    return res.render('Index.ejs');
}

let getAboutPage = (rep, res) =>{
    return res.render('Text/About.ejs');
}



module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
}