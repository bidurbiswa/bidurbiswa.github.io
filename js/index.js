$(document).ready(function(){

	$('body').animate({
		backgroundColor: '#e1e8f0',
		// opacity: '9',
		color: '#EDECEC'
		}, 1000);

	let count= 0;
	window.setInterval(function(){
		
		let word = $('#test').text().toLowerCase();
		if( word != 'websites' && count === 0){
			toggleText('Websites');
			count+=1;
		}else if(word != 'online surveys' && count === 1){
			toggleText('Online Surveys');
			count+=1;
		}else if(word != 'web apps' && count === 2){
			toggleText('Web Apps');
			count=0
		}else{}
	},500);
	
	/*Image Scroll-fixed-top starts*/
	let position = $(window).scrollTop();
	
	$(window).scroll(function(){
		let scroll = $(window).scrollTop();
		// console.log("aftr scroll"+scroll)
		if(scroll > position && (position > 0 && position <=190) ){
			$('#hidden-image').show();
			if(scroll >= 116){
				// $('#header-container').addClass('card')
				$('#hidden-image').show();
				$('#display-picture-col').css('visibility', 'hidden');
				$('#hidden-image-container').addClass('sticky-top');
				$('#hidden-image-container').css({
					width: '20vw',
					marginLeft: '7.5vw'
				});
				$('#hidden-image').find('img').css({
					// width: '15vw',
					border: '2px solid grey'

				});
			}
			
		}else{
			// console.log(scroll)

			if(scroll< position){
				$('#display-picture-col').css('visibility', 'visible');
				$('#hidden-image-container').removeClass('sticky-top');
				$('#hidden-image').css('display', 'none');
			}
		}
		position = scroll;

	});

	/*toggle top image on mobile devices*/
	let navbarToggleCount =0;
	$('.navbar-toggler').click(function(){
		if(navbarToggleCount === 0){
			$('#hidden-image').css('display', 'none');
			navbarToggleCount = 1
		}else if(navbarToggleCount === 1){
			$('#hidden-image').show();
			navbarToggleCount = 0
		}else{

		}
		
	});
	/*Image Scroll-fixed-top end*/
	


	
   
	/*education.html starts*/
    $('.table-wrapper').find('a').hover(function(){
    	$(this).css({
    		cursor: 'pointer'
    	});
    	$('[data-toggle="popover"]').popover()
    });

    $('[data-toggle="modal"]').tooltip();

    //Animate Academic Table
    $( "#academic-table" ).animate({
      width: [ "toggle", "swing" ],
      height: [ "toggle", "swing" ],
      opacity: "show"
    }, 1000, "linear");
    /*education.html ends/


    /*work.html starts*/

    /*work.html ends*/
});


let toggleText = function(text){
	$('#test').fadeOut(2000, function() {
	       $('#test').text(text).fadeIn(1000);
	});
}





!function(r){function e(e){var t;return e&&e.constructor==Array&&3==e.length?e:(t=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(e))?[parseInt(t[1]),parseInt(t[2]),parseInt(t[3])]:(t=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(e))?[2.55*parseFloat(t[1]),2.55*parseFloat(t[2]),2.55*parseFloat(t[3])]:(t=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(e))?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:(t=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(e))?[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]:(t=/rgba\(0, 0, 0, 0\)/.exec(e))?a.transparent:a[r.trim(e).toLowerCase()]}r.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","color","outlineColor"],function(a,t){r.fx.step[t]=function(a){a.colorInit||(a.start=function(a,t){var n;do{if(""!=(n=r.css(a,t))&&"transparent"!=n||r.nodeName(a,"body"))break;t="backgroundColor"}while(a=a.parentNode);return e(n)}(a.elem,t),a.end=e(a.end),a.colorInit=!0),a.elem.style[t]="rgb("+[Math.max(Math.min(parseInt(a.pos*(a.end[0]-a.start[0])+a.start[0]),255),0),Math.max(Math.min(parseInt(a.pos*(a.end[1]-a.start[1])+a.start[1]),255),0),Math.max(Math.min(parseInt(a.pos*(a.end[2]-a.start[2])+a.start[2]),255),0)].join(",")+")"}});var a={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]}}(jQuery);