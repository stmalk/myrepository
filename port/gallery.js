
$(window).load(function() {

var globalswitchNumber;
var database;


    $.getJSON('database.json', function(data) {

        console.log(data);
       database = data.projects;

 


        $('#irbis').on('click', function() {
            globalswitchNumber = 0;
            galleryshowUp();
        });


        $('#opportunists').on('click', function() {
            globalswitchNumber = 1;
            galleryshowUp();
        });

        $('#promise').on('click', function() {
            globalswitchNumber = 2;
            galleryshowUp();
        });

        $('#cyborg').on('click', function() {
            globalswitchNumber = 3;
            galleryshowUp();
        });

        $('#robo').on('click', function() {
            globalswitchNumber = 4;
            galleryshowUp();
        });

        $('#roller').on('click', function() {
            globalswitchNumber = 5;
            galleryshowUp();
        });

        $('#pantheon').on('click', function() {
            globalswitchNumber = 6;
            galleryshowUp();
        });

        $('#hoplite').on('click', function() {
            globalswitchNumber = 7;
            galleryshowUp();
        });

        $('#cards').on('click', function() {
            globalswitchNumber = 8;
            galleryshowUp();
        });

        $('#apple').on('click', function() {
            globalswitchNumber = 9;
            galleryshowUp();
        });

        $('#mashup').on('click', function() {
            globalswitchNumber = 10;
            galleryshowUp();
        });

        $('#virgil').on('click', function() {
            globalswitchNumber = 11;
            galleryshowUp();
        });

        $('#record').on('click', function() {
            globalswitchNumber = 12;
            galleryshowUp();
        });

        $('#subway').on('click', function() {
            globalswitchNumber = 13;
            galleryshowUp();
        });

        $('#octopus').on('click', function() {
            globalswitchNumber = 14;
            galleryshowUp();
        });

        $('#umbrella').on('click', function() {
            globalswitchNumber = 15;
            galleryshowUp();
        });

        $('#indoeuropica').on('click', function() {
            globalswitchNumber = 16;
            galleryshowUp();
        });

        $('#warming').on('click', function() {
            globalswitchNumber = 17;
            galleryshowUp();
        });

        $('#pastpresent').on('click', function() {
            globalswitchNumber = 18;
            galleryshowUp();
        });

        $('#iss').on('click', function() {
            globalswitchNumber = 19;
            galleryshowUp();
        });

        $('#madlib').on('click', function() {
            globalswitchNumber = 20;
            galleryshowUp();
        });

        $('#testingsite').on('click', function() {
            globalswitchNumber = 21;
            galleryshowUp();
        });



       function galleryshowUp() {





            $('.protectiveshield').show(function() {


                $('.mainscreen').hide(0, function() {




                    $('.mainpanel').clearQueue().animate({width: "100px",height: "100px", left: "300px"}, 400, function() {
                        $('.screencontainer').animate({height: "100px",width: "100px"}, 0, function() {
                            $('.topscreen').animate({top: "-200px"});
                            $('.mainpanel').animate({width: "805px",height: database[globalswitchNumber].frameheight, paddingTop: "218px"}, 400, function() {
                                

                                $('#galleryone').attr('src', database[globalswitchNumber].galleryone);  
                                if (database[globalswitchNumber].galleryonedisplay == 'showit'){$("#galleryone").show();}else {$("#galleryone").hide();}
                                $('#galleryonelink').attr('href', database[globalswitchNumber].galleryonelink);                    
                               
                                $('#gallerytwo').attr('src', database[globalswitchNumber].gallerytwo);                              
                                if (database[globalswitchNumber].gallerytwodisplay == 'showit'){$("#gallerytwo").show();}else {$("#gallerytwo").hide();}
                                $('#gallerytwolink').attr('href', database[globalswitchNumber].gallerytwolink);
                               
                                $('#gallerythree').attr('src', database[globalswitchNumber].gallerythree);                               
                                if (database[globalswitchNumber].gallerythreedisplay == 'showit'){$("#gallerythree").show();}else {$("#gallerythree").hide();}
                                $('#gallerythreelink').attr('href', database[globalswitchNumber].gallerythreelink); 

                                $('#galleryfour').attr('src', database[globalswitchNumber].galleryfour);                                
                                if (database[globalswitchNumber].galleryfourdisplay == 'showit'){$("#galleryfour").show();}else {$("#galleryfour").hide();}
                                $('#galleryfourlink').attr('href', database[globalswitchNumber].galleryfourlink); 

                                $('#galleryfive').attr('src', database[globalswitchNumber].galleryfive);                                 
                                if (database[globalswitchNumber].galleryfivedisplay == 'showit'){$("#galleryfive").show();}else {$("#galleryfive").hide();}
                                $('#galleryfivelink').attr('href', database[globalswitchNumber].galleryfivelink); 

                                $('#gallerysix').attr('src', database[globalswitchNumber].gallerysix);                                
                                if (database[globalswitchNumber].gallerysixdisplay == 'showit'){$("#gallerysix").show();}else {$("#gallerysix").hide();}
                                $('#gallerysixlink').attr('href', database[globalswitchNumber].gallerysixlink); 

                                $('#galleryseven').attr('src', database[globalswitchNumber].galleryseven);                            
                                if (database[globalswitchNumber].gallerysevendisplay == 'showit'){$("#galleryseven").show();}else {$("#galleryseven").hide();}
                                $('#gallerysevenlink').attr('href', database[globalswitchNumber].gallerysevenlink); 

                                $('#galleryeight').attr('src', database[globalswitchNumber].galleryeight);                                 
                                if (database[globalswitchNumber].galleryeightdisplay == 'showit'){$("#galleryeight").show();}else {$("#galleryeight").hide();}
                                $('#galleryeightlink').attr('href', database[globalswitchNumber].galleryeightlink); 

                                $('#gallerynine').attr('src', database[globalswitchNumber].gallerynine);                                
                                if (database[globalswitchNumber].galleryninedisplay == 'showit'){$("#gallerynine").show();}else {$("#gallerynine").hide();}
                                $('#galleryninelink').attr('href', database[globalswitchNumber].galleryninelink); 

                                $('#galleryten').attr('src', database[globalswitchNumber].galleryten);                                 
                                if (database[globalswitchNumber].gallerytendisplay == 'showit'){$("#galleryten").show();}else {$("#galleryten").hide();}
                                $('#gallerytenlink').attr('href', database[globalswitchNumber].gallerytenlink); 

                                $('#galleryeleven').attr('src', database[globalswitchNumber].galleryeleven);                                
                                if (database[globalswitchNumber].galleryelevendisplay == 'showit'){$("#galleryeleven").show();}else {$("#galleryeleven").hide();}
                                $('#galleryelevenlink').attr('href', database[globalswitchNumber].galleryelevenlink); 

                                $('#gallerytwelve').attr('src', database[globalswitchNumber].gallerytwelve);                                 
                                if (database[globalswitchNumber].gallerytwelvedisplay == 'showit'){$("#gallerytwelve").show();}else {$("#gallerytwelve").hide();}
                                $('#gallerytwelvelink').attr('href', database[globalswitchNumber].gallerytwelvelink); 

                                $('#gallerythirteen').attr('src', database[globalswitchNumber].gallerythirteen);                                 
                                if (database[globalswitchNumber].gallerythirteendisplay == 'showit'){$("#gallerythirteen").show();}else {$("#gallerythirteen").hide();}
                                $('#gallerythirteenlink').attr('href', database[globalswitchNumber].gallerythirteenlink); 

                                $('#galleryfourteen').attr('src', database[globalswitchNumber].galleryfourteen);                                 
                                if (database[globalswitchNumber].galleryfourteendisplay == 'showit'){$("#galleryfourteen").show();}else {$("#galleryfourteen").hide();}
                                $('#galleryfourteenlink').attr('href', database[globalswitchNumber].galleryfourteenlink); 

                                $('#galleryfifteen').attr('src', database[globalswitchNumber].galleryfifteen);                                
                                if (database[globalswitchNumber].galleryfifteendisplay == 'showit'){$("#galleryfifteen").show();}else {$("#galleryfifteen").hide();}
                                $('#galleryfifteenlink').attr('href', database[globalswitchNumber].galleryfifteenlink); 

                                $('#gallerysixteen').attr('src', database[globalswitchNumber].gallerysixteen);                                 
                                if (database[globalswitchNumber].gallerysixteendisplay == 'showit'){$("#gallerysixteen").show();}else {$("#gallerysixteen").hide();}
                                $('#gallerysixteenlink').attr('href', database[globalswitchNumber].gallerysixteenlink); 

                                $('#galleryseventeen').attr('src', database[globalswitchNumber].galleryseventeen);                                 
                                if (database[globalswitchNumber].galleryseventeendisplay == 'showit'){$("#galleryseventeen").show();}else {$("#galleryseventeen").hide();}
                                $('#galleryseventeenlink').attr('href', database[globalswitchNumber].galleryseventeenlink); 

                                $('#galleryeighteen').attr('src', database[globalswitchNumber].galleryeighteen);                                 
                                if (database[globalswitchNumber].galleryeighteendisplay == 'showit'){$("#galleryeighteen").show();}else {$("#galleryeighteen").hide();}
                                $('#galleryeighteenlink').attr('href', database[globalswitchNumber].galleryeighteenlink); 

                                $('#gallerynineteen').attr('src', database[globalswitchNumber].gallerynineteen);                                 
                                if (database[globalswitchNumber].gallerynineteendisplay == 'showit'){$("#gallerynineteen").show();}else {$("#gallerynineteen").hide();}
                                $('#gallerynineteenlink').attr('href', database[globalswitchNumber].gallerynineteenlink); 

                                $('#gallerytwenty').attr('src', database[globalswitchNumber].gallerytwenty);                                 
                                if (database[globalswitchNumber].gallerytwentydisplay == 'showit'){$("#gallerytwenty").show();}else {$("#gallerytwenty").hide();}
                                $('#gallerytwentylink').attr('href', database[globalswitchNumber].gallerytwentylink); 

                                $('#gallerytwentyone').attr('src', database[globalswitchNumber].gallerytwentyone);                                 
                                if (database[globalswitchNumber].gallerytwentyonedisplay == 'showit'){$("#gallerytwentyone").show();}else {$("#gallerytwentyone").hide();}
                                $('#gallerytwentyonelink').attr('href', database[globalswitchNumber].gallerytwentyonelink); 


                                if (database[globalswitchNumber].videoframedisplay == 'showit'){$("#videoframe").show();}else {$("#videoframe").hide();}
                                $('#videoframe').attr('src', database[globalswitchNumber].videoframe);
                                $('#videoframe').attr('height', database[globalswitchNumber].videoframeheight);

                                $('#captionone').html(database[globalswitchNumber].captionone);
                                $('#captiontwo').html(database[globalswitchNumber].captiontwo);
                                $('#captionthree').html(database[globalswitchNumber].captionthree);


setTimeout(function() {
                                    $('#irbiswindow').html($("#tableToClone").clone());
                                }, 0);
                                $('.screencontainer').delay(0).animate({height: database[globalswitchNumber].frameheight, width: "805px"}, 0, function(){

                                $('#irbiswindow').show();
                                $('.protectiveshield').hide();

                                });


                                




                            });
                        });
                    });
                });
            });

        }



    });

});