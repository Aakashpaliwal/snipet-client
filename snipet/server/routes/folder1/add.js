var express = require('express');
var router = express.Router();
var pool = require('../db');


router.post('/',function(req, res, next) 
{
  console.log(req.body);
 //  req.check('table1','invalid table1').isLength({min:2,max:100});

 //  var verrs=req.validationErrors();
 //  if(verrs)
 //  {
 //  	res.status(500).json({ success:false,msg: verrs[0].msg,});
 //  }
	// else
	// {
		var table1 = 
  {
    a1:req.body.ui_a1,         
    a2:req.body.ui_a2,         
    a3:req.body.ui_a3,         
  };
  pool.getConnection(function(err,con)
  {
    if (err) {
      res.status(500).json({'success':false,'msg':'db connection failed'});
    } 
    else{
          // con.execute("select *  from table1 where table1=? and status=1",[table1.table1],function(err,result,fields)
  // {
      // con.release();
      // if(err)
      // {
      //     console.log(err);
      //     res.status(500).json({'success':false,'msg':'something went wrong'});
      // }
      // else if(result.length ==0)
      // {
    		var sql="Insert into table1 SET ? ;";
           con.query(sql,table1,function(err,result)
    	   {
    	   	con.release();
    		  if(err)
    		  {
    			  console.log(sql,err);
    			  res.status(500).json({success:false,msg: 'something went wrong',});
    	      }
    	    else
    	      {
    	     	 res.status(200).json({ success:true,msg: 'succesful entry', });
    	      }
          });
	     // }
      // else
      // { 
      //     res.status(500).json({success:true,msg:'table1 is already registered'}) ;    
      // }      
  // }); 
                      }               
      });
	// }	
});


module.exports = router;