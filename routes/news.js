var express=require('express'),
    router=express.Router();
/* GET home page. */
router.get('/',function(req,res,next){

    res.render('news',{title:'重庆川峰门业新闻列表',datas:[
        /*{
            name:"重庆川峰门业作息时间",
            context:"采取简单家具，是空间点击付款，是开机即可，开始就喜欢就好是可靠的，开始加快开发上看到",
            time:"2015-05-01",
            src:"2222"
        },
        {
            name:"重庆川峰门业作息时间",
            context:"采取简单家具，是空间点击付款，是开机即可，开始就喜欢就好是可靠的，开始加快开发上看到",
            time:"2015-05-01",
            src:"2222"
        },
        {
            name:"重庆川峰门业作息时间",
            context:"采取简单家具，是空间点击付款，是开机即可，开始就喜欢就好是可靠的，开始加快开发上看到",
            time:"2015-05-01",
            src:"2222"
        },
        {
            name:"重庆川峰门业作息时间",
            context:"采取简单家具，是空间点击付款，是开机即可，开始就喜欢就好是可靠的，开始加快开发上看到",
            time:"2015-05-01",
            src:"2222"
        }
*/



    ]});
});
module.exports=router;
