$(window).load(function(){






	$('#irbis').click(function(){

		function clearjQueryCache(){
			for (var x in jQuery.cache){
				delete jQuery.cache[x];
			}
		}

		$('.protectiveshield').show(function(){
			$('.mainscreen').hide(0,function(){
				$('.mainpanel').clearQueue().animate({width:"100px", height:"100px", left:"250px"}, function(){
					$('.screencontainer').animate({height:"100px", width:"100px"}, 0, function(){


						$('.mainpanel').animate({width:"805px",height:"1956px", paddingTop:"98px"}, function(){	
							$('.topscreen').stop(true,true).animate({top:"-320px"},20);																			
							$('.screencontainer').delay(0).animate({height:"1956px",width:"805px"},0);


							$('#galleryone').attr('src','img/previews/3_1_1.jpg');
							$('#galleryonelink').attr('href','img/original/3_1_1.jpg');
							$('#gallerytwo').attr('src','img/previews/3_1_2.jpg');
							$('#gallerytwolink').attr('href','img/original/3_1_2.jpg');
							$('#gallerythree').attr('src','img/previews/3_1_3.jpg');
							$('#gallerythreelink').attr('href','img/original/3_1_3.jpg');
							$('#galleryfour').attr('src','img/previews/3_1_4.jpg');
							$('#galleryfourlink').attr('href','img/original/3_1_4.jpg');
							$('#galleryfive').attr('src','img/previews/3_1_5.jpg');
							$('#galleryfivelink').attr('href','img/original/3_1_5.jpg');
							$('.previewing').css('display','block');
							$('#gallerysix').hide();
							$('#galleryseven').hide();
							$('#galleryeight').hide();
							$('#gallerynine').hide();
							$('#galleryten').hide();
							$('#galleryeleven').hide();
							$('#gallerytwelve').hide();
							$('#gallerythirteen').hide();
							$('#galleryfourteen').hide();
							$('#galleryfifteen').hide();
							$('#gallerysixteen').hide();
							$('#galleryseventeen').hide();
							$('#galleryeighteen').hide();
							$('#gallerynineteen').hide();
							$('#gallerytwenty').hide();
							$('#gallerytwentyone').hide();
							$('#videoframe').hide();
							$('#captionone').html('HUNTING IRBIS');
							$('#captiontwo').html('Rare and gorgeous "irbis" snow leopards observe the surroundings ready to hunt. Scuplted with Zbrush, retopoed with Topogun, textured with MARI, scene assembled in 3dsMax using standard Hair&Fur plugin and rendered with Vray. Post-processed in Adobe Photoshop');
							$('#captionthree').html(
								'<img class="smallicon" src="logos/3dmax.png" height="20px" width="20px" title="3D Stuio Max">'+
								'<img class="smallicon" src="logos/zbrush.png" height="20px" width="20px" title="ZBrush">'+
								'<img class="smallicon" src="logos/topogun.png" height="20px" width="20px" title="Topogun">'+
								'<img class="smallicon" src="logos/vray.png" height="20px" width="20px" title="V-Ray">'+
								'<img class="smallicon" src="logos/mari.png" height="20px" width="20px" title="MARI Foundry">'+
								'<img class="smallicon" src="logos/photoshop.png" height="20px" width="20px" title="Adobe Photoshop">'
								);

							setTimeout(function(){$('#irbiswindow').html($("#tableToClone").clone());},0);

							$('#irbiswindow').show();
							$('.protectiveshield').hide();



						});
});
});		
});
});
});


$('#opportunists').click(function(){

	function clearjQueryCache(){
		for (var x in jQuery.cache){
			delete jQuery.cache[x];
		}
	}

	$('.protectiveshield').show(function(){
		$('.mainscreen').hide(0,function(){
			$('.topscreen').stop(true,true).animate({top:"-320px"},120);
			$('.mainpanel').clearQueue().animate({width:"100px", height:"100px", left:"250px"}, function(){

				$('.screencontainer').animate({height:"100px", width:"100px"}, 0, function(){
					
					$('.mainpanel').animate({width:"805px",height:"3010px", paddingTop:"98px"}, function(){	

						$('.screencontainer').delay(0).animate({height:"3010px",width:"805px"},0);


						$('#galleryone').attr('src','img/previews/4_1_1.jpg');
						$('#gallerytwo').attr('src','img/previews/4_1_2.jpg');
						$('#gallerythree').attr('src','img/previews/4_1_3.jpg');
						$('#galleryfour').attr('src','img/previews/4_1_4.jpg');
						$('#galleryfive').attr('src','img/previews/4_1_5.jpg');
						$('#gallerysix').attr('src','img/previews/4_1_6.jpg');
						$('#galleryseven').attr('src','img/previews/4_1_7.jpg');
						$('#galleryeight').attr('src','img/previews/4_1_8.jpg');

						$('#galleryonelink').attr('href','img/original/4_1_1.jpg');
						$('#gallerytwolink').attr('href','img/original/4_1_2.jpg');
						$('#gallerythreelink').attr('href','img/original/4_1_3.jpg');
						$('#galleryfourlink').attr('href','img/original/4_1_4.jpg');
						$('#galleryfivelink').attr('href','img/original/4_1_5.jpg');
						$('#gallerysixlink').attr('href','img/original/4_1_6.jpg');
						$('#gallerysevenlink').attr('href','img/original/4_1_7.jpg');
						$('#galleryeightlink').attr('href','img/original/4_1_8.jpg');

						$('.previewing').css('display','block');
						$('#gallerynine').hide();
						$('#galleryten').hide();
						$('#galleryeleven').hide();
						$('#gallerytwelve').hide();
						$('#gallerythirteen').hide();
						$('#galleryfourteen').hide();
						$('#galleryfifteen').hide();
						$('#gallerysixteen').hide();
						$('#galleryseventeen').hide();
						$('#galleryeighteen').hide();
						$('#gallerynineteen').hide();
						$('#gallerytwenty').hide();
						$('#gallerytwentyone').hide();

						$('#videoframe').hide();
						$('#captionone').html('OPPORTUNISTS');
						$('#captiontwo').html('"Each of them is on their own in a sea of unknown." Initial idea was to model Ceratophrys frog to study its patterns and forms. Sculpted in ZBrush, textured in MARI it was rigged later in 3DS Max and used for a more artistic scene.');
						$('#captionthree').html(
							'<img class="smallicon" src="logos/3dmax.png" height="20px" width="20px" title="3D Stuio Max">'+
							'<img class="smallicon" src="logos/zbrush.png" height="20px" width="20px" title="ZBrush">'+
							'<img class="smallicon" src="logos/topogun.png" height="20px" width="20px" title="Topogun">'+
							'<img class="smallicon" src="logos/vray.png" height="20px" width="20px" title="V-Ray">'+
							'<img class="smallicon" src="logos/mari.png" height="20px" width="20px" title="MARI Foundry">'+
							'<img class="smallicon" src="logos/photoshop.png" height="20px" width="20px" title="Adobe Photoshop">'

							);
						setTimeout(function(){$('#opportunistswindow').html($("#tableToClone").clone());},0);

						$('#opportunistswindow').show();
						$('.protectiveshield').hide();


						
					});
});
});		
});
});
});



$('#promise').click(function(){

	function clearjQueryCache(){
		for (var x in jQuery.cache){
			delete jQuery.cache[x];
		}
	}

	$('.protectiveshield').show(function(){
		$('.mainscreen').hide(0,function(){
			$('.topscreen').stop(true,true).animate({top:"-320px"},120);
			$('.mainpanel').clearQueue().animate({width:"100px", height:"100px", left:"250px"}, function(){

				$('.screencontainer').animate({height:"100px", width:"100px"}, 0, function(){
					
					$('.mainpanel').animate({width:"805px",height:"2015px", paddingTop:"98px"}, function(){	

						$('.screencontainer').delay(0).animate({height:"2015px",width:"805px"},0);


						$('#galleryone').attr('src','img/previews/5_1_2.jpg');
						$('#gallerytwo').attr('src','img/previews/5_1_1.jpg');
						$('#gallerythree').attr('src','img/previews/5_1_3.jpg');
						$('#galleryfour').attr('src','img/previews/5_1_4.jpg');
						$('#galleryfive').attr('src','img/previews/5_1_5.jpg');

						$('#galleryonelink').attr('href','img/original/5_1_2.jpg');
						$('#gallerytwolink').attr('href','img/original/5_1_1.jpg');
						$('#gallerythreelink').attr('href','img/original/5_1_3.jpg');
						$('#galleryfourlink').attr('href','img/original/5_1_4.jpg');
						$('#galleryfivelink').attr('href','img/original/5_1_5.jpg');

						$('.previewing').css('display','block');
						$('#gallerysix').hide();
						$('#galleryseven').hide();
						$('#galleryeight').hide();


						$('#gallerynine').hide();
						$('#galleryten').hide();
						$('#galleryeleven').hide();
						$('#gallerytwelve').hide();
						$('#gallerythirteen').hide();
						$('#galleryfourteen').hide();
						$('#galleryfifteen').hide();
						$('#gallerysixteen').hide();
						$('#galleryseventeen').hide();
						$('#galleryeighteen').hide();
						$('#gallerynineteen').hide();
						$('#gallerytwenty').hide();
						$('#gallerytwentyone').hide();

						$('#videoframe').hide();
						$('#captionone').html('YET SHE PROMISED');
						$('#captiontwo').html('Personal work showing thoughts about relationship expectations and outcomes. Hands were based on my own hand and modelled in Cinema4D. Liquid particles were implemented using XParticles plugin.');
						$('#captionthree').html(
							'<img class="smallicon" src="logos/cinema4d.png" height="20px" width="20px" title="Cinema4D">'+										
							'<img class="smallicon" src="logos/photoshop.png" height="20px" width="20px" title="Adobe Photoshop">'

							);
						setTimeout(function(){$('#promisewindow').html($("#tableToClone").clone());},0);

						$('#promisewindow').show();
						$('.protectiveshield').hide();


						
					});
});
});		
});
});
});


$('#cyborg').click(function(){


	function clearjQueryCache(){
		for (var x in jQuery.cache){
			delete jQuery.cache[x];
		}
	}

	$('.protectiveshield').show(function(){
		$('.mainscreen').hide(0,function(){
			$('.topscreen').stop(true,true).animate({top:"-320px"},120);
			$('.mainpanel').clearQueue().animate({width:"100px", height:"100px", left:"250px"}, function(){

				$('.screencontainer').animate({height:"100px", width:"100px"}, 0, function(){
					
					$('.mainpanel').animate({width:"805px",height:"3470px", paddingTop:"98px"}, function(){	

						$('.screencontainer').delay(0).animate({height:"3470px",width:"805px"},0);


						$('#galleryone').attr('src','img/previews/6_1_1.jpg');
						$('#gallerytwo').attr('src','img/previews/6_1_2.jpg');
						$('#gallerythree').attr('src','img/previews/6_1_6.jpg');
						$('#galleryfour').attr('src','img/previews/6_1_3.jpg');
						$('#galleryfive').attr('src','img/previews/6_1_4.jpg');
						$('#gallerysix').attr('src','img/previews/6_1_5.jpg');

						$('#galleryonelink').attr('href','img/original/6_1_1.jpg');
						$('#gallerytwolink').attr('href','img/original/6_1_2.jpg');
						$('#gallerythreelink').attr('href','img/original/6_1_6.jpg');
						$('#galleryfourlink').attr('href','img/original/6_1_3.jpg');
						$('#galleryfivelink').attr('href','img/original/6_1_4.jpg');
						$('#gallerysixlink').attr('href','img/original/6_1_5.jpg');

						$('.previewing').css('display','block');
						$('#galleryseven').hide();
						$('#galleryeight').hide();

						$('#gallerynine').hide();
						$('#galleryten').hide();
						$('#galleryeleven').hide();
						$('#gallerytwelve').hide();
						$('#gallerythirteen').hide();
						$('#galleryfourteen').hide();
						$('#galleryfifteen').hide();
						$('#gallerysixteen').hide();
						$('#galleryseventeen').hide();
						$('#galleryeighteen').hide();
						$('#gallerynineteen').hide();
						$('#gallerytwenty').hide();
						$('#gallerytwentyone').hide();



						$('#videoframe').hide();
						$('#captionone').html('CYBORG HEAD');
						$('#captiontwo').html('A rusty creation from the post-apocalyptic world inspired by the movie "Judge Dredd". Hard surface modelled in 3DS Max, textured in Substance Designer and rendered with Vray as a high-poly mesh and with Marmoset Toolbag as a lowpoly game-ready version.');
						$('#captionthree').html(
							'<img class="smallicon" src="logos/3dmax.png" height="20px" width="20px" title="3D Stuio Max">'+
							'<img class="smallicon" src="logos/substancedesigner.png" height="20px" width="20px" title="Substance Designer">'+
							'<img class="smallicon" src="logos/topogun.png" height="20px" width="20px" title="Topogun">'+
							'<img class="smallicon" src="logos/vray.png" height="20px" width="20px" title="V-Ray">'+
							'<img class="smallicon" src="logos/marmoset.png" height="20px" width="20px" title="Marmoset Toolbag">'+
							'<img class="smallicon" src="logos/photoshop.png" height="20px" width="20px" title="Adobe Photoshop">'
							

							);
						setTimeout(function(){$('#cyborgwindow').html($("#tableToClone").clone());},0);

						
						$('#cyborgwindow').show();
						$('.protectiveshield').hide();


						
					});
});
});		
});
});
});

$('#robo').click(function(){

	function clearjQueryCache(){
		for (var x in jQuery.cache){
			delete jQuery.cache[x];
		}
	}
	$('.protectiveshield').show(function(){
		$('.mainscreen').hide(0,function(){
			$('.topscreen').stop(true,true).animate({top:"-320px"},120);
			$('.mainpanel').clearQueue().animate({width:"100px", height:"100px", left:"250px"}, function(){

				$('.screencontainer').animate({height:"100px", width:"100px"}, 0, function(){
					
					$('.mainpanel').animate({width:"805px",height:"4748px", paddingTop:"98px"}, function(){	

						$('.screencontainer').delay(0).animate({height:"4748px",width:"805px"},0);

						$('#galleryone').attr('src','img/previews/7_1_1.jpg');
						$('#gallerytwo').attr('src','img/previews/7_1_2.jpg');
						$('#gallerythree').attr('src','img/previews/7_1_3.jpg');
						$('#galleryfour').attr('src','img/previews/7_1_4.jpg');
						$('#galleryfive').attr('src','img/previews/7_1_5.jpg');
						$('#gallerysix').attr('src','img/previews/7_1_6.jpg');
						$('#galleryseven').attr('src','img/previews/7_1_7.jpg');

						$('#galleryonelink').attr('href','img/original/7_1_1.jpg');
						$('#gallerytwolink').attr('href','img/original/7_1_2.jpg');
						$('#gallerythreelink').attr('href','img/original/7_1_3.jpg');
						$('#galleryfourlink').attr('href','img/original/7_1_4.jpg');
						$('#galleryfivelink').attr('href','img/original/7_1_5.jpg');
						$('#gallerysixlink').attr('href','img/original/7_1_6.jpg');
						$('#gallerysevenlink').attr('href','img/original/7_1_7.jpg');

						$('.previewing').css('display','block');
						$('#galleryeight').hide();

						$('#gallerynine').hide();
						$('#galleryten').hide();
						$('#galleryeleven').hide();
						$('#gallerytwelve').hide();
						$('#gallerythirteen').hide();
						$('#galleryfourteen').hide();
						$('#galleryfifteen').hide();
						$('#gallerysixteen').hide();
						$('#galleryseventeen').hide();
						$('#galleryeighteen').hide();
						$('#gallerynineteen').hide();
						$('#gallerytwenty').hide();
						$('#gallerytwentyone').hide();

						$('#videoframe').attr('src','https://www.youtube.com/embed/qhESQgW5LbE');
						$('#videoframe').attr('height','315px');
						$('#videoframe').attr('showinfo','0');
						$('#captionone').html('ROBO RUNNER');
						$('#captiontwo').html("Animation ready compact quadruped inspired by Boston Dynamic's Dog. Modelled in 3Ds Max, textured in Substance Painted and rendered with V-ray and Marmoset Toolbag. Animated version was done in Cinema4D and later composed in Adobe AfterEffects.");
						$('#captionthree').html(
							'<img class="smallicon" src="logos/3dmax.png" height="20px" width="20px" title="3D Stuio Max">'+
							'<img class="smallicon" src="logos/substancedesigner.png" height="20px" width="20px" title="Substance Designer">'+
							'<img class="smallicon" src="logos/vray.png" height="20px" width="20px" title="V-Ray">'+
							'<img class="smallicon" src="logos/marmoset.png" height="20px" width="20px" title="Marmoset Toolbag">'+
							'<img class="smallicon" src="logos/Cinema4d.png" height="20px" width="20px" title="Cinema4D">'+
							'<img class="smallicon" src="logos/aftereffects.png" height="20px" width="20px" title="Adobe After Effects">'+
							'<img class="smallicon" src="logos/photoshop.png" height="20px" width="20px" title="Adobe Photoshop">'

							);
						setTimeout(function(){$('#robowindow').html($("#tableToClone").clone());},0);

						$('#robowindow').show();
						$('.protectiveshield').hide();


						
					});
});
});		
});
});
});

$('#roller').click(function(){

	function clearjQueryCache(){
		for (var x in jQuery.cache){
			delete jQuery.cache[x];
		}
	}


	$('.protectiveshield').show(function(){
		$('.mainscreen').hide(0,function(){
			$('.topscreen').stop(true,true).animate({top:"-320px"},120);
			$('.mainpanel').clearQueue().animate({width:"100px", height:"100px", left:"250px"}, function(){

				$('.screencontainer').animate({height:"100px", width:"100px"}, 0, function(){
					
					$('.mainpanel').animate({width:"805px",height:"2035px", paddingTop:"98px"}, function(){	

						$('.screencontainer').delay(0).animate({height:"2035px",width:"805px"},0);

						$('#galleryone').attr('src','img/previews/8_1_2.jpg');
						$('#gallerytwo').attr('src','img/previews/8_1_1.jpg');
						$('#gallerythree').attr('src','img/previews/8_1_3.jpg');
						$('#galleryfour').attr('src','img/previews/8_1_4.jpg');

						$('#galleryonelink').attr('href','img/original/8_1_2.jpg');
						$('#gallerytwolink').attr('href','img/original/8_1_1.jpg');
						$('#gallerythreelink').attr('href','img/original/8_1_3.jpg');
						$('#galleryfourlink').attr('href','img/original/8_1_4.jpg');

						$('.previewing').css('display','block');
						$('#galleryfive').hide();
						$('#gallerysix').hide();
						$('#galleryseven').hide();
						$('#galleryeight').hide();

						$('#gallerynine').hide();
						$('#galleryten').hide();
						$('#galleryeleven').hide();
						$('#gallerytwelve').hide();
						$('#gallerythirteen').hide();
						$('#galleryfourteen').hide();
						$('#galleryfifteen').hide();
						$('#gallerysixteen').hide();
						$('#galleryseventeen').hide();
						$('#galleryeighteen').hide();
						$('#gallerynineteen').hide();
						$('#gallerytwenty').hide();
						$('#gallerytwentyone').hide();

						$('#videoframe').attr('src','https://www.youtube.com/embed/ozifjqNQi60');
						$('#videoframe').attr('height','315px');
						$('#videoframe').attr('showinfo','0');
						$('#captionone').html('ROAD ROLLER');
						$('#captiontwo').html("Game-ready piece of heave roadwork machinery with procedural textures and animated short. Modelled in 3Ds Max, textured with Substance Painter and then rendered in V-Ray and animated in Cinema4D.");
						$('#captionthree').html(
							'<img class="smallicon" src="logos/3dmax.png" height="20px" width="20px" title="3D Stuio Max">'+
							'<img class="smallicon" src="logos/Cinema4d.png" height="20px" width="20px" title="Cinema4D">'+
							'<img class="smallicon" src="logos/substancedesigner.png" height="20px" width="20px" title="Substance Designer">'+
							'<img class="smallicon" src="logos/vray.png" height="20px" width="20px" title="V-Ray">'+
							'<img class="smallicon" src="logos/photoshop.png" height="20px" width="20px" title="Adobe Photoshop">'

							);
						setTimeout(function(){$('#rollerwindow').html($("#tableToClone").clone());},0);


						$('#rollerwindow').show();
						$('.protectiveshield').hide();


						
					});
});
});		
});
});
});

$('#pantheon').click(function(){

	function clearjQueryCache(){
		for (var x in jQuery.cache){
			delete jQuery.cache[x];
		}
	}


	$('.protectiveshield').show(function(){
		$('.mainscreen').hide(0,function(){
			$('.topscreen').stop(true,true).animate({top:"-320px"},120);
			$('.mainpanel').clearQueue().animate({width:"100px", height:"100px", left:"250px"}, function(){

				$('.screencontainer').animate({height:"100px", width:"100px"}, 0, function(){
					
					$('.mainpanel').animate({width:"805px",height:"1445px", paddingTop:"98px"}, function(){	

						$('.screencontainer').delay(0).animate({height:"1445px",width:"805px"},0);

						$('#galleryone').attr('src','img/previews/9_1_1.jpg');
						$('#gallerytwo').attr('src','img/previews/9_1_2.jpg');
						$('#gallerythree').attr('src','img/previews/9_1_3.jpg');

						$('#galleryonelink').attr('href','img/original/9_1_1.jpg');
						$('#gallerytwolink').attr('href','img/original/9_1_2.jpg');
						$('#gallerythreelink').attr('href','img/original/9_1_3.jpg');

						$('.previewing').css('display','block');
						$('#galleryfour').hide();
						$('#galleryfive').hide();
						$('#gallerysix').hide();
						$('#galleryseven').hide();
						$('#galleryeight').hide();

						$('#gallerynine').hide();
						$('#galleryten').hide();
						$('#galleryeleven').hide();
						$('#gallerytwelve').hide();
						$('#gallerythirteen').hide();
						$('#galleryfourteen').hide();
						$('#galleryfifteen').hide();
						$('#gallerysixteen').hide();
						$('#galleryseventeen').hide();
						$('#galleryeighteen').hide();
						$('#gallerynineteen').hide();
						$('#gallerytwenty').hide();
						$('#gallerytwentyone').hide();


						$('#videoframe').hide();
						$('#captionone').html('PANTHEON');
						$('#captiontwo').html("Architectural piece of Roman Pantheon. Modelled and textured with Cinema4D.");
						$('#captionthree').html(										
							'<img class="smallicon" src="logos/Cinema4d.png" height="20px" width="20px" title="Cinema4D">'+										
							'<img class="smallicon" src="logos/photoshop.png" height="20px" width="20px" title="Adobe Photoshop">'
							);
						setTimeout(function(){$('#pantheonwindow').html($("#tableToClone").clone());},0);


						$('#pantheonwindow').show();
						$('.protectiveshield').hide();


						
					});
});
});		
});
});
});



$('#hoplite').click(function(){

	function clearjQueryCache(){
		for (var x in jQuery.cache){
			delete jQuery.cache[x];
		}
	}

	$('.protectiveshield').show(function(){
		$('.mainscreen').hide(0,function(){
			$('.topscreen').stop(true,true).animate({top:"-320px"},120);
			$('.mainpanel').clearQueue().animate({width:"100px", height:"100px", left:"250px"}, function(){

				$('.screencontainer').animate({height:"100px", width:"100px"}, 0, function(){
					
					$('.mainpanel').animate({width:"805px",height:"5640px", paddingTop:"98px"}, function(){	

						$('.screencontainer').delay(0).animate({height:"5640px",width:"805px"},0);

						$('#galleryone').attr('src','img/previews/10_1_5.jpg');
						$('#gallerytwo').attr('src','img/previews/10_1_2.jpg');
						$('#gallerythree').attr('src','img/previews/10_1_8.jpg');
						$('#galleryfour').attr('src','img/previews/10_1_9.jpg');
						$('#galleryfive').attr('src','img/previews/10_1_10.jpg');
						$('#gallerysix').attr('src','img/previews/10_1_11.jpg');
						$('#galleryseven').attr('src','img/previews/10_1_7.jpg');
						$('#galleryeight').attr('src','img/previews/10_1_6.jpg');
						$('#gallerynine').attr('src','img/previews/10_1_3.jpg');
						$('#galleryten').attr('src','img/previews/10_1_4.jpg');
						$('#galleryeleven').attr('src','img/previews/10_1_1.jpg');

						$('#galleryonelink').attr('href','img/original/10_1_5.jpg');
						$('#gallerytwolink').attr('href','img/original/10_1_2.jpg');
						$('#gallerythreelink').attr('href','img/original/10_1_8.jpg');
						$('#galleryfourlink').attr('href','img/original/10_1_9.jpg');
						$('#galleryfivelink').attr('href','img/original/10_1_10.jpg');
						$('#gallerysixlink').attr('href','img/original/10_1_11.jpg');
						$('#gallerysevenlink').attr('href','img/original/10_1_7.jpg');
						$('#galleryeightlink').attr('href','img/original/10_1_6.jpg');
						$('#galleryninelink').attr('href','img/original/10_1_3.jpg');
						$('#gallerytenlink').attr('href','img/original/10_1_4.jpg');
						$('#galleryelevenlink').attr('href','img/original/10_1_1.jpg');

						$('.previewing').css('display','block');

						$('#gallerytwelve').hide();
						$('#gallerythirteen').hide();
						$('#galleryfourteen').hide();
						$('#galleryfifteen').hide();
						$('#gallerysixteen').hide();
						$('#galleryseventeen').hide();
						$('#galleryeighteen').hide();
						$('#gallerynineteen').hide();
						$('#gallerytwenty').hide();
						$('#gallerytwentyone').hide();



						$('#videoframe').hide();
						$('#captionone').html('HOPLITE BAR BRANDING GUIDE');
						$('#captiontwo').html("Full branding package of Hoplite nutrition bar which includes logo, branding guide, package design and social media design. 3d rendered in Cinema4D, physical mock-ups assembled and photographed as a sample of product. Patterns done with Adobe Illustrator.");
						$('#captionthree').html(										
							'<img class="smallicon" src="logos/3dmax.png" height="20px" width="20px" title="3D Studio Max">'+
							'<img class="smallicon" src="logos/illustrator.png" height="20px" width="20px" title="Adobde Illustrator">'+
							'<img class="smallicon" src="logos/indesign.png" height="20px" width="20px" title="Adobe Indesign">'+										
							'<img class="smallicon" src="logos/photoshop.png" height="20px" width="20px" title="Adobe Photoshop">'
							);
						setTimeout(function(){$('#hoplitewindow').html($("#tableToClone").clone());},0);

						$('#hoplitewindow').show();
						$('.protectiveshield').hide();


						
					});
});
});		
});
});
});


$('#cards').click(function(){


	function clearjQueryCache(){
		for (var x in jQuery.cache){
			delete jQuery.cache[x];
		}
	}

	$('.protectiveshield').show(function(){
		$('.mainscreen').hide(0,function(){
			$('.topscreen').stop(true,true).animate({top:"-320px"},120);
			$('.mainpanel').clearQueue().animate({width:"100px", height:"100px", left:"250px"}, function(){

				$('.screencontainer').animate({height:"100px", width:"100px"}, 0, function(){
					
					$('.mainpanel').animate({width:"805px",height:"4780px", paddingTop:"98px"}, function(){	

						$('.screencontainer').delay(0).animate({height:"4780px",width:"805px"},0);

						$('#galleryone').attr('src','img/previews/11_1_1.jpg');
						$('#gallerytwo').attr('src','img/previews/11_1_2.jpg');
						$('#gallerythree').attr('src','img/previews/11_1_3.jpg');
						$('#galleryfour').attr('src','img/previews/11_1_4.jpg');
						$('#galleryfive').attr('src','img/previews/11_1_5.jpg');
						$('#gallerysix').attr('src','img/previews/11_1_6.jpg');
						$('#galleryseven').attr('src','img/previews/11_1_7.jpg');
						$('#galleryeight').attr('src','img/previews/11_1_8.jpg');
						$('#gallerynine').attr('src','img/previews/11_1_9.jpg');
						$('#galleryten').attr('src','img/previews/11_1_10.jpg');
						$('#galleryeleven').attr('src','img/previews/11_1_11.jpg');
						$('#gallerytwelve').attr('src','img/previews/11_1_12.jpg');

						$('#galleryonelink').attr('href','img/original/11_1_1.jpg');
						$('#gallerytwolink').attr('href','img/original/11_1_2.jpg');
						$('#gallerythreelink').attr('href','img/original/11_1_3.jpg');
						$('#galleryfourlink').attr('href','img/original/11_1_4.jpg');
						$('#galleryfivelink').attr('href','img/original/11_1_5.jpg');
						$('#gallerysixlink').attr('href','img/original/11_1_6.jpg');
						$('#gallerysevenlink').attr('href','img/original/11_1_7.jpg');
						$('#galleryeightlink').attr('href','img/original/11_1_8.jpg');
						$('#galleryninelink').attr('href','img/original/11_1_9.jpg');
						$('#gallerytenlink').attr('href','img/original/11_1_10.jpg');
						$('#galleryelevenlink').attr('href','img/original/11_1_11.jpg');
						$('#gallerytwelvelink').attr('href','img/original/11_1_12.jpg');

						$('.previewing').css('display','block');
						$('#gallerythirteen').hide();
						$('#galleryfourteen').hide();
						$('#galleryfifteen').hide();
						$('#gallerysixteen').hide();
						$('#galleryseventeen').hide();
						$('#galleryeighteen').hide();
						$('#gallerynineteen').hide();
						$('#gallerytwenty').hide();
						$('#gallerytwentyone').hide();

						$('#videoframe').hide();
						$('#captionone').html('DECK OF CARDS DESIGNS');
						$('#captiontwo').html("Suit of diamonds deck of card design as well as package design for the deck of cards. Robots where modelled and posed in Cinema4D. Physical mockup was made and photographed. ");
						$('#captionthree').html(										
							'<img class="smallicon" src="logos/Cinema4d.png" height="20px" width="20px" title="Cinema4D">'+
							'<img class="smallicon" src="logos/illustrator.png" height="20px" width="20px" title="Adobde Illustrator">'+															
							'<img class="smallicon" src="logos/photoshop.png" height="20px" width="20px" title="Adobe Photoshop">'
							);
						setTimeout(function(){$('#cardswindow').html($("#tableToClone").clone());},0);

						$('#cardswindow').show();
						$('.protectiveshield').hide();

					});
});
});		
});
});
});

$('#apple').click(function(){

	function clearjQueryCache(){
		for (var x in jQuery.cache){
			delete jQuery.cache[x];
		}
	}

	$('.protectiveshield').show(function(){
		$('.mainscreen').hide(0,function(){
			$('.topscreen').stop(true,true).animate({top:"-320px"},120);
			$('.mainpanel').clearQueue().animate({width:"100px", height:"100px", left:"250px"}, function(){

				$('.screencontainer').animate({height:"100px", width:"100px"}, 0, function(){
					
					$('.mainpanel').animate({width:"805px",height:"6332px", paddingTop:"98px"}, function(){	

						$('.screencontainer').delay(0).animate({height:"6332px",width:"805px"},0);

						$('#galleryone').attr('src','img/previews/12_1_1.jpg');
						$('#gallerytwo').attr('src','img/previews/12_1_2.jpg');
						$('#gallerythree').attr('src','img/previews/12_1_3.jpg');
						$('#galleryfour').attr('src','img/previews/12_1_4.gif');
						$('#galleryfive').attr('src','img/previews/12_1_6.gif');
						$('#gallerysix').attr('src','img/previews/12_1_8.jpg');
						$('#galleryseven').attr('src','img/previews/12_1_9.jpg');
						$('#galleryeight').attr('src','img/previews/12_1_10.jpg');
						$('#gallerynine').attr('src','img/previews/12_1_11.gif');
						$('#galleryten').attr('src','img/previews/12_1_14.gif');


						$('#galleryonelink').attr('href','img/original/12_1_1.jpg');
						$('#gallerytwolink').attr('href','img/original/12_1_2.jpg');
						$('#gallerythreelink').attr('href','img/original/12_1_3.jpg');
						$('#galleryfourlink').attr('href','img/original/12_1_4.gif');
						$('#galleryfivelink').attr('href','img/original/12_1_6.gif');
						$('#gallerysixlink').attr('href','img/original/12_1_8.jpg');
						$('#gallerysevenlink').attr('href','img/original/12_1_9.jpg');
						$('#galleryeightlink').attr('href','img/original/12_1_10.jpg');
						$('#galleryninelink').attr('href','img/original/12_1_11.gif');
						$('#gallerytenlink').attr('href','img/original/12_1_14.gif');

						$('.previewing').css('display','block');
						$('#galleryeleven').hide();
						$('#gallerytwelve').hide();

						$('#gallerythirteen').hide();
						$('#galleryfourteen').hide();
						$('#galleryfifteen').hide();
						$('#gallerysixteen').hide();
						$('#galleryseventeen').hide();
						$('#galleryeighteen').hide();
						$('#gallerynineteen').hide();
						$('#gallerytwenty').hide();
						$('#gallerytwentyone').hide();

						$('#videoframe').hide();
						$('#captionone').html('APPLE TRIBUTE E-MAGAZINE');
						$('#captiontwo').html("Tribute to Apple prducts and designs put into a digital magazine layout format. All imagery was either 3d modelled and rendered with Cinema4D or drawn in Adobe Illustrator. Final layout is assembled in Adobe Indesign.");
						$('#captionthree').html(										
							'<img class="smallicon" src="logos/Cinema4d.png" height="20px" width="20px" title="Cinema4D">'+
							'<img class="smallicon" src="logos/illustrator.png" height="20px" width="20px" title="Adobde Illustrator">'+
							'<img class="smallicon" src="logos/indesign.png" height="20px" width="20px" title="Adobe Indesign">'+										
							'<img class="smallicon" src="logos/photoshop.png" height="20px" width="20px" title="Adobe Photoshop">'
							);
						setTimeout(function(){$('#applewindow').html($("#tableToClone").clone());},0);


						$('#applewindow').show();
						$('.protectiveshield').hide();


						
					});
});
});		
});
});
});

$('#mashup').click(function(){

	function clearjQueryCache(){
		for (var x in jQuery.cache){
			delete jQuery.cache[x];
		}
	}


	$('.protectiveshield').show(function(){
		$('.mainscreen').hide(0,function(){
			$('.topscreen').stop(true,true).animate({top:"-320px"},120);
			$('.mainpanel').clearQueue().animate({width:"100px", height:"100px", left:"250px"}, function(){

				$('.screencontainer').animate({height:"100px", width:"100px"}, 0, function(){
					
					$('.mainpanel').animate({width:"805px",height:"9508px", paddingTop:"98px"}, function(){	

						$('.screencontainer').delay(0).animate({height:"9508px",width:"805px"},0);

						$('#galleryone').attr('src','img/previews/13_1_20.jpg');
						$('#gallerytwo').attr('src','img/previews/13_1_1.jpg');
						$('#gallerythree').attr('src','img/previews/13_1_2.jpg');
						$('#galleryfour').attr('src','img/previews/13_1_3.jpg');
						$('#galleryfive').attr('src','img/previews/13_1_4.jpg');
						$('#gallerysix').attr('src','img/previews/13_1_5.jpg');
						$('#galleryseven').attr('src','img/previews/13_1_6.jpg');
						$('#galleryeight').attr('src','img/previews/13_1_7.jpg');
						$('#gallerynine').attr('src','img/previews/13_1_8.jpg');
						$('#galleryten').attr('src','img/previews/13_1_9.jpg');
						$('#galleryeleven').attr('src','img/previews/13_1_10.jpg');
						$('#gallerytwelve').attr('src','img/previews/13_1_11.jpg');
						$('#gallerythirteen').attr('src','img/previews/13_1_12.jpg');
						$('#galleryfourteen').attr('src','img/previews/13_1_13.jpg');
						$('#galleryfifteen').attr('src','img/previews/13_1_14.jpg');
						$('#gallerysixteen').attr('src','img/previews/13_1_15.jpg');
						$('#galleryseventeen').attr('src','img/previews/13_1_16.jpg');
						$('#galleryeighteen').attr('src','img/previews/13_1_17.jpg');
						$('#gallerynineteen').attr('src','img/previews/13_1_18.jpg');
						$('#gallerytwenty').attr('src','img/previews/13_1_19.jpg');
						$('#gallerytwentyone').attr('src','img/previews/13_1_21.jpg');


						$('#galleryonelink').attr('href','img/original/13_1_20.jpg');
						$('#gallerytwolink').attr('href','img/original/13_1_1.jpg');
						$('#gallerythreelink').attr('href','img/original/13_1_2.jpg');
						$('#galleryfourlink').attr('href','img/original/13_1_3.jpg');
						$('#galleryfivelink').attr('href','img/original/13_1_4.jpg');
						$('#gallerysixlink').attr('href','img/original/13_1_5.jpg');
						$('#gallerysevenlink').attr('href','img/original/13_1_6.jpg');
						$('#galleryeightlink').attr('href','img/original/13_1_7.jpg');
						$('#galleryninelink').attr('href','img/original/13_1_8.jpg');
						$('#gallerytenlink').attr('href','img/original/13_1_9.jpg');
						$('#galleryelevenlink').attr('href','img/original/13_1_10.jpg');
						$('#gallerytwelvelink').attr('href','img/original/13_1_11.jpg');
						$('#gallerythirteenlink').attr('href','img/original/13_1_12.jpg');
						$('#galleryfourteenlink').attr('href','img/original/13_1_13.jpg');
						$('#galleryfifteenlink').attr('href','img/original/13_1_14.jpg');
						$('#gallerysixteenlink').attr('href','img/original/13_1_15.jpg');
						$('#galleryseventeenlink').attr('href','img/original/13_1_16.jpg');
						$('#galleryeighteenlink').attr('href','img/original/13_1_17.jpg');
						$('#gallerynineteenlink').attr('href','img/original/13_1_18.jpg');
						$('#gallerytwentylink').attr('href','img/original/13_1_19.jpg');
						$('#gallerytwentyonelink').attr('href','img/original/13_1_21.jpg');

						$('.previewing').css('display','block');
						$('#videoframe').hide();
						$('#captionone').html('MASH-UP BOOK');
						$('#captiontwo').html("A collection of small vector based and 3D based posters gathered and layed out in one brochure. All 3d models are done in Cinema4D. Vector graphics created in Illustrator. This book is supposed to show a combination of typography, illustration and 3d modelling in one project.");
						$('#captionthree').html(										
							'<img class="smallicon" src="logos/Cinema4d.png" height="20px" width="20px" title="Cinema4D">'+
							'<img class="smallicon" src="logos/illustrator.png" height="20px" width="20px" title="Adobde Illustrator">'+
							'<img class="smallicon" src="logos/indesign.png" height="20px" width="20px" title="Adobe Indesign">'+										
							'<img class="smallicon" src="logos/photoshop.png" height="20px" width="20px" title="Adobe Photoshop">'
							);
						setTimeout(function(){$('#mashupwindow').html($("#tableToClone").clone());},0);


						$('#mashupwindow').show();
						$('.protectiveshield').hide();


						
					});
});
});		
});
});
});


$('#virgil').click(function(){

	function clearjQueryCache(){
		for (var x in jQuery.cache){
			delete jQuery.cache[x];
		}
	}


	$('.protectiveshield').show(function(){
		$('.mainscreen').hide(0,function(){
			$('.topscreen').stop(true,true).animate({top:"-320px"},120);
			$('.mainpanel').clearQueue().animate({width:"100px", height:"100px", left:"250px"}, function(){

				$('.screencontainer').animate({height:"100px", width:"100px"}, 0, function(){
					
					$('.mainpanel').animate({width:"805px",height:"3385px", paddingTop:"98px"}, function(){	

						$('.screencontainer').delay(0).animate({height:"3850px",width:"805px"},0);

						$('#galleryone').attr('src','img/previews/14_1_1.jpg');
						$('#gallerytwo').attr('src','img/previews/14_1_2.jpg');
						$('#gallerythree').attr('src','img/previews/14_1_3.jpg');
						$('#galleryfour').attr('src','img/previews/14_1_4.jpg');
						$('#galleryfive').attr('src','img/previews/14_1_5.jpg');
						$('#gallerysix').attr('src','img/previews/14_1_6.jpg');
						$('#galleryseven').attr('src','img/previews/14_1_7.jpg');

						$('#galleryonelink').attr('href','img/original/14_1_1.jpg');
						$('#gallerytwolink').attr('href','img/original/14_1_2.jpg');
						$('#gallerythreelink').attr('href','img/original/14_1_3.jpg');
						$('#galleryfourlink').attr('href','img/original/14_1_4.jpg');
						$('#galleryfivelink').attr('href','img/original/14_1_5.jpg');
						$('#gallerysixlink').attr('href','img/original/14_1_6.jpg');
						$('#gallerysevenlink').attr('href','img/original/14_1_7.jpg');

						$('.previewing').css('display','block');
						$('#galleryeight').hide();
						$('#gallerynine').hide();
						$('#galleryten').hide();
						$('#galleryeleven').hide();
						$('#gallerytwelve').hide();

						$('#gallerythirteen').hide();
						$('#galleryfourteen').hide();
						$('#galleryfifteen').hide();
						$('#gallerysixteen').hide();
						$('#galleryseventeen').hide();
						$('#galleryeighteen').hide();
						$('#gallerynineteen').hide();
						$('#gallerytwenty').hide();
						$('#gallerytwentyone').hide();

						$('#videoframe').hide();
						$('#captionone').html("VIRGIL'S BBQ REBRANDING");
						$('#captiontwo').html("Redesigned branding for NYC's Virgil's Barbeque. Reworked logo, menus, business cards and BBQ sauce package. Mock-up are made physically as well as rendered in Cinema4D");
						$('#captionthree').html(										
							'<img class="smallicon" src="logos/Cinema4d.png" height="20px" width="20px" title="Cinema4D">'+
							'<img class="smallicon" src="logos/illustrator.png" height="20px" width="20px" title="Adobde Illustrator">'+
							'<img class="smallicon" src="logos/indesign.png" height="20px" width="20px" title="Adobe Indesign">'+										
							'<img class="smallicon" src="logos/photoshop.png" height="20px" width="20px" title="Adobe Photoshop">'
							);
						setTimeout(function(){$('#virgilwindow').html($("#tableToClone").clone());},0);

						$('#virgilwindow').show();
						$('.protectiveshield').hide();


						
					});
});
});		
});
});
});


$('#record').click(function(){

	function clearjQueryCache(){
		for (var x in jQuery.cache){
			delete jQuery.cache[x];
		}
	}


	$('.protectiveshield').show(function(){
		$('.mainscreen').hide(0,function(){
			$('.topscreen').stop(true,true).animate({top:"-320px"},120);
			$('.mainpanel').clearQueue().animate({width:"100px", height:"100px", left:"250px"}, function(){

				$('.screencontainer').animate({height:"100px", width:"100px"}, 0, function(){
					
					$('.mainpanel').animate({width:"805px",height:"2440px", paddingTop:"98px"}, function(){	

						$('.screencontainer').delay(0).animate({height:"2440px",width:"805px"},0);

						$('#galleryone').attr('src','img/previews/15_1_3.jpg');
						$('#gallerytwo').attr('src','img/previews/15_1_2.jpg');
						$('#gallerythree').attr('src','img/previews/15_1_1.jpg');
						$('#galleryfour').attr('src','img/previews/15_1_4.jpg');
						$('#galleryfive').attr('src','img/previews/15_1_5.jpg');
						$('#gallerysix').attr('src','img/previews/15_1_6.jpg');



						$('#galleryonelink').attr('href','img/original/15_1_3.jpg');
						$('#gallerytwolink').attr('href','img/original/15_1_2.jpg');
						$('#gallerythreelink').attr('href','img/original/15_1_1.jpg');
						$('#galleryfourlink').attr('href','img/original/15_1_4.jpg');
						$('#galleryfivelink').attr('href','img/original/15_1_5.jpg');
						$('#gallerysixlink').attr('href','img/original/15_1_6.jpg');

						$('.previewing').css('display','block');
						$('#galleryseven').hide();
						$('#galleryeight').hide();
						$('#gallerynine').hide();
						$('#galleryten').hide();
						$('#galleryeleven').hide();
						$('#gallerytwelve').hide();

						$('#gallerythirteen').hide();
						$('#galleryfourteen').hide();
						$('#galleryfifteen').hide();
						$('#gallerysixteen').hide();
						$('#galleryseventeen').hide();
						$('#galleryeighteen').hide();
						$('#gallerynineteen').hide();
						$('#gallerytwenty').hide();
						$('#gallerytwentyone').hide();

						$('#videoframe').hide();
						$('#captionone').html("RECORD COMPANY LOGO");
						$('#captiontwo').html("Record company vector based logo designs proposal.");
						$('#captionthree').html(										
							'<img class="smallicon" src="logos/illustrator.png" height="20px" width="20px" title="Adobde Illustrator">'+															
							'<img class="smallicon" src="logos/photoshop.png" height="20px" width="20px" title="Adobe Photoshop">'
							);
						setTimeout(function(){$('#recordwindow').html($("#tableToClone").clone());},0);

						$('#recordwindow').show();
						$('.protectiveshield').hide();


						
					});
});
});		
});
});
});


$('#subway').click(function(){

	function clearjQueryCache(){
		for (var x in jQuery.cache){
			delete jQuery.cache[x];
		}
	}


	$('.protectiveshield').show(function(){
		$('.mainscreen').hide(0,function(){
			$('.topscreen').stop(true,true).animate({top:"-320px"},120);
			$('.mainpanel').clearQueue().animate({width:"100px", height:"100px", left:"250px"}, function(){

				$('.screencontainer').animate({height:"100px", width:"100px"}, 0, function(){
					
					$('.mainpanel').animate({width:"805px",height:"2680px", paddingTop:"98px"}, function(){	

						$('.screencontainer').delay(0).animate({height:"2680px",width:"805px"},0);

						$('#galleryone').attr('src','img/previews/16_1_1.jpg');
						$('#gallerytwo').attr('src','img/previews/16_1_2.jpg');
						$('#gallerythree').attr('src','img/previews/16_1_3.jpg');
						$('#galleryfour').attr('src','img/previews/16_1_4.jpg');
						$('#galleryfive').attr('src','img/previews/16_1_5.jpg');

						$('#galleryonelink').attr('href','img/original/16_1_1.jpg');
						$('#gallerytwolink').attr('href','img/original/16_1_2.jpg');
						$('#gallerythreelink').attr('href','img/original/16_1_3.jpg');
						$('#galleryfourlink').attr('href','img/original/16_1_4.jpg');
						$('#galleryfivelink').attr('href','img/original/16_1_5.jpg');

						$('.previewing').css('display','block');
						$('#gallerysix').hide();
						$('#galleryseven').hide();
						$('#galleryeight').hide();
						$('#gallerynine').hide();
						$('#galleryten').hide();
						$('#galleryeleven').hide();
						$('#gallerytwelve').hide();

						$('#gallerythirteen').hide();
						$('#galleryfourteen').hide();
						$('#galleryfifteen').hide();
						$('#gallerysixteen').hide();
						$('#galleryseventeen').hide();
						$('#galleryeighteen').hide();
						$('#gallerynineteen').hide();
						$('#gallerytwenty').hide();
						$('#gallerytwentyone').hide();

						$('#videoframe').hide();
						$('#captionone').html("NYC SUBWAY POSTER PROPOSAL");
						$('#captiontwo').html("NYC Subway Posters proposal designs with live mock-ups. Based on water-saving campaign by NYC's Department of Environmental Protection. Illustrations are vector based created in Adobe Illustrator ");
						$('#captionthree').html(										
							'<img class="smallicon" src="logos/illustrator.png" height="20px" width="20px" title="Adobde Illustrator">'+																	
							'<img class="smallicon" src="logos/photoshop.png" height="20px" width="20px" title="Adobe Photoshop">'
							);
						setTimeout(function(){$('#subwaywindow').html($("#tableToClone").clone());},0);

						$('#subwaywindow').show();
						$('.protectiveshield').hide();												
						
					});
});
});		
});
});
});

$('#octopus').click(function(){

	function clearjQueryCache(){
		for (var x in jQuery.cache){
			delete jQuery.cache[x];
		}
	}

	$('.protectiveshield').show(function(){
		$('.mainscreen').hide(0,function(){
			$('.topscreen').stop(true,true).animate({top:"-320px"},120);
			$('.mainpanel').clearQueue().animate({width:"100px", height:"100px", left:"250px"}, function(){

				$('.screencontainer').animate({height:"100px", width:"100px"}, 0, function(){
					
					$('.mainpanel').animate({width:"805px",height:"3503px", paddingTop:"98px"}, function(){	

						$('.screencontainer').delay(0).animate({height:"3503px",width:"805px"},0);

						$('#galleryone').attr('src','img/previews/17_1_1.jpg');
						$('#gallerytwo').attr('src','img/previews/17_1_2.jpg');
						$('#gallerythree').attr('src','img/previews/17_1_3.jpg');
						$('#galleryfour').attr('src','img/previews/17_1_4.jpg');
						$('#galleryfive').attr('src','img/previews/17_1_5.jpg');
						$('#gallerysix').attr('src','img/previews/17_1_6.jpg');
						$('#galleryseven').attr('src','img/previews/17_1_7.jpg');
						$('#galleryeight').attr('src','img/previews/17_1_8.jpg');

						$('#galleryonelink').attr('href','img/original/17_1_1.jpg');
						$('#gallerytwolink').attr('href','img/original/17_1_2.jpg');
						$('#gallerythreelink').attr('href','img/original/17_1_3.jpg');
						$('#galleryfourlink').attr('href','img/original/17_1_4.jpg');
						$('#galleryfivelink').attr('href','img/original/17_1_5.jpg');
						$('#gallerysixlink').attr('href','img/original/17_1_6.jpg');
						$('#gallerysevenlink').attr('href','img/original/17_1_7.jpg');
						$('#galleryeightlink').attr('href','img/original/17_1_8.jpg');

						$('.previewing').css('display','block');
						$('#gallerynine').hide();
						$('#galleryten').hide();
						$('#galleryeleven').hide();
						$('#gallerytwelve').hide();
						$('#gallerythirteen').hide();
						$('#galleryfourteen').hide();
						$('#galleryfifteen').hide();
						$('#gallerysixteen').hide();
						$('#galleryseventeen').hide();
						$('#galleryeighteen').hide();
						$('#gallerynineteen').hide();
						$('#gallerytwenty').hide();
						$('#gallerytwentyone').hide();
						$('#videoframe').attr('src','https://www.youtube.com/embed/wM--qNO1ii4');
						$('#videoframe').attr('height','315px');
						$('#videoframe').attr('showinfo','0');
						$('#captionone').html("OCTOPUS ANIMATION");
						$('#captiontwo').html("A Cinema4D short animation showing a fragile life of a tiny octopus. Octopus model was sculpted and textured in ZBrush and then brought into Cinema4D for animation. Post-production done in Adobe After Effects and Adobe Premiere.");
						$('#captionthree').html(										
							'<img class="smallicon" src="logos/zbrush.png" height="20px" width="20px" title="ZBrush">'+
							'<img class="smallicon" src="logos/cinema4d.png" height="20px" width="20px" title="Cinema4D">'+
							'<img class="smallicon" src="logos/aftereffects.png" height="20px" width="20px" title="Adobe AfterEffects">'+											
							'<img class="smallicon" src="logos/premiere.png" height="20px" width="20px" title="Adobe Premiere">'
							);
						setTimeout(function(){$('#octopuswindow').html($("#tableToClone").clone());},0);


						$('#octopuswindow').show();
						$('.protectiveshield').hide();


						
					});
});
});		
});
});
});





$('#umbrella').click(function(){

	function clearjQueryCache(){
		for (var x in jQuery.cache){
			delete jQuery.cache[x];
		}
	}
	$('.protectiveshield').show(function(){
		$('.mainscreen').hide(0,function(){
			$('.topscreen').stop(true,true).animate({top:"-320px"},120);
			$('.mainpanel').clearQueue().animate({width:"100px", height:"100px", left:"250px"}, function(){

				$('.screencontainer').animate({height:"100px", width:"100px"}, 0, function(){
					
					$('.mainpanel').animate({width:"805px",height:"3070px", paddingTop:"98px"}, function(){	

						$('.screencontainer').delay(0).animate({height:"3070px",width:"805px"},0);

						$('#galleryone').attr('src','img/previews/18_1_1.jpg');
						$('#gallerytwo').attr('src','img/previews/18_1_2.jpg');
						$('#gallerythree').attr('src','img/previews/18_1_4.jpg');
						$('#galleryfour').attr('src','img/previews/18_1_5.jpg');
						$('#galleryfive').attr('src','img/previews/18_1_6.jpg');
						$('#gallerysix').attr('src','img/previews/18_1_7.jpg');
						$('#galleryseven').attr('src','img/previews/18_1_8.jpg');

						$('#galleryonelink').attr('href','img/original/18_1_1.jpg');
						$('#gallerytwolink').attr('href','img/original/18_1_2.jpg');
						$('#gallerythreelink').attr('href','img/original/18_1_4.jpg');
						$('#galleryfourlink').attr('href','img/original/18_1_5.jpg');
						$('#galleryfivelink').attr('href','img/original/18_1_6.jpg');
						$('#gallerysixlink').attr('href','img/original/18_1_7.jpg');
						$('#gallerysevenlink').attr('href','img/original/18_1_8.jpg');

						$('.previewing').css('display','block');
						$('#galleryeight').hide();									
						$('#gallerynine').hide();
						$('#galleryten').hide();
						$('#galleryeleven').hide();
						$('#gallerytwelve').hide();
						$('#gallerythirteen').hide();
						$('#galleryfourteen').hide();
						$('#galleryfifteen').hide();
						$('#gallerysixteen').hide();
						$('#galleryseventeen').hide();
						$('#galleryeighteen').hide();
						$('#gallerynineteen').hide();
						$('#gallerytwenty').hide();
						$('#gallerytwentyone').hide();
						$('#videoframe').attr('src','https://www.youtube.com/embed/k7BCWxulqWs');
						$('#videoframe').attr('height','315px');
						$('#videoframe').attr('showinfo','0');
						$('#captionone').html("UMBRELLA PROJECT ANIMATION");
						$('#captiontwo').html("A short 3D/Vector video composition about umbrellas and their role in our life. A project is a combination of various techinques aimed at a final video result. Umbrella was modelled in 3Ds Max and brought to Cinema4D and Marmoset Toolbag for animation. Vector based elements were done in Adobe Illustrator and video footage was produced by a regular mobile phone camera.");
						$('#captionthree').html(										
							'<img class="smallicon" src="logos/marmoset.png" height="20px" width="20px" title="Marmoset Toolbag">'+
							'<img class="smallicon" src="logos/cinema4d.png" height="20px" width="20px" title="Cinema4D">'+
							'<img class="smallicon" src="logos/3dmax.png" height="20px" width="20px" title="3D Studio Max">'+
							'<img class="smallicon" src="logos/aftereffects.png" height="20px" width="20px" title="Adobe AfterEffects">'+	
							'<img class="smallicon" src="logos/illustrator.png" height="20px" width="20px" title="Adobe Illustrator">'+										
							'<img class="smallicon" src="logos/premiere.png" height="20px" width="20px" title="Adobe Premiere">'
							);
						setTimeout(function(){$('#umbrellawindow').html($("#tableToClone").clone());},0);


						$('#umbrellawindow').show();
						$('.protectiveshield').hide();


						
					});
});
});		
});
});
});


$('#indoeuropica').click(function(){

	function clearjQueryCache(){
		for (var x in jQuery.cache){
			delete jQuery.cache[x];
		}
	}
	$('.protectiveshield').show(function(){
		$('.mainscreen').hide(0,function(){
			$('.topscreen').stop(true,true).animate({top:"-320px"},120);
			$('.mainpanel').clearQueue().animate({width:"100px", height:"100px", left:"250px"}, function(){

				$('.screencontainer').animate({height:"100px", width:"100px"}, 0, function(){
					
					$('.mainpanel').animate({width:"805px",height:"857px", paddingTop:"98px"}, function(){	

						$('.screencontainer').delay(0).animate({height:"857px",width:"805px"},0);

						$('#galleryone').attr('src','img/previews/19_1_1.jpg');
						$('#gallerytwo').attr('src','img/previews/19_1_2.jpg');	
						$('#gallerythree').attr('src','img/check.svg').css('width','300px').css('margin-left','300px');

						$('#galleryonelink').attr('href','img/original/19_1_1.jpg');
						$('#gallerytwolink').attr('href','img/original/19_1_2.jpg');	
						$('#gallerythreelink').attr('href','old/info_mn/');


						$('.previewing').css('display','block');

						$('#galleryfour').hide();	
						$('#galleryfive').hide();	
						$('#gallerysix').hide();	
						$('#galleryseven').hide();									
						$('#galleryeight').hide();									
						$('#gallerynine').hide();
						$('#galleryten').hide();
						$('#galleryeleven').hide();
						$('#gallerytwelve').hide();
						$('#gallerythirteen').hide();
						$('#galleryfourteen').hide();
						$('#galleryfifteen').hide();
						$('#gallerysixteen').hide();
						$('#galleryseventeen').hide();
						$('#galleryeighteen').hide();
						$('#gallerynineteen').hide();
						$('#gallerytwenty').hide();
						$('#gallerytwentyone').hide();
						$('#videoframe').hide();

						$('#captionone').html("INDO-EUROPICA INFORMATION PORTAL");
						$('#captiontwo').html("A mock-up of informational website. Based of 960 grid system, website uses side Jquery plaugins for gallery. Text and image filler taken from Wikipedia");
						$('#captionthree').html(										
							'<img class="smallicon" src="logos/html.png" height="20px" width="20px" title="HTML5">'+
							'<img class="smallicon" src="logos/css.png" height="20px" width="20px" title="CSS 3.0">'+
							'<img class="smallicon" src="logos/jquery.png" height="20px" width="20px" title="Jquery">'+	
							'<img class="smallicon" src="logos/photoshop.png" height="20px" width="20px" title="Adobe Photoshop">'										
							
							);
						setTimeout(function(){$('#indoeuropicawindow').html($("#tableToClone").clone());},0);


						$('#indoeuropicawindow').show();
						$('.protectiveshield').hide();


						
					});
});
});		
});
});
});


$('#warming').click(function(){

	function clearjQueryCache(){
		for (var x in jQuery.cache){
			delete jQuery.cache[x];
		}
	}
	$('.protectiveshield').show(function(){
		$('.mainscreen').hide(0,function(){
			$('.topscreen').stop(true,true).animate({top:"-320px"},120);
			$('.mainpanel').clearQueue().animate({width:"100px", height:"100px", left:"250px"}, function(){

				$('.screencontainer').animate({height:"100px", width:"100px"}, 0, function(){
					
					$('.mainpanel').animate({width:"805px",height:"1368px", paddingTop:"98px"}, function(){	

						$('.screencontainer').delay(0).animate({height:"1368px",width:"805px"},0);

						$('#galleryone').attr('src','img/previews/20_1_1.jpg').css('margin-left','0px').css('width','600px');
						$('#gallerytwo').attr('src','img/previews/20_1_2.jpg').css('margin-left','0px').css('width','600px');									
						$('#gallerythree').attr('src','img/previews/20_1_3.jpg').css('margin-left','0px').css('width','600px');
						$('#galleryfour').attr('src','img/check.svg').css('margin-left','300px').css('width','300px');

						$('#galleryonelink').attr('href','img/original/20_1_1.jpg');
						$('#gallerytwolink').attr('href','img/original/20_1_2.jpg');									
						$('#gallerythreelink').attr('href','img/original/20_1_3.jpg');
						$('#galleryfourlink').attr('href','old/final_mn/');


						$('.previewing').css('display','block');
						$('#galleryfive').hide();	
						$('#gallerysix').hide();	
						$('#galleryseven').hide();									
						$('#galleryeight').hide();									
						$('#gallerynine').hide();
						$('#galleryten').hide();
						$('#galleryeleven').hide();
						$('#gallerytwelve').hide();
						$('#gallerythirteen').hide();
						$('#galleryfourteen').hide();
						$('#galleryfifteen').hide();
						$('#gallerysixteen').hide();
						$('#galleryseventeen').hide();
						$('#galleryeighteen').hide();
						$('#gallerynineteen').hide();
						$('#gallerytwenty').hide();
						$('#gallerytwentyone').hide();
						$('#videoframe').hide();

						$('#captionone').html("GLOBAL WARMING AWARNESS PROJECT");
						$('#captiontwo').html("An animated website about the issue of global warming oriented on general public/teenageers to raise awareness of the problem. Vector elements made in Adobe Illustrator, animated elements are made in Adobe After Effects. Basic layout done with HMTL/CSS and Jquery plugin.");
						$('#captionthree').html(										
							
							'<img class="smallicon" src="logos/html.png" height="20px" width="20px" title="HTML5">'+
							'<img class="smallicon" src="logos/css.png" height="20px" width="20px" title="CSS 3.0">'+
							'<img class="smallicon" src="logos/jquery.png" height="20px" width="20px" title="Jquery">'+	
							'<img class="smallicon" src="logos/aftereffects.png" height="20px" width="20px" title="Adobe AfterEffects">'+	
							'<img class="smallicon" src="logos/illustrator.png" height="20px" width="20px" title="Adobe Illustrator">'										
							
							);
						setTimeout(function(){$('#warmingwindow').html($("#tableToClone").clone());},0);


						$('#warmingwindow').show();
						$('.protectiveshield').hide();


						
					});
});
});		
});
});
});



$('#pastpresent').click(function(){

	function clearjQueryCache(){
		for (var x in jQuery.cache){
			delete jQuery.cache[x];
		}
	}
	$('.protectiveshield').show(function(){
		$('.mainscreen').hide(0,function(){
			$('.topscreen').stop(true,true).animate({top:"-320px"},120);
			$('.mainpanel').clearQueue().animate({width:"100px", height:"100px", left:"250px"}, function(){

				$('.screencontainer').animate({height:"100px", width:"100px"}, 0, function(){
					
					$('.mainpanel').animate({width:"805px",height:"1835px", paddingTop:"98px"}, function(){	

						$('.screencontainer').delay(0).animate({height:"1835px",width:"805px"},0);

						$('#galleryone').attr('src','img/previews/21_1_1.jpg');
						$('#gallerytwo').attr('src','img/previews/21_1_2.jpg').css('margin-left','0px').css('width','600px');									
						$('#gallerythree').attr('src','img/previews/21_1_3.jpg').css('margin-left','0px').css('width','600px');									
						$('#galleryfour').attr('src','img/previews/21_1_4.jpg').css('margin-left','0px').css('width','600px');
						$('#galleryfive').attr('src','img/check.svg').css('margin-left','300px').css('width','300px');

						$('#galleryonelink').attr('href','img/original/21_1_1.jpg');
						$('#gallerytwolink').attr('href','img/original/21_1_2.jpg');									
						$('#gallerythreelink').attr('href','img/original/21_1_3.jpg');									
						$('#galleryfourlink').attr('href','img/original/21_1_4.jpg');
						$('#galleryfivelink').attr('href','old/perspective_mn/');


						$('.previewing').css('display','block');
						$('#gallerysix').hide();	
						$('#galleryseven').hide();									
						$('#galleryeight').hide();									
						$('#gallerynine').hide();
						$('#galleryten').hide();
						$('#galleryeleven').hide();
						$('#gallerytwelve').hide();
						$('#gallerythirteen').hide();
						$('#galleryfourteen').hide();
						$('#galleryfifteen').hide();
						$('#gallerysixteen').hide();
						$('#galleryseventeen').hide();
						$('#galleryeighteen').hide();
						$('#gallerynineteen').hide();
						$('#gallerytwenty').hide();
						$('#gallerytwentyone').hide();
						$('#videoframe').hide();

						$('#captionone').html("PAST/PRESENT PERSPECTIVE");
						$('#captiontwo').html('A small web project to represent imaginary "past" in comparison to the "present". HTML code is the same for both pages, so all the difference is brought in by CSS style only. A poetry used is "I Sit Beside the Fire and Think" by J.R.R. Tolkien. Vector based page made in Illustrator, 3D rendered illustration made in E-On Vue');
						$('#captionthree').html(										
							'<img class="smallicon" src="logos/html.png" height="20px" width="20px" title="HTML5">'+
							'<img class="smallicon" src="logos/css.png" height="20px" width="20px" title="CSS 3.0">'+
							'<img class="smallicon" src="logos/jquery.png" height="20px" width="20px" title="Jquery">'+	
							'<img class="smallicon" src="logos/illustrator.png" height="20px" width="20px" title="Adobe Illustrator">'+
							'<img class="smallicon" src="logos/vue.png" height="20px" width="20px" title="E-On Vue">'		
							);
						setTimeout(function(){$('#pastpresentwindow').html($("#tableToClone").clone());},0);


						$('#pastpresentwindow').show();
						$('.protectiveshield').hide();


						
					});
});
});		
});
});
});


$('#iss').click(function(){

	function clearjQueryCache(){
		for (var x in jQuery.cache){
			delete jQuery.cache[x];
		}
	}
	$('.protectiveshield').show(function(){
		$('.mainscreen').hide(0,function(){
			$('.topscreen').stop(true,true).animate({top:"-320px"},120);
			$('.mainpanel').clearQueue().animate({width:"100px", height:"100px", left:"250px"}, function(){

				$('.screencontainer').animate({height:"100px", width:"100px"}, 0, function(){
					
					$('.mainpanel').animate({width:"805px",height:"2379px", paddingTop:"98px"}, function(){	

						$('.screencontainer').delay(0).animate({height:"2379px",width:"805px"},0);

						$('#galleryone').attr('src','img/previews/22_1_1.jpg');
						$('#gallerytwo').attr('src','img/previews/22_1_2.jpg');									
						$('#gallerythree').attr('src','img/previews/22_1_3.jpg').css('margin-left','0px').css('width','600px');										
						$('#galleryfour').attr('src','img/previews/22_1_4.jpg').css('margin-left','0px').css('width','600px');										
						$('#galleryfive').attr('src','img/previews/22_1_5.jpg').css('margin-left','0px').css('width','600px');
						$('#gallerysix').attr('src','img/check.svg').css('margin-left','300px').css('width','300px');

						$('#galleryonelink').attr('href','img/original/22_1_1.jpg');
						$('#gallerytwolink').attr('href','img/original/22_1_2.jpg');									
						$('#gallerythreelink').attr('href','img/original/22_1_3.jpg');									
						$('#galleryfourlink').attr('href','img/original/22_1_4.jpg');									
						$('#galleryfivelink').attr('href','img/original/22_1_5.jpg');
						$('#gallerysixlink').attr('href','old/place_mn/');

						$('.previewing').css('display','block');											
						$('#galleryseven').hide();									
						$('#galleryeight').hide();									
						$('#gallerynine').hide();
						$('#galleryten').hide();
						$('#galleryeleven').hide();
						$('#gallerytwelve').hide();
						$('#gallerythirteen').hide();
						$('#galleryfourteen').hide();
						$('#galleryfifteen').hide();
						$('#gallerysixteen').hide();
						$('#galleryseventeen').hide();
						$('#galleryeighteen').hide();
						$('#gallerynineteen').hide();
						$('#gallerytwenty').hide();
						$('#gallerytwentyone').hide();
						$('#videoframe').hide();

						$('#captionone').html("INTERNATIONAL SPACE STATION EXPLORER");
						$('#captiontwo').html("A project based on HTML/CSS oriented at general public, allowing to explore the International Space Station in a virtual tour. Photographs from NASA/Wikipedia sources are used for the website");
						$('#captionthree').html(										
							'<img class="smallicon" src="logos/html.png" height="20px" width="20px" title="HTML5">'+
							'<img class="smallicon" src="logos/css.png" height="20px" width="20px" title="CSS 3.0">'+
							'<img class="smallicon" src="logos/illustrator.png" height="20px" width="20px" title="Adobe Illustrator">'									
							
							);
						setTimeout(function(){$('#isswindow').html($("#tableToClone").clone());},0);


						$('#isswindow').show();
						$('.protectiveshield').hide();


						
					});
});
});		
});
});
});


$('#madlib').click(function(){

	function clearjQueryCache(){
		for (var x in jQuery.cache){
			delete jQuery.cache[x];
		}
	}
	$('.protectiveshield').show(function(){
		$('.mainscreen').hide(0,function(){
			$('.topscreen').stop(true,true).animate({top:"-320px"},120);
			$('.mainpanel').clearQueue().animate({width:"100px", height:"100px", left:"250px"}, function(){

				$('.screencontainer').animate({height:"100px", width:"100px"}, 0, function(){
					
					$('.mainpanel').animate({width:"805px",height:"1246px", paddingTop:"98px"}, function(){	

						$('.screencontainer').delay(0).animate({height:"1246px",width:"805px"},0);

						$('#galleryone').attr('src','img/previews/23_1_1.jpg');
						$('#gallerytwo').attr('src','img/previews/23_1_2.jpg');									
						$('#gallerythree').attr('src','img/previews/23_1_3.jpg').css('margin-left','0px').css('width','600px');									
						$('#galleryfour').attr('src','img/previews/23_1_4.jpg').css('margin-left','0px').css('width','600px');
						$('#galleryfive').attr('src','img/check.svg').css('margin-left','300px').css('width','300px');

						$('#galleryonelink').attr('href','img/original/23_1_1.jpg');
						$('#gallerytwolink').attr('href','img/original/23_1_2.jpg');									
						$('#gallerythreelink').attr('href','img/original/23_1_3.jpg');									
						$('#galleryfourlink').attr('href','img/original/23_1_4.jpg');
						$('#galleryfivelink').attr('href','madlib/');


						$('.previewing').css('display','block');																	
						$('#gallerysix').hide();	
						$('#galleryseven').hide();									
						$('#galleryeight').hide();									
						$('#gallerynine').hide();
						$('#galleryten').hide();
						$('#galleryeleven').hide();
						$('#gallerytwelve').hide();
						$('#gallerythirteen').hide();
						$('#galleryfourteen').hide();
						$('#galleryfifteen').hide();
						$('#gallerysixteen').hide();
						$('#galleryseventeen').hide();
						$('#galleryeighteen').hide();
						$('#gallerynineteen').hide();
						$('#gallerytwenty').hide();
						$('#gallerytwentyone').hide();
						$('#videoframe').hide();

						$('#captionone').html("MADLIB IN NATURE");
						$('#captiontwo').html("Madlib play-webpage based on JavaScript with a unique topic oriented layout that corresponds to texts of madlibs. All vector based illustrations are made in Adobe Illustrator");
						$('#captionthree').html(										
							'<img class="smallicon" src="logos/html.png" height="20px" width="20px" title="HTML5">'+
							'<img class="smallicon" src="logos/css.png" height="20px" width="20px" title="CSS 3.0">'+
							'<img class="smallicon" src="logos/javascript.png" height="20px" width="20px" title="Java Script">'+
							'<img class="smallicon" src="logos/illustrator.png" height="20px" width="20px" title="Adobe Illustrator">'
							);
						setTimeout(function(){$('#madlibwindow').html($("#tableToClone").clone());},0);


						$('#madlibwindow').show();
						$('.protectiveshield').hide();


						
					});
});
});		
});
});
});

$('#testingsite').click(function(){

	function clearjQueryCache(){
		for (var x in jQuery.cache){
			delete jQuery.cache[x];
		}
	}
	$('.protectiveshield').show(function(){
		$('.mainscreen').hide(0,function(){
			$('.topscreen').stop(true,true).animate({top:"-320px"},120);
			$('.mainpanel').clearQueue().animate({width:"100px", height:"100px", left:"250px"}, function(){

				$('.screencontainer').animate({height:"100px", width:"100px"}, 0, function(){
					
					$('.mainpanel').animate({width:"805px",height:"938px", paddingTop:"98px"}, function(){	

						$('.screencontainer').delay(0).animate({height:"938px",width:"805px"},0);

						$('#galleryone').attr('src','img/previews/24_1_1.jpg').css('margin-left','0px').css('width','600px');
						$('#gallerytwo').attr('src','img/previews/24_1_2.jpg').css('margin-left','0px').css('width','600px');								
						$('#gallerythree').attr('src','img/check.svg').css('margin-left','300px').css('width','300px');

						$('#galleryonelink').attr('href','img/original/24_1_1.jpg');
						$('#gallerytwolink').attr('href','img/original/24_1_2.jpg');								
						$('#gallerythreelink').attr('href','testing/');


						$('.previewing').css('display','block');									
						$('#galleryfour').hide();																		
						$('#galleryfive').hide();										
						$('#gallerysix').hide();	
						$('#galleryseven').hide();									
						$('#galleryeight').hide();									
						$('#gallerynine').hide();
						$('#galleryten').hide();
						$('#galleryeleven').hide();
						$('#gallerytwelve').hide();
						$('#gallerythirteen').hide();
						$('#galleryfourteen').hide();
						$('#galleryfifteen').hide();
						$('#gallerysixteen').hide();
						$('#galleryseventeen').hide();
						$('#galleryeighteen').hide();
						$('#gallerynineteen').hide();
						$('#gallerytwenty').hide();
						$('#gallerytwentyone').hide();
						$('#videoframe').hide();

						$('#captionone').html("JAVASCRIPT TESTING SITE");
						$('#captiontwo').html("Jquery based magic box website which intorduces different scenes of a nuclear testing site that appear randomly after pressing a button.");
						$('#captionthree').html(										
							'<img class="smallicon" src="logos/html.png" height="20px" width="20px" title="HTML5">'+
							'<img class="smallicon" src="logos/css.png" height="20px" width="20px" title="CSS 3.0">'+
							'<img class="smallicon" src="logos/javascript.png" height="20px" width="20px" title="Java Script">'+
							'<img class="smallicon" src="logos/jquery.png" height="20px" width="20px" title="JQuery">'+
							'<img class="smallicon" src="logos/illustrator.png" height="20px" width="20px" title="Adobe Illustrator">'
							);
						setTimeout(function(){$('#testingsitewindow').html($("#tableToClone").clone());},0);


						$('#testingsitewindow').show();
						$('.protectiveshield').hide();


						
					});
});
});		
});
});
});




});