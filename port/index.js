$(window).load(function(){

	$('.protectiveshield').show();
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
			$('#screeners').effect( "bounce",{distance:10}, {times:3}, 10 );		

			$('.mainpanel').delay(50).animate({width:"400px", height:"357px"}, function(){
				$('.protectiveshield').show(function(){
					$('.screencontainer').delay(10).animate({width:"400px", height:"357px"},function(){
						$('#biowindow').fadeIn(function(){
							$('.protectiveshield').hide();
							$(this).dequeue();
						});
					});
				});
			});

$( "#biobutton").hover( 
	function() {
  $('#topstickpart').animate({top:"-15px"}, 150);  
},
function() {
  $('#topstickpart').animate({top:"0px"}, 150);  
}
);

$( "#contactbutton").hover( 
	function() {
  $('#bottomstickpart').animate({bottom:"-15px"}, 150);  
},
function() {
  $('#bottomstickpart').animate({bottom:"0px"}, 150);  
}
);



//onclick functionality

$('#biobutton').click(function(){
	$('.protectiveshield').show(function(){
		$('.mainscreen').hide(0,function(){
			$('.topscreen').stop(true,true).animate({top:"-120px"},120);
			$('.mainpanel').clearQueue().animate({width:"100px", height:"300px",left:"250px"}, function(){
				$('.screencontainer').animate({height:"300px", width:"100px"}, 0, function(){

					$('.mainpanel').animate({height:"357px", width:"400px", paddingTop:"298px"}, function(){
						$('.screencontainer').delay(10).animate({height:"357px",  width:"400px"}, 0, function(){										
							$('#biowindow').fadeIn(function(){
								$('.protectiveshield').hide();
								$(this).dequeue();
							});
						});

						

					});
				});

			});		
		});


	});
	$('#toppanelslide').slideUp(300,'swing');


});

function clearjQueryCache(){
	for (var x in jQuery.cache){
		delete jQuery.cache[x];
	}
}


$('#resumebutton').click(function(){
	$('.protectiveshield').show(function(){
		$('.mainscreen').hide(0,function(){
			$('.topscreen').stop(true,true).animate({top:"-320px"},120);
			$('.mainpanel').clearQueue().animate({width:"100px",height:"300px", left:"250px"}, function(){
				$('.screencontainer').animate({height:"300px",width:"100px"}, 0, function(){

					$('.mainpanel').animate({height:"805px", width:"660px", paddingTop:"98px"}, function(){

						$('.screencontainer').delay(10).animate({height:"805px", width:"660px"},0,function(){										
							$('#resumewindow').fadeIn(function(){
								$('.protectiveshield').hide();
								$(this).dequeue();
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
	$('.protectiveshield').show(function(){

		$('.mainscreen').hide(0,function(){
			$('.topscreen').stop(true,true).animate({top:"-121px"},120);
			$('.mainpanel').clearQueue().animate({width:"100px",height:"300px", left:"250px"}, function(){
				$('.screencontainer').animate({height:"300px", width:"100px"}, 0, function(){

					$('.mainpanel').animate({height:"366px", width:"800px", paddingTop:"298px"}, function(){

						$('.screencontainer').delay(10).animate({height:"366px", width:"800px"},0,function(){										
							$('#dworkswindow').fadeIn(function(){
								$('.protectiveshield').hide();
								$(this).dequeue();
							});


							$('#toppanelslide').slideDown(300,'swing');
						});						
						

					});
				});

			});		
		});


	});



});


$('#contactbutton').click(function(){
	$('.protectiveshield').show(function(){
		$('.mainscreen').hide(0,function(){
			$('.topscreen').stop(true,true).animate({top:"-120px"},120);
			$('.mainpanel').clearQueue().animate({width:"100px",height:"300px", left:"250px"}, function(){
				$('.screencontainer').animate({height:"300px",width:"100px"}, 0, function(){

					$('.mainpanel').animate({height:"209px", width:"360px", paddingTop:"298px"}, function(){

						$('.screencontainer').delay(10).animate({height:"209px", width:"360px"},0,function(){										
							$('#contactwindow').fadeIn(function(){
								$('.protectiveshield').hide();
								$(this).dequeue();
							});

						});	




					});
				});

			});		
		});


	});
	$('#toppanelslide').slideUp(300,'swing');


});


$('#dbutton').click(function(){
	$('.protectiveshield').show(function(){
		$('.mainscreen').hide(0,function(){
			$('.topscreen').stop(true,true).animate({top:"-120px"},120);
			$('.mainpanel').clearQueue().animate({width:"100px",height:"300px", left:"250px"}, function(){
				$('.screencontainer').animate({height:"300px", width:"100px"}, 0, function(){

					$('.mainpanel').animate({height:"369px", width:"800px", paddingTop:"298px"}, function(){

						$('.screencontainer').delay(10).animate({height:"369px", width:"800px"},0,function(){										
							$('#dworkswindow').fadeIn(function(){
								$('.protectiveshield').hide();
								$(this).dequeue();
							});

							$('#toppanelslide').slideDown(300,'swing');
						});	
					});						
				});
				

			});		
		});
	});

});


$('#videobutton').click(function(){
	$('.protectiveshield').show(function(){
		$('.mainscreen').hide(0,function(){
			$('.topscreen').stop(true,true).animate({top:"-120px"},120);
			$('.mainpanel').clearQueue().animate({width:"100px",height:"300px", left:"250px"}, function(){
				$('.screencontainer').animate({height:"300px", width:"100px"}, 0, function(){

					$('.mainpanel').animate({height:"198px", width:"400px", paddingTop:"298px"}, function(){

						$('.screencontainer').delay(10).animate({height:"198px", width:"400px"},0,function(){										
							$('#videowindow').fadeIn(function(){
								$('.protectiveshield').hide();
								$(this).dequeue();
							});


							$('#toppanelslide').slideDown(300,'swing');
						});	
					});						
				});
				

			});		
		});
	});
});


$('#webbutton').click(function(){
	$('.protectiveshield').show(function(){
		$('.mainscreen').hide(0,function(){
			$('.topscreen').stop(true,true).animate({top:"-120px"},120);
			$('.mainpanel').clearQueue().animate({width:"100px",height:"300px",left:"250px"}, function(){
				$('.screencontainer').animate({height:"300px", width:"100px"}, 0, function(){

					$('.mainpanel').animate({height:"369px", width:"800px", paddingTop:"298px"}, function(){

						$('.screencontainer').delay(10).animate({height:"369px", width:"800px"},0,function(){										
							$('#webwindow').fadeIn(function(){
								$('.protectiveshield').hide();
								$(this).dequeue();
							});


							$('#toppanelslide').slideDown(300,'swing');
						});		
					});					
				});
				

			});		
		});
	});
});


$('#designsbutton').click(function(){
	$('.protectiveshield').show(function(){
		$('.mainscreen').hide(0,function(){
			$('.topscreen').stop(true,true).animate({top:"-120px"},120);
			$('.mainpanel').clearQueue().animate({width:"100px",height:"300px", left:"250px"}, function(){
				$('.screencontainer').animate({height:"300px", width:"100px"}, 0, function(){

					$('.mainpanel').animate({height:"369px", width:"800px", paddingTop:"298px"}, function(){

						$('.screencontainer').delay(10).animate({height:"369px", width:"800px"},0,function(){										
							$('#designswindow').fadeIn(function(){
								$('.protectiveshield').hide();
								$(this).dequeue();
							});

							$('#toppanelslide').slideDown(300,'swing');
						});	
					});						

				});
			});		
		});
	});
});






});

			//menu buttons start animations


//onclick functionality



