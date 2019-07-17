/* 顶部导航栏 */
$(function(){
  $(window).on("scroll",function(){
    var opacity = 0;
    //console.log($(document));
    //console.log($(document).scrollTop());
    if($(document).scrollTop() < $(".MYcarousel").height()){
      opacity = 0.4*(0.4+$(document).scrollTop() /$(".MYcarousel").height());
      $(".MYnavbar0").css("background-color","rgba(0,0,0,"+opacity+")");
      //console.log("aa");
    }
  });
});

/* 轮播图 */
$('.MYcarousel').carousel({
    interval: 6000
  })

/* 人物介绍 - 入场动画*/
$(function() {
  $('#xswl1').scrollspy({
    animation: 'slide-left',
    delay: 0
  })
  $('#xswl2').scrollspy({
    animation: 'slide-right',
    delay: 0
  })
});
$(function() {
  $('#aswl1').scrollspy({
    animation: 'slide-right',
    delay: 0
  })
  $('#aswl2').scrollspy({
    animation: 'slide-left',
    delay: 0
  })
});

/* 移动端情节概要 */
var nav = document.getElementById('collapse-nav');
var tabs = nav.children;
var div = document.getElementsByClassName('am-tab-panel');

function show(a) {
    return function() {
        for(var j = 0; j<div.length; j++) {
            if(j != a) {
               div[j].classList.remove("am-active","am-in");
            }else{
                div[j].classList.add("am-active","am-in");
                
            }
        }
    }
}

for(var i = 0; i<tabs.length; i++) {
  tabs[i].onclick = show(i);
}