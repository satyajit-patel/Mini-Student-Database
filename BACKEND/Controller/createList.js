const list = require('../Model/dataModel');

const createList = async(req, res) => {
    try {
        const body = req.body;
        const response = await list.create({name: body.name, reg: body.reg});
        res.status(200).send(response);
    } catch(err) {
        res.status(500).send(err.message);
    }
}

module.exports = createList;