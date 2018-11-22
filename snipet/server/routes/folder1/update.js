var express = require('express');
var router = express.Router();
var pool = require('../db');

router.put('/:ui_id',function(req, res, next) 
{
  console.log(req.body);
  //   req.check('category','equipment category must have proper value ').isLength({min:3});
  //   req.check('capacity','equipment capacity must have proper value ').isLength({min:3});

  // var verrs=req.validationErrors();
  // if(verrs)
  // {
  //   res.status(500).json({ success:false,msg: verrs[0].msg,});
  // }
  // else
  // {
    var table1 = 
    {
      a1:req.body.ui_a1,
      a2:req.body.ui_a2,
      a3:req.body.ui_a3,
    };
    pool.getConnection(function(err,con) {
      if(err){
        res.status(500).json({'success':false,'msg':'db connection failed'});
      }
      else{
            //update validation baki he
            con.query("update table1 SET ? where table1_id=? and status=1",[table1,req.params.ui_id],function(err,table1result,fields)
            {
              con.release();
              if(err)
              {
                console.log(sql,err);
                res.status(500).json({success:false,msg: 'something went wrong',});
              }
              else
              {
                if(table1result["affectedRows"]==1)
                res.status(200).json({"success":true,'msg':'table1 updated'});
                else
                res.status(400).json({"success":false,'msg':'invalid operation'}); 
              }
            });
      }
    });
  // }		   
});

module.exports = router;