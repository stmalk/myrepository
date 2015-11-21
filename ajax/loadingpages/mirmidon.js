    $(document).ready(function(){
    	$('#centralbutton > a').click(function(e){
    		e.preventDefault(); 
    		var page = e.target.id + ".html";	

    		$( "div" ).promise().done(function(){


    	
$('.insides').hide('slide', {direction: 'left'}, 600, function(){
    		$(this).load(page, function(){    			
    				$(this).clearQueue().show('slide', {direction: 'right'}, 600);
    			});

    		});
	});


    	});
    });
