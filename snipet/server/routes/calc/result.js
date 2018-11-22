var express = require('express');
var router = express.Router();

var pool = require('../db');

router.post('/',function(req, res, next) 
{
  console.log(req.body);
  var ui_arr=req.body.ui_arr;
  var srr=new Array();
  var sql="";
     for( let i=0;i<ui_arr.length;i++){
             sql=sql+"select calc_id,calc_value from calc where calc_id=?;"
             srr[i]=ui_arr[i].ui_id;  
             console.log(srr[i]);
          }
  pool.getConnection(function(err,con) {
    if(err){
      res.status(500).json({'success':false,'msg':'db connection failed'});
    }
    else
    {
      con.query(sql,srr,function(err,calcresults,fields)
      {
        con.release();
        if(err)
        {
          console.log(err);
          res.status(500).json({'success':false,msg: 'something went wrong'});
        }
        else
        { 
          
          var sum=0;
          for (var j = 0; j < ui_arr.length; j++) {
            if(calcresults[j].length===1)
            if(ui_arr[j].ui_id === calcresults[j][0].calc_id)
            {console.log(calcresults[j][0]);
              sum=sum+ui_arr[j].ui_value*calcresults[j][0].calc_value;}
          };
          res.status(200).json({"success":true,'msg':'final result ','calcdata':sum});    
        }      
      }); 
    }
  });         
});

module.exports = router;