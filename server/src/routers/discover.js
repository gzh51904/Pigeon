const express = require('express');

const Router = express.Router();

const {
    mongo: {
        find
    }
} = require('../db');
const {
    formatData
} = require('../utils')

Router.get('/', async (req, res) => {
    let {
        type
    } = req.query;

    let result = await find(type, {}, {
        sort: {
            share: -1
        }
    });
    res.send(formatData(
        result
    ));

})


module.exports = Router;