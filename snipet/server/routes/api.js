var express = require('express');
var router = express.Router();

var calc=require('./calc/calc.js');
router.use('/calc',calc);

var question=require('./question/question.js');
router.use('/question',question);


var folder1=require('./folder1/folder1.js');
router.use('/folder1',folder1);


module.exports = router;
