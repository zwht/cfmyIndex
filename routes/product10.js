var express=require('express'),
    router=express.Router();
/* GET home page. */
router.get('/',function(req,res,next){
    res.render('product10',{title:'重庆川峰门业产品页面',err:"error",datas:[




    ]});
    /*Product.find('重庆川峰门业',function(err,data){
     console.log(err);
     console.log(data);
     res.render('product',{title:'fuckyou',err:err,data:data});
     })*/
});
module.exports=router;
