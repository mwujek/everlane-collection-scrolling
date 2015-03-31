///*jshint devel:true */

$(document).ready(function(){

	var $menuBtn = $('#mobile-menu'),
	$dropMenu = $('#drop-menu'),
	$exit = $('#exit'),
	$cross = $('#cross'),
	$experienceContainer = $('#container-scroll'),
	$shoppingContainer = $('#shopping-container'),
	vid = document.getElementById("everland-vid"),
	$toggleSection = $('#toggle-section'),
	$lookbook = $('.container'),
	lookbookHeight = $lookbook.innerHeight() + 10,
	$petra = $('#petra img'),
	windowHeight = $( window ).height(),
	windowWidth = $( window ).width();


var fadeDuration = 500;
var accentColor = '#977144';

// Init ScrollMagic Controller
var controller = new ScrollMagic.Controller({container: ".scroller"});

// // first row
var timeline = new TimelineMax();
var tween1 = TweenMax.to("#pin", 200, { opacity: 1 });
var tween2 = TweenMax.to("#pin", 50, { opacity: 1 });
var tween3 = TweenMax.to("#pin", 300, {opacity: 0});
timeline.add(tween1).add(tween2).add(tween3);

var timelineR = new TimelineMax();
var tween1 = TweenMax.to("#right-side", 200, {opacity: 1});
var tween2 = TweenMax.to("#right-side", 50, {opacity: 1});
var tween3 = TweenMax.to("#right-side", 300, {opacity: 0});
timelineR.add(tween1).add(tween2).add(tween3);

// second row
var timeline2 = new TimelineMax();
var tween1a = TweenMax.to("#pin2", 200, { opacity: 1 });
var tween2a = TweenMax.to("#pin2", 50, { opacity: 1 });
var tween3a = TweenMax.to("#pin2", 300, { opacity: 0});
timeline2.add(tween1a).add(tween2a).add(tween3a);

var timelineR2 = new TimelineMax();
var tween1a = TweenMax.to("#right-side2", 200, {opacity: 1});
var tween2a = TweenMax.to("#right-side2", 50, {opacity: 1});
var tween3a = TweenMax.to("#right-side2", 300, { opacity: 0});
timelineR2.add(tween1a).add(tween2a).add(tween3a);

// third row
var timeline3 = new TimelineMax();
var tween1a = TweenMax.to("#pin3", 200, { opacity: 1 });
var tween2a = TweenMax.to("#pin3", 50, { opacity: 1 });
var tween3a = TweenMax.to("#pin3", 300, { opacity: 1});
timeline3.add(tween1a).add(tween2a).add(tween3a);

var timelineR3 = new TimelineMax();
var tween1a = TweenMax.to("#right-side3", 200, {opacity: 1});
var tween2a = TweenMax.to("#right-side3", 50, {opacity: 1});
var tween3a = TweenMax.to("#right-side3", 300, { opacity: 1});
timelineR3.add(tween1a).add(tween2a).add(tween3a);


var rightSide1 = new ScrollMagic.Scene({
	triggerElement:"#trigger1",
	duration: 800
})
	.setTween(timelineR)
	.addTo(controller);

var leftSide1 = new ScrollMagic.Scene({
	triggerElement:"#trigger1",
	duration: 800
})
	.setTween(timeline)
	.addTo(controller);

var rightSide2 = new ScrollMagic.Scene({
	triggerElement:"#trigger2",
	duration: 800
})
	.setTween(timelineR2)
	.addTo(controller);

var leftSide2 = new ScrollMagic.Scene({
	triggerElement:"#trigger2",
	duration: 800
})
	.setTween(timeline2)
	.addTo(controller);


var rightSide3 = new ScrollMagic.Scene({
	triggerElement:"#trigger3",
	duration: 800
})
	.setTween(timelineR3)
	.addTo(controller);

var leftSide3 = new ScrollMagic.Scene({
	triggerElement:"#trigger3",
	duration: 800
})
	.setTween(timeline3)
	.addTo(controller);


// navigation
function toggleNav (event) {
	//console.log("Event fired! (" + event.type + ")");
	console.log("nav");
	$('nav').addClass('hide-up');
	$menuBtn.addClass('active-menu-btn');
	$('#cross').addClass('active-cross-btn');
}

var removeNavigation = new ScrollMagic.Scene({
	triggerElement:"#triggerNav",
	duration: 800,
	triggerHook: 0

})
.on("enter", toggleNav)
.addTo(controller);

// home page
// timeline
var homeFade = new TimelineMax();
var tween = TweenMax.to("#home-copy", 200, {opacity: 0});
homeFade.add(tween);
// scene
var home = new ScrollMagic.Scene({
	triggerElement:"#triggerHome",
	duration: fadeDuration,
	triggerHook: 0
})
.setTween(homeFade)
.addTo(controller);

// about page
// timeline
var aboutFadeIn = new TimelineMax();
var tween = TweenMax.to("#home", 200, {backgroundColor: accentColor});
var tween1 = TweenMax.to("#about-copy", 200, {opacity: 1});
aboutFadeIn.add(tween).add(tween1);

// scene
var home = new ScrollMagic.Scene({
	triggerElement:"#aboutStart",
	duration: fadeDuration,
	triggerHook: 0
})
.setTween(aboutFadeIn)
.addTo(controller);

// video page
// timeline
var videoTween = new TimelineMax();
var tween = TweenMax.to("#about-copy", 200, {opacity: 0});
var tween1 = TweenMax.to("#video", 200, {opacity: 1});
videoTween.add(tween).add(tween1);

// scene
var video = new ScrollMagic.Scene({
	triggerElement:"#triggerVideo",
	duration: fadeDuration,
	triggerHook: 0
})
.setTween(videoTween)
.on("enter", function (event) {
    vid.play();
    console.log('enter video')
    $("#mobile-menu").removeClass('dark-nav-item');
    $("#cross").removeClass('dark-nav-item');
})
.on("progress", function (event) {
	console.log(event.progress);
    if(event.progress === 1){
    	$('#home').css('background-color','#f7f7f7');
    } else{
    	$('#home').css('background-color', accentColor);
    }
})
.on("leave", function (event) {
    console.log ('leave video')
}).addTo(controller);

// product page
// timeline
var productsTween = new TimelineMax();
var tween = TweenMax.to("#video", 200, {opacity: 0,});
var tween1 = TweenMax.to(".item-row", 200, {opacity: 1});
productsTween.add(tween).add(tween1);

// scene
var productScene = new ScrollMagic.Scene({
	triggerElement:"#triggerProducts",
	duration: fadeDuration,
	triggerHook: 0
})
.setTween(productsTween)
.on("enter", function (event) {
    //console.log('enter video');
    $("#mobile-menu").removeClass('dark-nav-item');
    $("#cross").removeClass('dark-nav-item');
})
.on("leave", function (event) {
	console.log('leave products');
    $("#mobile-menu").toggleClass('dark-nav-item');
    $("#cross").toggleClass('dark-nav-item');
})
.addTo(controller);

// about2 page
// timeline
var about2Tween = new TimelineMax();
var tween = TweenMax.to(".item-row", 200, {opacity: 0});
var tween1 = TweenMax.to("#home", 200, {backgroundColor: '#333'});
var tween2 = TweenMax.to("#about2-section", 200, {opacity: 1});
about2Tween.add(tween).add(tween1).add(tween2);;

// scene
var productScene = new ScrollMagic.Scene({
	triggerElement:"#triggerAbout2",
	duration: fadeDuration,
	triggerHook: 0
})
.setTween(about2Tween)
.on("enter", function (event) {
    $("#mobile-menu").removeClass('dark-nav-item');
    $("#cross").removeClass('dark-nav-item');
})
.on("leave", function (event) {
    $("#mobile-menu").removeClass('dark-nav-item');
    $("#cross").removeClass('dark-nav-item');
})
.addTo(controller);


// shop page
// timeline
var shopTween = new TimelineMax();
var tween = TweenMax.to("#about2-section", 200, {opacity: 0});
var tween1 = TweenMax.to("#home", 200, {backgroundColor: accentColor});
var tween2 = TweenMax.to("#shop-now", 200, {opacity: 1});
shopTween.add(tween).add(tween1).add(tween2);;

// scene
var productScene = new ScrollMagic.Scene({
	triggerElement:"#triggerShop",
	duration: fadeDuration,
	triggerHook: 0
})
.setTween(shopTween)
.on("enter", function (event) {
    console.log('start');
})
// .on("leave", function (event) {
//     vid.pause();
// })
.addTo(controller);




// click hamburger
$menuBtn.click(function() {
		$dropMenu.toggleClass('active-drop-menu');
		$menuBtn.toggleClass('active-menu-btn');
		$exit.toggleClass('active-exit');
		$('#cross').toggleClass('cross-dark');
	});

// toggle nav
	$exit.click(function() {
		$dropMenu.toggleClass('active-drop-menu');
		$menuBtn.toggleClass('active-menu-btn');
		$exit.toggleClass('active-exit');
		$('#cross').toggleClass('cross-dark');
	});



// leave experience
$cross.click(function() {
	// fade in 
	console.log('asd');
	$shoppingContainer.velocity({opacity:1}, {
		duration: 1000,
		begin: function() {
			$shoppingContainer.css('visibility', 'visible');
			$menuBtn.removeClass('active-menu-btn');
			$('#cross').removeClass('active-cross-btn');
		},
		complete: function(){
			$('.inside-scroll').velocity("scroll", {
				container: $(".scroller"),
  				duration: 0,
  				offset: 0 });
		}
	});
	// slide up screen
	$experienceContainer.velocity({height: 0},{
			duration: 1000,
			delay: 100,
			begin: function() {
				$shoppingContainer.css('display', 'block');
				//$('#nav2').removeClass('hide-up');
				},
			complete: function() {
				//$('nav').toggleClass('hide-up');
				setTimeout(function(){
					$('#home2 h1').velocity({opacity:1}, { duration: 500 });
				},200);

				setTimeout(function(){
					$('#home2 h2').velocity({opacity:1}, { duration: 500 });
				},800);

				setTimeout(function(){
					$petra.velocity({opacity:1}, { duration: 500, visibility: 'visible' });
				},1600);
				$('h1.starters').velocity({opacity:0}, { duration: 100 });
				$('h2.starters').velocity({opacity:0}, { duration: 100 });
			}
		});
});

// click to expand experience
$toggleSection.click(function() {
	console.log('lets go');

	$experienceContainer.velocity({height:windowHeight}, {
		duration: 1000,
		begin: function(){
			
		},
		complete: function() {
			$menuBtn.addClass('active-menu-btn');
			$('#cross').addClass('active-cross-btn');
			$shoppingContainer.css('display', 'none');
			$petra.velocity({opacity:0}, { duration: 300, visibility: 'hidden' });
			$('#home2 h1').velocity({opacity:0}, { duration: 300 });
			$('#home2 h2').velocity({opacity:0}, { duration: 300 });
			setTimeout(function(){
				$('h1.starters').velocity({opacity:1}, { duration: 500 });
				setTimeout(function(){
					$('h2.starters').velocity({opacity:1}, { duration: 500 });
				},300);
			},600);
		}
	});
});

// hover over expand experience
$toggleSection.hover(function() {
	$toggleSection.velocity({backgroundColor:'#aaa'}, { duration: 300 });
}, function() {
	$toggleSection.velocity({backgroundColor:'#ccc'}, { duration: 300 });
});

// // reset container position & toggle experience
var containerAdjW = (windowWidth - $('#item-container').innerWidth() ) / 2;
var containerAdjH = (windowHeight - $('#item-container').innerHeight() ) / 2;
console.log(containerAdjH);
$('#item-container').css({
	'left': containerAdjW + "px",
	'top': containerAdjH + "px"
});


// window height landing page
// var fillView = windowHeight - $('nav').outerHeight() - 50;
// $('#home').css('height', fillView);

// centered content
$('.centered-div').each(function(){
	var parent = $(this).parent(),
	parentHeight = parent.innerHeight(),
	thisHeight = $(this).innerHeight();
	thisWidth = $(this).innerWidth();

	$(this).css({
		'top': (parentHeight - thisHeight) / 2 + 'px',
		'left': (windowWidth - thisWidth) / 2 + 'px'
	});

});

$('.item-row').each(function(){
	var parent = $(this).parent(),
	parentHeight = parent.innerHeight(),
	thisHeight = $(this).innerHeight();
	$(this).css( 'top', (parentHeight - thisHeight) / 2 + 'px' );

});

$('#pin, #pin2, #pin3, .right-description').each(function(){
	var parent = $(this).parent(),
	parentHeight = parent.innerHeight(),
	thisHeight = $(this).innerHeight();
	$(this).css( 'top', (parentHeight - thisHeight) / 2 + 'px' );
});
setTimeout(function(){
		$('h1.starters').velocity({opacity:1}, { duration: 500 });
	setTimeout(function(){
		$('h2.starters').velocity({opacity:1}, { duration: 500 });
	},500);
},600);


});