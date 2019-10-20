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
    console.log(type);
    
        let result = await find('recommend', {type}, {});
     
    console.log(result);
    res.send(formatData(
        result
    ));

})


module.exports = Router;