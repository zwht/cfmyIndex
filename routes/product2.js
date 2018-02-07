var express=require('express'),
    router=express.Router();
/* GET home page. */
router.get('/',function(req,res,next){
    res.render('product2',{title:'重庆川峰门业产品页面',err:"error",datas:[
        {name:"重庆川峰门业",model:'03-0006',price:3228,src:"0021"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0022"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0023"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0024"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0025"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0026"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0027"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0028"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0029"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0030"},
        {name:"重庆川峰门业",model:'03-0006',price:3228,src:"0031"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0032"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0033"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0034"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0035"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0036"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0037"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0038"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0039"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0040"}

    ]});
    /*Product.find('重庆川峰门业',function(err,data){
     console.log(err);
     console.log(data);
     res.render('product',{title:'fuckyou',err:err,data:data});
     })*/
});
module.exports=router;
