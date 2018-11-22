var express = require('express');
var router = express.Router();
var pool = require('../db');


router.post('/',function(req, res, next) 
{
  console.log(req.body);
 //  req.check('calc','invalid calc').isLength({min:2,max:100});

 //  var verrs=req.validationErrors();
 //  if(verrs)
 //  {
 //  	res.status(500).json({ success:false,msg: verrs[0].msg,});
 //  }
	// else
	// {
		var calc = 
  {
    calc_name:req.body.ui_calc_name,         
    calc_value:req.body.ui_calc_value,         
  };
  pool.getConnection(function(err,con)
  {
    if (err) {
      res.status(500).json({'success':false,'msg':'db connection failed'});
    } 
    else{
          // con.execute("select *  from calc where calc=? and status=1",[calc.calc],function(err,result,fields)
  // {
      // con.release();
      // if(err)
      // {
      //     console.log(err);
      //     res.status(500).json({'success':false,'msg':'something went wrong'});
      // }
      // else if(result.length ==0)
      // {
    		var sql="Insert into calc SET ? ;";
           con.query(sql,calc,function(err,result)
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
      //     res.status(500).json({success:true,msg:'calc is already registered'}) ;    
      // }      
  // }); 
                      }               
      });
	// }	
});


module.exports = router;