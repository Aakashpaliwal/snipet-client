var express = require('express');
var router = express.Router();
// var func = require('../func.js');
// var edo=require('../edonomix.js');
var pool = require('../db');

router.delete('/:ui_id',function(req, res, next) 
{
  console.log(req.body);
    // var table1_id=req.body.ui_id;
    // req.checkQuery('id', 'id must be a number').optional().isNumber();
    // req.check('ui_id', 'id must be a number').isInt();
    // var verrs=req.validationErrors();
    // if(verrs)
    // {
    //   res.status(500).json({ success:false,msg: verrs[0].msg,});
    // }
    // else
    // {
      pool.getConnection(function(err,con) 
      {
        con.query("update table1 set ? where table1_id= ? and status=1",[{'status':0},req.params.ui_id],function(err,table1result,fields)
        {
          con.release();
          if(err)
          {
            console.log(err);
            res.status(500).json({'success':false,msg: 'something went wrong'});
          }
          else
          { 
            if(table1result["affectedRows"]==1)
            res.status(200).json({"success":true,'msg':'table1 deleted'});
            else
            res.status(400).json({"success":false,'msg':'invalid operation'});    
          }      
        });
      });  
    // }              
});


module.exports = router;