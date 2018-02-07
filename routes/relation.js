var express=require('express'),
    router=express.Router();
/* GET home page. */
router.get('/',function(req,res,next){

    res.render('relation',{title:'重庆川峰门业联系我们',datas:[
        {
            name:"重庆川峰门业作息时间",
            context:"采取简单家具，是空间点击付款，是开机即可，开始就喜欢就好是可靠的，开始加快开发上看到",
            time:"2015-05-01"
        },
        {
            name:"重庆川峰门业作息时间",
            context:"采取简单家具，是空间点击付款，是开机即可，开始就喜欢就好是可靠的，开始加快开发上看到",
            time:"2015-05-01"
        },
        {
            name:"重庆川峰门业作息时间",
            context:"采取简单家具，是空间点击付款，是开机即可，开始就喜欢就好是可靠的，开始加快开发上看到",
            time:"2015-05-01"
        },
        {
            name:"重庆川峰门业作息时间",
            context:"采取简单家具，是空间点击付款，是开机即可，开始就喜欢就好是可靠的，开始加快开发上看到",
            time:"2015-05-01"
        }




    ]});
});
module.exports=router;
