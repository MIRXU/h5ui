$(function(){
    let width=$(window).width()
    let height=$(window).height()
    let interval=null
    $(".main").css({"width":width+"px","height":height+"px"})
   

    $("table tr>td").click(function(){
        
        $(".content").html("")
        $(".content").append($("<div></div>").addClass("content-info"))
        let title=$(this).find("span").html()
        $(".content").show(2000)
            let ran1=Math.random()*100+"%"
            let ran2=Math.random()*100+"%"
            $(".content").append($("<img/>").css({"width":"40px","height":"40px","position": "absolute","top":ran1,"left":ran2,"z-index":88}).attr({"src":"./imgs/heart.svg"}).addClass("scan"))
            
            let ran3=Math.random()*100+"%"
            let ran4=Math.random()*100+"%"
            $(".content").append($("<img/>").css({"width":"40px","height":"40px","position": "absolute","top":ran3,"left":ran4,"z-index":88}).attr({"src":"./imgs/heart.svg"}).addClass("scan"))
            let ran5=Math.random()*100+"%"
            let ran6=Math.random()*100+"%"
            $(".content").append($("<img/>").css({"width":"40px","height":"40px","position": "absolute","top":ran5,"left":ran6,"z-index":88}).attr({"src":"./imgs/heart.svg"}).addClass("scan"))
            let ran7=Math.random()*100+"%"
            let ran8=Math.random()*100+"%"
            $(".content").append($("<img/>").css({"width":"40px","height":"40px","position": "absolute","top":ran7,"left":ran8,"z-index":88}).attr({"src":"./imgs/heart.svg"}).addClass("scan"))
        $(".content-info").append($("<h3></h3>").html(title))
        $(".heart").animate({
            left: '-=300',
            top:'-=100'
        }, 500);
        $("table tr>td").fadeOut(2000);
       if(title=="爱情"){
        setBack("nav1.png")
        $(".content-info").append($("<p></p>").css({"font-size":"18px","text-indent":"2em","margin-top":"10px"}).html("我们要走到最后，要相濡以沫，要携手终身，我怀着这样的心情和你在一起，就是为了到花甲之年，依然有句，我爱你。")).append($("<p></p>").css({"text-align":"right","margin-right":"40px","margin-top":"20px"}).html("给"+"：心爱的"))
       }else if(title=="沙漏"){

        setBack("nav6.png")
            let days=DateDiff("2018-12-01",getNewDate())
            let days1= "<span style='font-size:25px;color:red'>"+days+"</span>"
            interval=setInterval(function(){
                $(".content-info").html("")
                $(".content-info").append($("<h3></h3>").html(title))
                $(".content-info")
                .append($("<p></p>").html("你知道我爱你有多久了吗？"))
                .append($("<img></img>").attr("src","./imgs/1.gif"))
                .append($("<img></img>").attr("src","./imgs/2.gif").css("margin-left","60px"))
                .append($("<p></p>").css({"margin-top":"20px"}).html("<span style='font-size:25px;color:red'>爱</span>：已经"+days1+"天"+getNewTime()+"了"))
                .append($("<p></p>").css({"text-align":"right","margin-right":"70px"}).html("by:<span style='font-size:25px;color:red'>亲爱的</span>"))
            },1000)
       }else if(title=="记事"){
        setBack("nav2.png")
        $(".content-info").append($("<p></p>").css({"font-size":"18px","text-indent":"2em","margin-top":"10px"}).html("2018年12月25我们第一次相见，那天很冷！，你的脸蛋红彤彤的。。。")).append($("<p></p>").css({"text-align":"right","margin-right":"40px","margin-top":"20px"}).html("给"+"：心爱的"))
       }else if(title=="相册"){
        setBack("nav5.png")
        let url=[
            "./imgs/a.jpg",
            "./imgs/b.jpg",
            "./imgs/c.jpg",
            "./imgs/d.jpg",
            "./imgs/e.jpg",
            "./imgs/f.jpg",
            "./imgs/g.jpg"
        ]
        $(".content-info").css({"background-image":"url("+url[0]+")","background-size":"100%"})
        let i=0
        interval=setInterval(function(){
            $(".content-info").fadeIn(3000)
            $(".content-info").css({"background-image":"url("+url[i]+")","background-size":"100%"})
            $(".content-info").fadeOut(3000)
            i++;
            if(i>url.length){
                i=0
            }
        },3000)
       }else if(title=="絮叨"){
        setBack("nav3.png")
        $(".content-info").append($("<p></p>").css({"font-size":"18px","text-indent":"2em","margin-top":"10px"}).html("若是闲来无事，到我这里来@！")).append($("<p></p>").css({"text-align":"right","margin-right":"40px","margin-top":"20px"}).html("给"+"：心爱的"))
       }else if(title=="留言"){
        setBack("nav4.png")
        $(".content-info").append($("<p></p>").css({"font-size":"18px","text-indent":"2em","margin-top":"10px"}).html("你若安好，便是晴天！")).append($("<p></p>").css({"text-align":"right","margin-right":"40px","margin-top":"20px"}).html("给"+"：心爱的"))
       }


    })
    $(".nav>span").click(function(){
        clearInterval(interval);
        $(".content-info").css({"background-image":"","background-size":"100%"}).html()
        $(".heart").animate({
            left: '50%',
            top:'50%'
        }, 500);
        $(".content").hide(2000)
        $(".nav").hide(2000)
        $.each($("table tr>td"),function(index,item){
            $(item).fadeIn(index*3000);
        })
        
    })
})  //4008210742
function setBack(url){
    $(".nav").show(500)
    $(".nav").animate({
        left: '68%',
        top:'52%'
    },2000);
    $(".nav").attr({"src":"./imgs/"+url})
}
//计算天数差
function  DateDiff(sDate1,  sDate2){    //sDate1和sDate2是xxxx-xx-xx格式  
           var  aDate,  oDate1,  oDate2,  iDays  
           aDate  =  sDate1.split("-")  
           oDate1  =  new  Date(aDate[1]  +  '-'  +  aDate[2]  +  '-'  +  aDate[0])    //转换为xx-xx-xxxx格式  
           aDate  =  sDate2.split("-")  
           oDate2  =  new  Date(aDate[1]  +  '-'  +  aDate[2]  +  '-'  +  aDate[0])  
           iDays  =  parseInt(Math.abs(oDate1  -  oDate2)  /  1000  /  60  /  60  /24)    //把相差的毫秒数转换为天数  
           return  iDays  
}  
/**
 * 获取当前时分秒
 */
function getNewTime() {
    var time = new Date()
    let hour = time.getHours()
    let minute = time.getMinutes()
    let second = time.getSeconds()
  
    if (hour < 10) {
        hour = "0" + hour
    }
    if (minute < 10) {
        minute = "0" + minute
    }
    if (second < 10) {
        second = "0" + second
    }
    return hour + "小时" + minute + "分" + "<span style='font-size:22px;color:red'>"+second+"</span>秒"
}
/**
 * 获取当前时间
 */
function getNewDate(){
    var time = new Date()
    let year = time.getFullYear()
    let month = (time.getMonth() + 1)
    let day = time.getDate()
    if (month < 10) {
        month = "0" + month
    }
    if (day < 10) {
        day = "0" + day
    }
    return year + "-" + month + "-" + day
}