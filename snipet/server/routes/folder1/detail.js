var express = require('express');
var router = express.Router();

var pool = require('../db');

router.get('/:ui_id',function(req, res, next) 
{


  pool.getConnection(function(err,con) {
    if(err){
      res.status(500).json({'success':false,'msg':'db connection failed'});
    }
    else
    {
      con.execute("select table1_id,a1,a2,a3 from table1 where status=1 and table1_id=?",[req.params.ui_id],function(err,table1result,fields)
      {
        con.release();
        if(err)
        {
          console.log(err);
          res.status(500).json({'success':false,msg: 'something went wrong'});
        }
        else
        { 
          // console.log(table1result);
          if(table1result.length==1)
          res.status(200).json({"success":true,'msg':' table1 detail ','table1data':table1result[0]});
          else
          res.status(400).json({"success":false,'msg':'empty data'});

        }      
      }); 
    }
  });         
});

module.exports = router;