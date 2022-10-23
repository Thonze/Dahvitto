module.exports = {
    index: (req,res) => {
        res.render('index.ejs')
    },

    About: (req,res) => {
        res.render('about.ejs')
    },

    Services: (req,res) => {
        res.render('services.ejs')
    },

    Portfolio : (req,res) => {
        res.render('portfolio.ejs')
    },

    Pricing: (req,res) => {
        res.render('pricing.ejs')
    },

    Team: (req,res) => {
        res.render('team.ejs')
    },

    Contact: (req,res) => {
        res.render('contact.ejs')
    },

}