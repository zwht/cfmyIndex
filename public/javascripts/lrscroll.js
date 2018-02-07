jQuery.extend(jQuery.easing,
    {
        easeOutElastic:function(x,t,b,c,d){
            var s=1.70158;
            var p=0;
            var a=c;
            if(t==0) return b;
            if((t/=d)==1) return b+c;
            if(!p) p=d*.3;
            if(a<Math.abs(c)){
                a=c;
                s=p/4;
            }
            else  s=p/(2*Math.PI)*Math.asin(c/a);
            return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b;
        },
        easeInOutBack:function(x,t,b,c,d,s){
            if(s==undefined) s=1.70158;
            if((t/=d/2)<1) return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;
            return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b;
        }
    });

(function($){
    $.fn.jCarouselLite=function(o){
        o=$.extend({
            btnPrev:null,
            btnNext:null,
            btnGo:null,
            mouseWheel:false,
            auto:null,
            onMouse:false,
            speed:200,
            easing:null,
            vertical:false,
            circular:true,
            visible:3,
            start:0,
            scroll:1,
            beforeStart:null,
            afterEnd:null
        },o||{});
        return this.each(function(){
            var running=false,animCss=o.vertical?"top":"left",sizeCss=o.vertical?"height":"width";
            var div=$(this),ul=$("ul",div),tLi=$("li",ul),tl=tLi.size(),v=o.visible;
            var TimeID=0;
            if(o.circular){
                ul.prepend(tLi.slice(tl-v-1+1).clone()).append(tLi.slice(0,v).clone());
                o.start+=v
            }
            var li=$("li",ul),itemLength=li.size(),curr=o.start;
            div.css("visibility","visible");
            li.css({overflow:"hidden","float":o.vertical?"none":"left"});
            ul.css({margin:"0",padding:"0",position:"relative","list-style-type":"none","z-index":"1"});
            div.css({overflow:"hidden",position:"relative","z-index":"2",left:"0px"});
            var liSize=o.vertical?height(li):width(li);
            var ulSize=liSize*itemLength;
            var divSize=liSize*v;
            li.css({width:li.width(),height:li.height()});
            ul.css(sizeCss,ulSize+"px").css(animCss,-(curr*liSize));
            div.css(sizeCss,divSize+"px");
            if(o.btnPrev){
                $(o.btnPrev).click(function(){
                    return go(curr-o.scroll)
                })
            }
            if(o.btnNext){
                $(o.btnNext).click(function(){
                    return go(curr+o.scroll)
                })
            }
            if(o.btnGo){
                $.each(o.btnGo,function(i,val){
                    $(val).click(function(){
                        return go(o.circular?o.visible+i:i)
                    })
                })
            }
            if(o.mouseWheel&&div.mousewheel){
                div.mousewheel(function(e,d){
                    return d>0?go(curr-o.scroll):go(curr+o.scroll)
                })
            }
            if(o.auto){
                TimeID=setInterval(function(){
                    go(curr+o.scroll)
                },o.auto+o.speed)
            }
            if(o.onMouse){
                $(this).mouseenter(function(){
                    if(o.auto){
                        clearInterval(TimeID)
                    }
                });
                $(this).mouseleave(function(){
                    if(o.auto){
                        TimeID=setInterval(function(){
                            go(curr+o.scroll)
                        },o.auto+o.speed)
                    }
                })
            }
            function vis(){
                return li.slice(curr).slice(0,v)
            }

            function go(to){
                if(!running){
                    if(o.beforeStart){
                        o.beforeStart.call(this,vis())
                    }
                    if(o.circular){
                        if(to<=o.start-v-1){
                            ul.css(animCss,-((itemLength-v*2)*liSize)+"px");
                            curr=to==o.start-v-1?itemLength-v*2-1:itemLength-v*2-o.scroll
                        }else{
                            if(to>=itemLength-v+1){
                                ul.css(animCss,-(v*liSize)+"px");
                                curr=to==itemLength-v+1?v+1:v+o.scroll
                            }else{
                                curr=to
                            }
                        }
                    }else{
                        if(to<0||to>itemLength-v){
                            return
                        }else{
                            curr=to
                        }
                    }
                    running=true;
                    ul.animate(animCss=="left"?{left:-(curr*liSize)}:{top:-(curr*liSize)},o.speed,o.easing,function(){
                        if(o.afterEnd){
                            o.afterEnd.call(this,vis())
                        }
                        running=false
                    });
                    if(!o.circular){
                        $(o.btnPrev+","+o.btnNext).removeClass("disabled");
                        $(curr-o.scroll<0&&o.btnPrev||curr+o.scroll>itemLength-v&&o.btnNext||[]).addClass("disabled")
                    }
                }
                return false
            }
        })
    };
    function css(el,prop){
        return parseInt($.css(el[0],prop))||0
    }
    function width(el){
        return el[0].offsetWidth+css(el,"marginLeft")+css(el,"marginRight")
    }
    function height(el){
        return el[0].offsetHeight+css(el,"marginTop")+css(el,"marginBottom")
    }
})(jQuery);
