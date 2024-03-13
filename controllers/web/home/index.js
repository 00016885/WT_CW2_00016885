const home_controller = {
    index: async (req, res) =>{
        res.render('home');
    },
    add: async (req, res) =>{
        res.render('home/add');
    },
    update: async (req, res) =>{
        res.render('home/add');
    }
};
  
module.exports = home_controller;
