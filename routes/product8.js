var express=require('express'),
    router=express.Router();
/* GET home page. */
router.get('/',function(req,res,next){
    res.render('product8',{title:'重庆川峰门业产品页面',err:"error",datas:[

        {name:"重庆川峰门业",model:'03-0006',price:3228,src:"0141"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0142"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0143"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0144"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0145"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0146"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0147"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0148"}


    ]});
    /*Product.find('重庆川峰门业',function(err,data){
     console.log(err);
     console.log(data);
     res.render('product',{title:'fuckyou',err:err,data:data});
     })*/
});
module.exports=router;
