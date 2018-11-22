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
      con.execute("select count(question_id),question_id,question,a1,a2,a3,a4,ra from question group by question_id ",function(err,questionresult,fields)
      {
        con.release();
        if(err)
        {
          console.log(err);
          res.status(500).json({'success':false,msg: 'something went wrong'});
        }
        else
        { 
          console.log(questionresult);
          res.status(200).json({"success":true,'msg':'all questions made by you ','questiondata':questionresult});    
        }      
      }); 
    }
  });         
});

module.exports = router;