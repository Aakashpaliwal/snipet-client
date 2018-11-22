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
      con.execute("select calc_id,calc_name from calc",function(err,calcresult,fields)
      {
        con.release();
        if(err)
        {
          console.log(err);
          res.status(500).json({'success':false,msg: 'something went wrong'});
        }
        else
        { 
          console.log(calcresult);
          res.status(200).json({"success":true,'msg':'all calcs made by you ','calcdata':calcresult});    
        }      
      }); 
    }
  });         
});

module.exports = router;