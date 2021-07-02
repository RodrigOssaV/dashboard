const Driver = require('../model/driver.model');

module.exports = {

    add_driver: (req, res) => {
        try {
            Driver.create({
                rut: req.body.add_rut,
                name: req.body.add_name,
                lastname: req.body.add_lastname,
                phone: req.body.add_phone
            }).then(result => {
                res.status(200).json(result);
            });
        } catch (error) {
            res.status(400).json(error);
        }
    },

    get_drivers: (req, res) => {
        try {
            Driver.findAll().then(result => {
                res.status(200).json(result);
            })
        } catch (error) {
            res.status(400).json(error);
        }
    },

    get_driver: (req, res) => {
        const {rut} = req.params;
        try {
            Driver.findByPk(rut).then(result => {
                res.status(200).json(result)
            })
        } catch (error) {
            res.status(400).json(error);
        }
    },

    delete_driver: (req, res) => {
        const {rut} = req.params;
        try {
            Driver.destroy({
                where:{rut}
            }).then(result => {
                res.status(200).json(result);
            })
        } catch (error) {
            res.status(400).json(error);
        }
    },
    
    update_driver: (req, res) => {
        const {rut} = req.params;
        try {
            Driver.update({
                rut: req.body.update_rut,
                name: req.body.update_name,
                lastname: req.body.update_lastname,
                phone: req.body.update_phone
            },{
                where: {rut}
            }).then(result => {
                res.status(200).json(result);
            })
        } catch (error) {
            res.status(400).json(error);
        }
    }
};