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

			$('.mainpanel').delay(50).animate({width:"400px", height:"340px"}, function(){
				$('.protectiveshield').show(function(){
					$('.screencontainer').delay(10).animate({width:"400px", height:"340px"},function(){
						$('#biowindow').fadeIn(function(){
							$('.protectiveshield').hide();
						});
					});
				});
			});

//onclick functionality

$('#biobutton').click(function(){
	$('.protectiveshield').show(function(){
		$('.mainscreen').hide(0,function(){
			$('.mainpanel').clearQueue().animate({width:"100px", height:"100px",left:"250px"}, function(){
				$('.screencontainer').animate({height:"100px", width:"100px"}, 0, function(){
							$('.topscreen').animate({top:"-120px"},120);
							$('.mainpanel').animate({height:"340px", width:"400px", paddingTop:"298px"}, function(){
								$('.screencontainer').delay(10).animate({height:"340px",  width:"400px"}, 0, function(){										
									$('#biowindow').fadeIn(function(){
										$('.protectiveshield').hide();
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

	$('.protectiveshield').show(function(){
		$('.mainscreen').hide(0,function(){

			$('.mainpanel').clearQueue().animate({width:"100px", height:"100px", left:"250px"}, function(){
				$('.screencontainer').animate({height:"100px", width:"100px"}, 0, function(){
				
							$('.mainpanel').animate({width:"800px",height:"770px", paddingTop:"100px"}, function(){	
							$('.topscreen').animate({top:"-315px"},120);																			
								$('.screencontainer').delay(0).animate({height:"770px",width:"800px"},0, function(){
									$('#resumewindow').fadeIn(function(){
										$('.protectiveshield').hide();
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

			$('.mainpanel').clearQueue().animate({width:"100px",height:"100px", left:"250px"}, function(){
				$('.screencontainer').animate({height:"100px", width:"100px"}, 0, function(){
								
							$('.mainpanel').animate({height:"350px", width:"800px", paddingTop:"298px"}, function(){
								$('.topscreen').animate({top:"-121px"},300);
								$('.screencontainer').delay(10).animate({height:"340px", width:"800px"},0,function(){										
									$('#dworkswindow').fadeIn(function(){
										$('.protectiveshield').hide();
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

			$('.mainpanel').clearQueue().animate({width:"100px",height:"100px", left:"250px"}, function(){
				$('.screencontainer').animate({height:"100px",width:"100px"}, 0, function(){
								
							$('.mainpanel').animate({height:"250px", width:"660px", paddingTop:"298px"}, function(){
								$('.topscreen').animate({top:"-120px"},300);
								$('.screencontainer').delay(10).animate({height:"250px", width:"660px"},0,function(){										
									$('#contactwindow').fadeIn(function(){
										$('.protectiveshield').hide();
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

			$('.mainpanel').clearQueue().animate({width:"100px",height:"100px", left:"250px"}, function(){
				$('.screencontainer').animate({height:"100px", width:"100px"}, 0, function(){
						
							$('.mainpanel').animate({height:"350px", width:"800px", paddingTop:"298px"}, function(){
									$('.topscreen').animate({top:"-120px"},300);
								$('.screencontainer').delay(10).animate({height:"340px", width:"800px"},0,function(){										
									$('#dworkswindow').fadeIn(function(){
										$('.protectiveshield').hide();
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

			$('.mainpanel').clearQueue().animate({width:"100px",height:"100px", left:"250px"}, function(){
				$('.screencontainer').animate({height:"100px", width:"100px"}, 0, function(){
							
							$('.mainpanel').animate({height:"180px", width:"400px", paddingTop:"298px"}, function(){
									$('.topscreen').animate({top:"-120px"},300);
								$('.screencontainer').delay(10).animate({height:"170px", width:"400px"},0,function(){										
									$('#videowindow').fadeIn(function(){
										$('.protectiveshield').hide();
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

			$('.mainpanel').clearQueue().animate({width:"100px",height:"100px",left:"250px"}, function(){
				$('.screencontainer').animate({height:"100px", width:"100px"}, 0, function(){
							
							$('.mainpanel').animate({height:"350px", width:"800px", paddingTop:"298px"}, function(){
									$('.topscreen').animate({top:"-120px"},300);
								$('.screencontainer').delay(10).animate({height:"340px", width:"800px"},0,function(){										
									$('#webwindow').fadeIn(function(){
										$('.protectiveshield').hide();
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

			$('.mainpanel').clearQueue().animate({width:"100px",height:"100px", left:"250px"}, function(){
				$('.screencontainer').animate({height:"100px", width:"100px"}, 0, function(){
								
							$('.mainpanel').animate({height:"350px", width:"800px", paddingTop:"298px"}, function(){
								$('.topscreen').animate({top:"-120px"},300);
								$('.screencontainer').delay(10).animate({height:"340px", width:"800px"},0,function(){										
									$('#designswindow').fadeIn(function(){
										$('.protectiveshield').hide();
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



