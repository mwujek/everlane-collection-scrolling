///*jshint devel:true */

$(document).ready(function(){

	var $menuBtn = $('#mobile-menu'),
	$dropMenu = $('#drop-menu'),
	$exit = $('#exit'),
	vid = document.getElementById("everland-vid"),
	$toggleSection = $('#toggle-section'),
	$lookbook = $('.container'),
	lookbookHeight = $lookbook.innerHeight() + 10,
	$petra = $('#petra img'),
	windowHeight = $( window ).height(),
	windowWidth = $( window ).width();


// waypoints
$('#home').waypoint(function() {
	$menuBtn.toggleClass('active-menu-btn');
});


// fade first section
$('#about').waypoint(function() {
	//console.log('now');
	$('#about').velocity({opacity:1},{duration:800});
	setTimeout(function(){
		$('.centered-div').velocity({opacity:1},{duration:800});
	},800);
	
},{
	offset: '70%'
});

// fade in video
$('#video').waypoint(function() {
	console.log('now');
	$('#video').velocity({opacity:1},{duration:1200});
},{
	offset: '70%'
});




// fade in products
$('#container-scroll').waypoint(function() {
	$('#pin').velocity({opacity:1},{duration:500});
	setTimeout(function(){
		$('#right-side').velocity({opacity:1},{duration:800});
	},500);
	
},{
	offset: '50%'
});

// fade in about2
$('#about2').waypoint(function() {
	console.log('now');
	$('#about2').velocity({opacity:1},{duration:800});
	setTimeout(function(){
		$('#about2 h2').velocity({opacity:1},{duration:800});
	},800);
},{
	offset: '60%'
});

// fade in shop now
$('#shop-now').waypoint(function() {
	console.log('now');
	$('#shop-now').velocity({opacity:1},{duration:500});
	setTimeout(function(){
		$('#shop-now .shop-top').velocity({opacity:1},{duration:800});
	},800);
	setTimeout(function(){
		$('#shop-now .share').velocity({opacity:1},{duration:800});
	},1200);
},{
	offset: '70%'
});



// menu / nav 
$menuBtn.click(function() {
	$dropMenu.toggleClass('active-drop-menu');
	$menuBtn.toggleClass('active-menu-btn');
	$exit.toggleClass('active-exit');
});
$exit.click(function() {
	$dropMenu.toggleClass('active-drop-menu');
	$menuBtn.toggleClass('active-menu-btn');
	$exit.toggleClass('active-exit');
});


// video waypoints
$('#about').waypoint(function(direction) {
	if (direction === 'up') {
		vid.pause();
	}
}, {
	offset: '350px'
});

$('#video').waypoint(function(direction) {
	if (direction === 'down') {
		vid.play();
	}
}, {
	offset: '50%'
});

$('#video').waypoint(function(direction) {
	if (direction === 'up') {
		vid.play();
	}
}, {
	offset: '0%'
});

$('#products').waypoint(function() {
	vid.pause();
	//console.log('pause');
}, {
	offset: '25%'
});

// end of video waypoints

// ************************************************************
// ************************************************************

// SCROLLING

// ************************************************************
// ************************************************************


// var $scroller = $('.scroller'), // 1200+ px height with rows
// 	$pinnedRow = $('.scoller').find('.row');
// old scrolling
// function noScroll(){

// $scroller.on('mousewheel DOMMouseScroll', function(e) {
// 	console.log('scrolling');
// 	//e.preventDefault()
// 	var d = e.originalEvent.wheelDelta || -e.originalEvent.detail,
// 	dir = d > 0 ? 'up' : 'down',
// 	stop = (dir == 'up' && this.scrollTop == 0) || (dir == 'down' && this.scrollTop == this.scrollHeight-this.offsetHeight);
// 	stop;
// });

// }

// $('#products').waypoint(function() {
// 	console.log('stop scrollign!');
// 	noScroll();
// }, {
// 	offset: '10%'
// });



// Init ScrollMagic Controller
var controller = new ScrollMagic.Controller({container: ".scroller"});

// first row
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
var tween3a = TweenMax.to("#pin3", 300, { opacity: 0});
timeline3.add(tween1a).add(tween2a).add(tween3a);

var timelineR3 = new TimelineMax();
var tween1a = TweenMax.to("#right-side3", 200, {opacity: 1});
var tween2a = TweenMax.to("#right-side3", 50, {opacity: 1});
var tween3a = TweenMax.to("#right-side3", 300, { opacity: 0});
timelineR3.add(tween1a).add(tween2a).add(tween3a);


var rightSide1 = new ScrollMagic.Scene({
	triggerElement:"#trigger1",
	duration: 800
})
	// .setPin("#right-side")
	.setTween(timelineR)
	.addTo(controller);

var leftSide1 = new ScrollMagic.Scene({
	triggerElement:"#trigger1",
	duration: 800
})
	// .setPin("#pin")
	.setTween(timeline)
	//.addIndicators()
	.addTo(controller);

var rightSide2 = new ScrollMagic.Scene({
	triggerElement:"#trigger2",
	duration: 800,
})
	// .setPin("#right-side2")
	.setTween(timelineR2)
	.addTo(controller);

var leftSide2 = new ScrollMagic.Scene({
	triggerElement:"#trigger2",
	duration: 800,
})
	// .setPin("#pin2")
	.setTween(timeline2)
	//.addIndicators()
	.addTo(controller);


var rightSide3 = new ScrollMagic.Scene({
	triggerElement:"#trigger3",
	duration: 800,
})
	// .setPin("#right-side2")
	.setTween(timelineR3)
	.addTo(controller);

var leftSide3 = new ScrollMagic.Scene({
	triggerElement:"#trigger3",
	duration: 800,
})
	// .setPin("#pin2")
	.setTween(timeline3)
	//.addIndicators()
	.addTo(controller);


// var scene3 = new ScrollMagic.Scene({
// 	triggerElement:"#section2",
// 	duration: 100
// })
// 	.setPin("#pin2")
//// 	.addIndicators()
// 	.addTo(controller);

// var scene4 = new ScrollMagic.Scene({
// 	triggerElement:"#section2",
// 	duration: 200,
// 	offset: 100
// })
// 	.setPin("#pin2")
// 	.setTween(timeline2)
//// 	.addIndicators()
// 	.addTo(controller);



//// var rightSide1 = new ScrollMagic.Scene({
// 	triggerElement:"#trigger1",
// 	duration: 100
// })
// 	.setPin("#right-side")
// 	.addTo(controller);

// var rightSide2 = new ScrollMagic.Scene({
// 	triggerElement:"#trigger1",
// 	duration: 200,
// 	offset: 100
// })
// 	.setPin("#right-side")
// 	.setTween(timelineR)
// 	.addTo(controller);

// var scene = new ScrollMagic.Scene({
// 	triggerElement:"#trigger1",
// 	duration: 100
// })
// 	.setPin("#pin")
// 	.addIndicators()
// 	.addTo(controller);

// var scene2 = new ScrollMagic.Scene({
// 	triggerElement:"#trigger1",
// 	duration: 200,
// 	offset: 100
// })
// 	.setPin("#pin")
// 	.setTween(timeline)
// 	.addIndicators()
// 	.addTo(controller);

// var scene3 = new ScrollMagic.Scene({
// 	triggerElement:"#section2",
// 	duration: 100
// })
// 	.setPin("#pin2")
// 	.addIndicators()
// 	.addTo(controller);

// var scene4 = new ScrollMagic.Scene({
// 	triggerElement:"#section2",
// 	duration: 200,
// 	offset: 100
// })
// 	.setPin("#pin2")
// 	.setTween(timeline2)
// 	.addIndicators()
// 	.addTo(controller);




// reset container position
var containerAdjW = (windowWidth - $('#item-container').innerWidth() ) / 2;
var containerAdjH = (windowHeight - $('#item-container').innerHeight() ) / 2;
console.log(containerAdjH);
$('#item-container').css({
	'left': containerAdjW + "px",
	'top': containerAdjH + "px"
});







// toggle section
$toggleSection.click(function() {
	if( $toggleSection.hasClass('closed') ){
		$lookbook.velocity(
			{height: lookbookHeight},{
				duration: 800,
				delay: 150,
				easing : "easeInSine",
				complete: function() {
					setTimeout(function(){
						$toggleSection.velocity({backgroundColor: "#fff"},{duration:300});
						$toggleSection.find('h3').velocity({color: "#555"},{duration:300});
					},300);
					$petra.velocity({opacity:1}, { duration: 100, display: "none" });
				}
			});
		$toggleSection.find('h3').text('exit lookbook');
	} else {
		$lookbook.velocity({height: 0},{
			duration: 1200,
			delay: 150,
			begin: function() {
				$toggleSection.velocity({backgroundColor: "#ccc"},{duration:500});
				$toggleSection.find('h3').velocity({color: "#fff"},{duration:500});
				},
			complete: function() {
				setTimeout(function(){
					$toggleSection.velocity({backgroundColor: "#977144"},{duration:500});
					$toggleSection.find('h3').velocity({color: "#fff"},{duration:500});
				},300);
				setTimeout(function(){
					$petra.velocity({opacity:1}, { duration: 300, display: "block" });
				},600);
			}
		});


		$toggleSection.find('h3').text('view lookbook');
	}

	$toggleSection.toggleClass('closed');

});


// window height landing page
var fillView = windowHeight - $('nav').outerHeight() - 50;
$('#home').css('height', fillView);

// centered content
$('.centered-div').each(function(){
	var parent = $(this).parent(),
	parentHeight = parent.innerHeight(),
	thisHeight = $(this).innerHeight();
	$(this).css( 'top', (parentHeight - thisHeight) / 2 + 'px' );

});

});