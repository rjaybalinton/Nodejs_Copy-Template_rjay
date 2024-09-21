const express = require('express');
const router = express.Router();
const rjay = require('../controller/rjay');  


router.get('/', rjay.index);                   

module.exports = router;