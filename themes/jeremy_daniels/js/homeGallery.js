jQuery(document).ready(function($){
    //jQuery('#page-wrapper').removeClass('border');
	jQuery(function($){
		
		$.supersized({
		
			// Functionality
			slide_interval          :   3000,		// Length between transitions
			transition              :   1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
			transition_speed		:	1000,		// Speed of transition
													   
			// Components							
			slide_links				:	'blank',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
			slides 					:  	slideObj
			
		});//end supersized
	});//end jQuery function
	function sizeUp(){
		var side_bar = jQuery('#sidebar-first');	
		var winH = jQuery(window).height();
		side_bar.css({position: 'absolute', left: '0px'})
		side_bar.css({height: winH + 'px'})
	}// end sizeUp()
	
	jQuery(window).resize(function(){
		//sizeUp()
	})
	//sizeUp();
	
});