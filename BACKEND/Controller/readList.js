const list = require('../Model/dataModel');

const readList = async(req, res) => {
    try {
        const response = await list.find({});
        res.status(200).send(response);
    } catch(err) {
        res.status(500).send(err.message);
    }
}

module.exports = readList;