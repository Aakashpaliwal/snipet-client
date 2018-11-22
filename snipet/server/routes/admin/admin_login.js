var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');
var jwt = require('jsonwebtoken');
const secret = "supersecretkey";

router.get('/',func.auth2,func.admin);

router.post('/',function(req,res,next)
{
  console.log(req.body);
  if(func.isLogin)
  {   
    next();
  }
  else
  {
    //password regx check baki he
    req.checkBody('email','invalid email').isEmail()
    req.checkBody('password','invalid password').isLength({min:4,max:100});
     var verrs=req.validationErrors();
    if(verrs)
    {
      res.status(422).json({ success:false,msg: verrs[0].msg,});
    }
    else
    {
    var admin= 
    {
      email:req.body.email,
      password:req.body.password
    };
    con.query("select admin_id, admin_password  from admin where admin_status=1 and admin_email=?",admin.email,function(err,result,fields)
    {
        if(err)
        {
          console.log(err);
          res.status(500).json({'success':false,msg: 'something went wrong'});
        }
        else if(result.length===1)
        {
          if(edo.hashPassword(admin.password)===result[0].admin_password)
          {
            jwt.sign({aid :result[0].admin_id}, secret ,function(err, token)
            {
              if(err){
                console.log(err);
                res.status(500).json({"success":false,'msg':'system failure'});
              }
              else
              {
                console.log('first'+token);
                res.cookie('token',token, {maxAge: 5*60*1000, httpOnly: true });
                req.token = token;  
                next();
              }
            });
          }
          else
          {
            //wrong pass
            res.status(400).json({"success":false,'msg':'admin login page invalid admin name/password'});
          }     
        }
        else
        { 
            res.status(500).json({"success":false,'msg':'admin login page wrong email'});    
        }      
    });  
    }
  }        
},func.auth2,func.admin);

module.exports = router;