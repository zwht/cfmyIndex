var express=require('express'),
    router=express.Router();
/* GET home page. */
router.get('/',function(req,res,next){
    res.render('product3',{title:'重庆川峰门业产品页面',err:"error",datas:[

        {name:"重庆川峰门业",model:'03-0006',price:3228,src:"0041"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0042"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0043"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0044"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0045"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0046"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0047"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0048"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0049"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0050"},
        {name:"重庆川峰门业",model:'03-0006',price:3228,src:"0051"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0052"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0053"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0054"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0055"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0056"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0057"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0058"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0059"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0060"}


    ]});
    /*Product.find('重庆川峰门业',function(err,data){
     console.log(err);
     console.log(data);
     res.render('product',{title:'fuckyou',err:err,data:data});
     })*/
});
module.exports=router;
