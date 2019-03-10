var express=require('express'),
    router=express.Router(),
    Product=require('../models/Product');
/* GET home page. */
router.get('/',function(req,res,next){
    /*Product.find('重庆川峰门业',function(err,data){
        console.log(err);
        console.log(data);
        res.render('index',{title:'fuckyou',err:err,data:data});
    })*/
    res.render('index',{title:'重庆川峰门业首页',datas:[
        {name:"重庆川峰门业",model:'01-0002',price:1578,src:"01"},
        {name:"重庆川峰门业",model:'01-0003',price:1088,src:"02"},
        {name:"重庆川峰门业",model:'02-0001',price:2288,src:"03"},
        {name:"重庆川峰门业",model:'02-0002',price:2548,src:"04"},
        {name:"重庆川峰门业",model:'02-0003',price:2388,src:"05"},
        {name:"重庆川峰门业",model:'03-0001',price:3988,src:"06"},
        {name:"重庆川峰门业",model:'03-0002',price:3588,src:"07"},
        {name:"重庆川峰门业",model:'03-0003',price:3228,src:"08"},
        {name:"重庆川峰门业",model:'03-0004',price:3988,src:"09"},
        {name:"重庆川峰门业",model:'03-0005',price:3588,src:"10"},
        {name:"重庆川峰门业",model:'03-0006',price:3228,src:"11"},
        {name:"重庆川峰门业",model:'03-0007',price:3228,src:"12"}



    ]});
});
module.exports=router;
