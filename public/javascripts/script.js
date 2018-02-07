$(document).ready(function(){
    $("#pic2").stop().mouseenter(function(){
        $(this).children("a.prve").animate({"left":"0"},600,'easeOutElastic');
    });
    $("#pic2").stop().mouseleave(function(){
        $(this).children("a.prve").animate({"left":"-100px"},600);
    });
    $("#pic2").stop().mouseenter(function(){
        $(this).children("a.next").animate({"right":"0"},600,'easeOutElastic');
    });
    $("#pic2").stop().mouseleave(function(){
        $(this).children("a.next").animate({"right":"-100px"},600);
    });
    $("#pic2").jCarouselLite({
        btnNext:"#pic2 .next",
        btnPrev:"#pic2 .prve",
        speed:2000,//滚动动画的时间
        auto:4000,//滚动间隔时间
        visible:1,
        onMouse:true,
        start:0,
        easing:"easeInOutBack",
        beforeStart:function(a){
            $(".pic_text").animate({"bottom":"-86px"},500);
        },
        afterEnd:function(a){
            $(".pic_text").animate({"bottom":"0"},500,'easeOutBack');
        }
    });
});

