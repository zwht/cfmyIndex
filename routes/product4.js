var express=require('express'),
    router=express.Router();
/* GET home page. */
router.get('/',function(req,res,next){
    res.render('product4',{title:'重庆川峰门业产品页面',err:"error",datas:[

        {name:"重庆川峰门业",model:'03-0006',price:3228,src:"0061"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0062"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0063"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0064"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0065"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0066"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0067"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0068"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0069"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0070"},
        {name:"重庆川峰门业",model:'03-0006',price:3228,src:"0071"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0072"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0073"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0074"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0075"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0076"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0077"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0078"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0079"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0080"}


    ]});
    /*Product.find('重庆川峰门业',function(err,data){
     console.log(err);
     console.log(data);
     res.render('product',{title:'fuckyou',err:err,data:data});
     })*/
});
module.exports=router;
