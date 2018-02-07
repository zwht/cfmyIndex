var express=require('express'),
    router=express.Router();
/* GET home page. */
router.get('/',function(req,res,next){
    res.render('product1',{title:'重庆川峰门业产品页面',err:"error",datas:[
        {name:"重庆川峰门业",model:'01-0002',price:1578,src:"0001"},
        {name:"重庆川峰门业",model:'01-0003',price:1088,src:"0002"},
        {name:"重庆川峰门业",model:'02-0001',price:2288,src:"0003"},
        {name:"重庆川峰门业",model:'02-0002',price:2548,src:"0004"},
        {name:"重庆川峰门业",model:'02-0003',price:2388,src:"0005"},
        {name:"重庆川峰门业",model:'03-0001',price:3988,src:"0006"},
        {name:"重庆川峰门业",model:'03-0002',price:3588,src:"0007"},
        {name:"重庆川峰门业",model:'03-0003',price:3228,src:"0008"},
        {name:"重庆川峰门业",model:'03-0004',price:3988,src:"0009"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0010"},
        {name:"重庆川峰门业",model:'03-0006',price:3228,src:"0011"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0012"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0013"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0014"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0015"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0016"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0017"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0018"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0019"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"0020"}


    ]});
    /*Product.find('重庆川峰门业',function(err,data){
        console.log(err);
        console.log(data);
        res.render('product',{title:'fuckyou',err:err,data:data});
    })*/
});
module.exports=router;
