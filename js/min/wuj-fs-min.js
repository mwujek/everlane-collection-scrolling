$(document).ready(function(){function e(e){console.log("nav"),$("nav").addClass("hide-up"),t.addClass("active-menu-btn"),$("#cross").addClass("active-cross-btn")}var t=$("#mobile-menu"),o=$("#drop-menu"),i=$("#exit"),n=$("#cross"),a=$("#container-scroll"),r=$("#shopping-container"),c=document.getElementById("everland-vid"),s=$("#toggle-section"),d=$(".container"),l=d.innerHeight()+10,g=$("#petra img"),u=$(window).height(),m=$(window).width(),p=500,v="#977144",w=new ScrollMagic.Controller({container:".scroller"}),T=new TimelineMax,y=TweenMax.to("#pin",200,{opacity:1}),h=TweenMax.to("#pin",50,{opacity:1}),M=TweenMax.to("#pin",300,{opacity:0});T.add(y).add(h).add(M);var x=new TimelineMax,y=TweenMax.to("#right-side",200,{opacity:1}),h=TweenMax.to("#right-side",50,{opacity:1}),M=TweenMax.to("#right-side",300,{opacity:0});x.add(y).add(h).add(M);var f=new TimelineMax,b=TweenMax.to("#pin2",200,{opacity:1}),k=TweenMax.to("#pin2",50,{opacity:1}),C=TweenMax.to("#pin2",300,{opacity:0});f.add(b).add(k).add(C);var S=new TimelineMax,b=TweenMax.to("#right-side2",200,{opacity:1}),k=TweenMax.to("#right-side2",50,{opacity:1}),C=TweenMax.to("#right-side2",300,{opacity:0});S.add(b).add(k).add(C);var H=new TimelineMax,b=TweenMax.to("#pin3",200,{opacity:1}),k=TweenMax.to("#pin3",50,{opacity:1}),C=TweenMax.to("#pin3",300,{opacity:1});H.add(b).add(k).add(C);var E=new TimelineMax,b=TweenMax.to("#right-side3",200,{opacity:1}),k=TweenMax.to("#right-side3",50,{opacity:1}),C=TweenMax.to("#right-side3",300,{opacity:1});E.add(b).add(k).add(C);var W=new ScrollMagic.Scene({triggerElement:"#trigger1",duration:800}).setTween(x).addTo(w),A=new ScrollMagic.Scene({triggerElement:"#trigger1",duration:800}).setTween(T).addTo(w),B=new ScrollMagic.Scene({triggerElement:"#trigger2",duration:800}).setTween(S).addTo(w),I=new ScrollMagic.Scene({triggerElement:"#trigger2",duration:800}).setTween(f).addTo(w),N=new ScrollMagic.Scene({triggerElement:"#trigger3",duration:800}).setTween(E).addTo(w),P=new ScrollMagic.Scene({triggerElement:"#trigger3",duration:800}).setTween(H).addTo(w),V=new ScrollMagic.Scene({triggerElement:"#triggerNav",duration:800,triggerHook:0}).on("enter",e).addTo(w),j=new TimelineMax,q=TweenMax.to("#home-copy",200,{opacity:0});j.add(q);var z=new ScrollMagic.Scene({triggerElement:"#triggerHome",duration:p,triggerHook:0}).setTween(j).addTo(w),D=new TimelineMax,q=TweenMax.to("#home",200,{backgroundColor:v}),y=TweenMax.to("#about-copy",200,{opacity:1});D.add(q).add(y);var z=new ScrollMagic.Scene({triggerElement:"#aboutStart",duration:p,triggerHook:0}).setTween(D).addTo(w),F=new TimelineMax,q=TweenMax.to("#about-copy",200,{opacity:0}),y=TweenMax.to("#video",200,{opacity:1});F.add(q).add(y);var G=new ScrollMagic.Scene({triggerElement:"#triggerVideo",duration:p,triggerHook:0}).setTween(F).on("enter",function(e){c.play(),console.log("enter video"),$("#mobile-menu").removeClass("dark-nav-item"),$("#cross").removeClass("dark-nav-item")}).on("progress",function(e){console.log(e.progress),1===e.progress?$("#home").css("background-color","#f7f7f7"):$("#home").css("background-color",v)}).on("leave",function(e){console.log("leave video")}).addTo(w),J=new TimelineMax,q=TweenMax.to("#video",200,{opacity:0}),y=TweenMax.to(".item-row",200,{opacity:1});J.add(q).add(y);var K=new ScrollMagic.Scene({triggerElement:"#triggerProducts",duration:p,triggerHook:0}).setTween(J).on("enter",function(e){$("#mobile-menu").removeClass("dark-nav-item"),$("#cross").removeClass("dark-nav-item")}).on("leave",function(e){console.log("leave products"),$("#mobile-menu").toggleClass("dark-nav-item"),$("#cross").toggleClass("dark-nav-item")}).addTo(w),L=new TimelineMax,q=TweenMax.to(".item-row",200,{opacity:0}),y=TweenMax.to("#home",200,{backgroundColor:"#333"}),h=TweenMax.to("#about2-section",200,{opacity:1});L.add(q).add(y).add(h);var K=new ScrollMagic.Scene({triggerElement:"#triggerAbout2",duration:p,triggerHook:0}).setTween(L).on("enter",function(e){$("#mobile-menu").removeClass("dark-nav-item"),$("#cross").removeClass("dark-nav-item")}).on("leave",function(e){$("#mobile-menu").removeClass("dark-nav-item"),$("#cross").removeClass("dark-nav-item")}).addTo(w),O=new TimelineMax,q=TweenMax.to("#about2-section",200,{opacity:0}),y=TweenMax.to("#home",200,{backgroundColor:v}),h=TweenMax.to("#shop-now",200,{opacity:1});O.add(q).add(y).add(h);var K=new ScrollMagic.Scene({triggerElement:"#triggerShop",duration:p,triggerHook:0}).setTween(O).on("enter",function(e){console.log("start")}).addTo(w);t.click(function(){o.toggleClass("active-drop-menu"),t.toggleClass("active-menu-btn"),i.toggleClass("active-exit"),$("#cross").toggleClass("cross-dark")}),i.click(function(){o.toggleClass("active-drop-menu"),t.toggleClass("active-menu-btn"),i.toggleClass("active-exit"),$("#cross").toggleClass("cross-dark")}),n.click(function(){console.log("asd"),r.velocity({opacity:1},{duration:1e3,begin:function(){r.css("visibility","visible"),t.removeClass("active-menu-btn"),$("#cross").removeClass("active-cross-btn")},complete:function(){$(".inside-scroll").velocity("scroll",{container:$(".scroller"),duration:0,offset:0})}}),a.velocity({height:0},{duration:1e3,delay:100,begin:function(){r.css("display","block")},complete:function(){setTimeout(function(){$("#home2 h1").velocity({opacity:1},{duration:500})},200),setTimeout(function(){$("#home2 h2").velocity({opacity:1},{duration:500})},800),setTimeout(function(){g.velocity({opacity:1},{duration:500,visibility:"visible"})},1600),$("h1.starters").velocity({opacity:0},{duration:100}),$("h2.starters").velocity({opacity:0},{duration:100})}})}),s.click(function(){console.log("lets go"),a.velocity({height:u},{duration:1e3,begin:function(){},complete:function(){t.addClass("active-menu-btn"),$("#cross").addClass("active-cross-btn"),r.css("display","none"),g.velocity({opacity:0},{duration:300,visibility:"hidden"}),$("#home2 h1").velocity({opacity:0},{duration:300}),$("#home2 h2").velocity({opacity:0},{duration:300}),setTimeout(function(){$("h1.starters").velocity({opacity:1},{duration:500}),setTimeout(function(){$("h2.starters").velocity({opacity:1},{duration:500})},300)},600)}})}),s.hover(function(){s.velocity({backgroundColor:"#aaa"},{duration:300})},function(){s.velocity({backgroundColor:"#ccc"},{duration:300})});var Q=(m-$("#item-container").innerWidth())/2,R=(u-$("#item-container").innerHeight())/2;console.log(R),$("#item-container").css({left:Q+"px",top:R+"px"}),$(".centered-div").each(function(){var e=$(this).parent(),t=e.innerHeight(),o=$(this).innerHeight();thisWidth=$(this).innerWidth(),$(this).css({top:(t-o)/2+"px",left:(m-thisWidth)/2+"px"})}),$(".item-row").each(function(){var e=$(this).parent(),t=e.innerHeight(),o=$(this).innerHeight();$(this).css("top",(t-o)/2+"px")}),$("#pin, #pin2, #pin3, .right-description").each(function(){var e=$(this).parent(),t=e.innerHeight(),o=$(this).innerHeight();$(this).css("top",(t-o)/2+"px")}),setTimeout(function(){$("h1.starters").velocity({opacity:1},{duration:500}),setTimeout(function(){$("h2.starters").velocity({opacity:1},{duration:500})},500)},600)});