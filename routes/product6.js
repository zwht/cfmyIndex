var express=require('express'),
    router=express.Router();
/* GET home page. */
router.get('/',function(req,res,next){
    res.render('product6',{title:'重庆川峰门业产品页面',err:"error",datas:[

        {name:"重庆川峰门业",model:'03-0006',price:3228,src:"0101"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0102"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0103"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0104"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0105"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0106"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0107"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0108"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0109"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0110"},
        {name:"重庆川峰门业",model:'03-0006',price:3228,src:"0111"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0112"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0113"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0114"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0115"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0116"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0117"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0118"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0119"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0120"}


    ]});
    /*Product.find('重庆川峰门业',function(err,data){
     console.log(err);
     console.log(data);
     res.render('product',{title:'fuckyou',err:err,data:data});
     })*/
});
module.exports=router;
