var express = require('express');
var router = express.Router();

var pool = require('../db');

router.get('/',function(req, res, next) 
{
  pool.getConnection(function(err,con) {
    if(err){
      res.status(500).json({'success':false,'msg':'db connection failed'});
    }
    else
    {
      con.execute("select table1_id,a1,a2,a3 from table1 where status=1",function(err,table1result,fields)
      {
        con.release();
        if(err)
        {
          console.log(err);
          res.status(500).json({'success':false,msg: 'something went wrong'});
        }
        else
        { 
          console.log(table1result);
          res.status(200).json({"success":true,'msg':'all table1s made by you ','table1data':table1result});    
        }      
      }); 
    }
  });         
});

module.exports = router;