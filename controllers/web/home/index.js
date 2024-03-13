const ticket_service = require('../../../services/ticket')

const home_controller = {
    index: async (req, res) =>{
        res.render('home');
    },
    add: async (req, res) =>{
        res.render('home/add', { mode: 'Add' });
    },
    update: async (req, res) =>{
        const eventData = await ticket_service.getById(req.params.id);
        res.render('home/add', { mode: 'Update', eventData: eventData });
    }
};
  
module.exports = home_controller;
