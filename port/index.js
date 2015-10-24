$(document).ready(function(){
var animationComplete = true;

			//menu buttons start animations
			$('#topstickpart').delay(300).show("slide", { direction: "up" }, 700);
			$('#topstickpart').effect( "bounce",{distance:6}, {times:3}, 600 );
			$('#bottomstickpart').delay(500).show("slide", { direction: "down" }, 700);
			$('#bottomstickpart').effect( "bounce",{distance:6}, {times:3}, 600 );
			$('#biobutton').delay(300).show("slide", { direction: "left" }, 700);
			$('#biobutton').effect( "bounce",{distance:6}, {times:3}, 600 );
			$('#contactbutton').delay(500).show("slide", { direction: "left" }, 700);
			$('#contactbutton').effect( "bounce",{distance:6}, {times:3}, 600 );
			$('#portfoliobutton').delay(200).show("slide", { direction: "left" }, 700);
			$('#resumebutton').delay(600).show("slide", { direction: "left" }, 700);
			$('#screeners').delay(20).show("slide", { direction: "up" }, 700);
			$('#biowindow').hide();
			$('#screeners').effect( "bounce",{distance:1}, {times:0}, 10 );		

			$('.mainpanel').delay(50).animate({width:"660px"}, function(){
				
				$('.screencontainer').delay(10).animate({height:"236px"},function(){
					$('#biowindow').fadeIn();
					 animationComplete = false;
				
				});
			});






//onclick functionality

$('#biobutton').click(function(){
if (animationComplete == false)  
	
	$('#biowindow, #resumewindow, #contactwindow, #dworkswindow').delay(0).hide(function(){
		animationComplete = true;

		$('.mainpanel').animate({width:"100px", height:"100px", queue:false}, function(){
			$('.screencontainer').animate({height:"100px", width:"100px"}, 100, function(){
				$('#screeners').delay(0).hide("slide", { direction: "up"}, 300, function(){				
					$('#screeners').show("slide", { direction: "up"}, 300, function(){						
								$('.topscreen').animate({top:"-120px"});								
									$('.mainpanel').animate({height:"246px", width:"660px", paddingTop:"300px"}, function(){
										$('.screencontainer').delay(10).animate({height:"236px", width:"660px"}, 300, function(){										
									$('#biowindow').fadeIn();
									animationComplete = false;
							
								});						
							});
						

					});
				});

			});		
		});

		
	});
	$('#toppanelslide').slideUp(300,'swing');


});



$('#resumebutton').click(function(){
if (animationComplete == false)

	$('#biowindow, #resumewindow, #contactwindow, #dworkswindow').delay(0).hide(function(){
		animationComplete = true;
		$('.mainpanel').animate({width:"100px", height:"100px", queue:false}, function(){
			$('.screencontainer').animate({height:"100px", width:"100px"}, 100, function(){
				$('#screeners').delay(0).hide("slide", { direction: "up"}, 300, function(){						
					$('#screeners').show("slide", { direction: "up"}, 300, function(){					
								$('.topscreen').animate({top:"-315px"});
									$('.mainpanel').animate({width:"800px",height:"730px", paddingTop:"100px"}, function(){																				
										$('.screencontainer').delay(0).animate({height:"720px",width:"800px"},function(){
									$('#resumewindow').fadeIn();
									animationComplete = false;
							
								});						
							});
						

					});
				});

			});		
		});

		
	});
	$('#toppanelslide').slideUp(300,'swing');


});



$('#portfoliobutton').click(function(){
if (animationComplete == false)

	$('#biowindow, #resumewindow, #contactwindow, #dworkswindow').delay(0).hide(function(){
		animationComplete = true;
		$('.mainpanel').animate({width:"100px",height:"100px", queue:false}, function(){
			$('.screencontainer').animate({height:"100px", width:"100px"}, 100, function(){
				$('#screeners').delay(0).hide("slide", { direction: "up" }, 300, function(){					
					$('#screeners').show("slide", { direction: "up"}, 300, function(){							
							$('.topscreen').animate({top:"-120px"});								
									$('.mainpanel').animate({height:"350px", width:"800px", paddingTop:"300px"}, function(){
										$('.screencontainer').delay(10).animate({height:"340px", width:"800px"},function(){										
									$('#dworkswindow').fadeIn();
									animationComplete = false;
									
										$('#toppanelslide').slideDown(300,'swing');
								});						
							});
						

					});
				});

			});		
		});

		
	});



});





$('#contactbutton').click(function(){
if (animationComplete == false)

	$('#biowindow, #resumewindow, #contactwindow, #dworkswindow').delay(0).hide(function(){
		animationComplete = true;
		$('.mainpanel').animate({width:"100px",height:"100px"}, function(){
			$('.screencontainer').animate({height:"100px",width:"100px", queue:false}, 100, function(){
				$('#screeners').delay(0).hide("slide", { direction: "up"}, 300, function(){					
					$('#screeners').show("slide", { direction: "up"}, 300, function(){							
							$('.topscreen').animate({top:"-120px"});								
										$('.mainpanel').animate({height:"250px", width:"660px", paddingTop:"300px"}, function(){
											$('.screencontainer').delay(10).animate({height:"250px", width:"660px"},function(){										
									$('#contactwindow').fadeIn();
									animationComplete = false;
								

								});						
							});
						

					});
				});

			});		
		});

		
	});
	$('#toppanelslide').slideUp(300,'swing');


});







});
			//menu buttons start animations


//onclick functionality



