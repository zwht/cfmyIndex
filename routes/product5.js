var express=require('express'),
    router=express.Router();
/* GET home page. */
router.get('/',function(req,res,next){
    res.render('product5',{title:'重庆川峰门业产品页面',err:"error",datas:[

        {name:"重庆川峰门业",model:'03-0006',price:3228,src:"0081"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0082"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0083"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0084"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0085"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0086"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0087"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0088"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0089"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0090"},
        {name:"重庆川峰门业",model:'03-0006',price:3228,src:"0091"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0092"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0093"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0094"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0095"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0096"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0097"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0098"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0099"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0100"}


    ]});
    /*Product.find('重庆川峰门业',function(err,data){
     console.log(err);
     console.log(data);
     res.render('product',{title:'fuckyou',err:err,data:data});
     })*/
});
module.exports=router;
