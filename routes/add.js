var express=require('express'),
    router=express.Router(),
    Product=require('../models/Product');
/* GET home page. */
router.get('/',function(req,res,next){
    res.render('add',{title:'fuckyou'});


});
module.exports=router;
