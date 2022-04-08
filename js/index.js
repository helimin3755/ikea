$(function(){
    //0.header
    $(".nav>li:nth-child(1)").on("click",function(){
        var location = $(".title1").offset();
        $("html, body").animate({scrollTop: location.top}, 400);
    })
    $(".nav>li:nth-child(2)").on("click",function(){
        var location = $(".title2").offset();
        $("html, body").animate({scrollTop: location.top}, 600);
    })
    $(".nav>li:nth-child(3)").on("click",function(){
        var location = $(".title3").offset();
        $("html, body").animate({scrollTop: location.top}, 700);
    })

    //1.mainBanner video play
    // $("#videoBox").on("mouseover",function(){
    //     $(this).get(0).play();
    // })
    // $("#videoBox").on("mouseout", function(){
    //     $(this).get(0).pause();
    // })
    $("#videoBox").on("mouseenter",function(){
        $(this).get(0).play();
        $(this).prop("muted",true);
        var promise = document.querySelector('video').play();

        if (promise !== undefined) {
          promise.then(_ => {
            // Autoplay started!
            $("#videoBox").get(0).play();
          }).catch(error => {           
            // Autoplay was prevented.
            // Show a "Play" button so that user can start playback.
          });
        }
        // console.log("df")
        // $("#videoBox").get(0).play();
        // console.log($(this))
    })
    
    //2.sidemenu
    $(".arrow").on("click", function(){
        $(".snbWrap").css({
            "right":"0%",
            "transition":".8s all"
        });
    });
    $(".close").on("click", function(){
        $(".snbWrap").css({
            "right":"-200%",
            "transition":"2s all"
        });
    })


    $(window).scroll( function(){
        var scrollValue = $(window).scrollTop();
        //console.log(scrollValue)
        if(scrollValue>100){
            $(".pic>li:nth-child(1)>a>img").stop().delay(0).animate({
                "opacity":"1",
                "transition":"1s all linear"
            },1000)
            $(".pic>li:nth-child(2)>a>img").stop().delay(200).animate({
                "opacity":"1",
                "transition":"1s all linear"
            },1500)
            $(".pic>li:nth-child(3)>a>img").stop().delay(400).animate({
                "opacity":"1",
                "transition":"1s all linear"
            },2000)
            $(".pic>li:nth-child(4)>a>img").stop().delay(600).animate({
                "opacity":"1",
                "transition":"1s all linear"
            },2500)
        }
    });



    //3. newGoods mobile
    $(".pager>li").on("click", function(){
        Num = $(this).index();
        $(".pager>li").eq(Num).addClass("active").siblings().removeClass("active");
    })
    $(".pager>li:nth-child(1)").on("click", function(){
        $(".pic").css({
            "margin-left":"0",
            "transition":"1s"
        })
    })
    $(".pager>li:nth-child(2)").on("click", function(){
        $(".pic").css({
            "margin-left":"-100%",
            "transition":"1s"
        })
    })
    

    //4.showRoomWrap
    var Num = 0;
    $(".button>li").on("click", function(){
        Num = $(this).index();
        $(".button>li").eq(Num).addClass("active").siblings().removeClass("active");
        $(".showPic>li").eq(Num).fadeIn(500).siblings().fadeOut(500);
    })

    //5.saleWrap
    
    //6.mfoot
    // let ham=0;
    // $(".hamburger-botton").click(function(){
    //     if(ham==0){
    //         $(".nav_mob").css("left","0px"),
    //         ham=1
    //     } else if (ham=1){
    //         $(".nav_mob").css("left","-767px")
    //         ham=0
    //     }
    //     $(this).toggleClass("active")
    // })

    $(".minnerBox>li>a").click(function(){
        $(this).next().slideToggle(400)
            .parent()
            .siblings()
            .children(".submenu").slideUp(400)
    })

})