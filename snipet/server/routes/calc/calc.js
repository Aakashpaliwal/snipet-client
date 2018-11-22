var express = require('express');
var router = express.Router();

var add=require('./add.js');
router.use('/add',add);

var result=require('./result.js');
router.use('/result',result);

var view=require('./view.js');
router.use('/view',view);


// var update=require('./update.js');
// router.use('/update',update);

// var detail=require('./detail.js');
// router.use('/detail',detail);

// var del=require('./delete.js');
// router.use('/delete',del);

module.exports = router;
