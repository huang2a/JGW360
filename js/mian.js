// search
$(function(){
  $("#searchSelected").click(function(){
    $("#searchTab").show();
    $(this).addClass("searchOpen");
  });

  $("#searchTab li").hover(function(){
    $(this).addClass("selected");
  },function(){
    $(this).removeClass("selected");
  });

  $("#searchTab li").click(function(){
    $("#searchSelected").html($(this).html());
    $("#searchTab").hide();
    $("#searchSelected").removeClass("searchOpen");
  });
});
// banner
$('.ck-slide').ckSlide({
    autoPlay: true,//默认为不自动播放，需要时请以此设置
    dir: 'x',//默认效果淡隐淡出，x为水平移动，y 为垂直滚动
    interval:3000//默认间隔2000毫秒
  });
// tab
$(function() {
  function tabs(tabTit, on, tabCon) {
    $(tabCon).each(function() {
      $(this).children().eq(0).show();
    });
    $(tabTit).each(function() {
      $(this).children().eq(0).addClass(on);
    });
    $(tabTit).children().hover(function() {
      $(this).addClass(on).siblings().removeClass(on);
      var index = $(tabTit).children().index(this);
      $(tabCon).children().eq(index).show().siblings().hide();
    });
  }
  tabs(".tab-hd-h", "active", ".tab-bd-h");
});
// marquee
$(function() {
  $('#roll-banner-marquee').marquee({
        auto: false,
        speed: 500,
        showNum: 3,
        stepLen: 1,
        prevElement: $('#roll-banner-next'),
        nextElement: $('#roll-banner-prev')
    });
  $('#roll-indexad1').marquee({
        auto: false,
        speed: 500,
        showNum: 1,
        stepLen: 1,
        prevElement: $('#roll-indexad-next1'),
        nextElement: $('#roll-indexad-prev1')
    });
  $('#roll-indexad2').marquee({
        auto: false,
        speed: 500,
        showNum: 1,
        stepLen: 1,
        prevElement: $('#roll-indexad-next2'),
        nextElement: $('#roll-indexad-prev2')
    });
  $('#roll-indexad3').marquee({
        auto: false,
        speed: 500,
        showNum: 1,
        stepLen: 1,
        prevElement: $('#roll-indexad-next3'),
        nextElement: $('#roll-indexad-prev3')
    });
  $('#roll-indexad4').marquee({
        auto: false,
        speed: 500,
        showNum: 1,
        stepLen: 1,
        prevElement: $('#roll-indexad-next4'),
        nextElement: $('#roll-indexad-prev4')
    });
  $('#roll-indexad5').marquee({
        auto: false,
        speed: 500,
        showNum: 1,
        stepLen: 1,
        prevElement: $('#roll-indexad-next5'),
        nextElement: $('#roll-indexad-prev5')
    });
  $('#roll-indexad6').marquee({
        auto: false,
        speed: 500,
        showNum: 1,
        stepLen: 1,
        prevElement: $('#roll-indexad-next6'),
        nextElement: $('#roll-indexad-prev6')
    });
  $('#gc-banner-marquee').marquee({
        auto: false,
        speed: 500,
        showNum: 4,
        stepLen: 1,
        prevElement: $('#gc-banner-next'),
        nextElement: $('#gc-banner-prev')
    });
  $('#qyk-banner-marquee').marquee({
        auto: false,
        speed: 500,
        showNum: 5,
        stepLen: 1,
        prevElement: $('#qyk-banner-next'),
        nextElement: $('#qyk-banner-prev')
    });
  $('#qyk1-banner-marquee').marquee({
        auto: false,
        speed: 500,
        showNum: 5,
        stepLen: 1,
        prevElement: $('#qyk1-banner-next'),
        nextElement: $('#qyk1-banner-prev')
    });
  $('#new-banner-marquee').marquee({
        auto: false,
        speed: 500,
        showNum: 1,
        stepLen: 1,
        prevElement: $('#new-banner-next'),
        nextElement: $('#new-banner-prev')
    });
});


//详细列表缓慢下拉效果
//1我要先获取所有的有子下拉菜单的元素  x
//2我要获取所有子下拉菜单  y
//3我要给所有x元素加上hover事件
//4我要做出一个函数  鼠标移到x上去就显示y 并且附加下拉的动画
//5我点击谁就把效果给哪个y
$(document).ready(function(){
  $(".scrollx").hover(function(){
    $(this).find(".scrolly").stop().slideDown("slow");
    $(this).find('.shouji').addClass('h');
  },function(){
    $(this).find(".scrolly").stop().slideUp("slow");
    $(this).find('.shouji').removeClass('h');
  });

});

//右侧从右边到左边效果
//我要获得最右边的小图标
//再获得要动的元素
//给他们分别设置width到100%动画

$(document).ready(function(){

  $('#right_float .yidong').hover(function(){

    $(this).find('.l_rw').stop().animate({
      'width':'60px'
    },400);
  },function(){
    $(this).find('.l_rw').stop().animate({
      'width':'0px'
    },400);
    });
});
$(document).ready(function(){

  $('#right_float .yidong').hover(function(){

    $(this).find('.l_rw3').stop().animate({
      'width':'132px'
    },400);
  },function(){
    $(this).find('.l_rw3').stop().animate({
      'width':'0px'
    },400);
    });
});
$(document).ready(function(){

  $('#right_float .yidong').hover(function(){

    $(this).find('.l_rw2').stop().animate({
      'width':'75px'
    },400);
  },function(){
    $(this).find('.l_rw2').stop().animate({
      'width':'0px'
    },400);
    });
});


$(document).ready(function() {
  $('#scrollUp').click(function (e) {
    e.preventDefault();
    $('html,body').animate({ scrollTop:0});
  });
});

$(document).ready(function(){
//  var topMain=$("#charact").offset().top;
//  alert(topMain);
  var Logo=$("#layout_float_nav");
  $(window).scroll(function(){
    if($(window).scrollTop()>500){
      Logo.addClass("ScrollNav");
    }else{
      Logo.removeClass("ScrollNav");}
  });

});


