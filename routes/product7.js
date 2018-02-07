var express=require('express'),
    router=express.Router();
/* GET home page. */
router.get('/',function(req,res,next){
    res.render('product7',{title:'重庆川峰门业产品页面',err:"error",datas:[

        {name:"重庆川峰门业",model:'03-0006',price:3228,src:"0121"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0122"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0123"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0124"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0125"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0126"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0127"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0128"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0129"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0130"},
        {name:"重庆川峰门业",model:'03-0006',price:3228,src:"0131"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0132"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0133"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0134"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0135"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0136"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0137"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0138"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0139"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0140"}


    ]});
    /*Product.find('重庆川峰门业',function(err,data){
     console.log(err);
     console.log(data);
     res.render('product',{title:'fuckyou',err:err,data:data});
     })*/
});
module.exports=router;
