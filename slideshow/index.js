var slideshow = {

	directory: "images/",

	photos:[
			{ "photor": "aurelius.jpg", "captionr" : "Mark Aurelius"}, 
			{ "photor": "cesar.png", "captionr" : "Gaius Julius Ceasar"},
			{ "photor": "couple.jpg", "captionr" : "Greek Couple"},
			{ "photor": "flavian.jpg", "captionr" : "Flavian Woman"},
			{ "photor": "lucius.jpg", "captionr" : "Lucius Verus"},
			{ "photor": "lupe.jpg", "captionr" : "Emperor Caracalla"},
			{ "photor": "sabina.jpg", "captionr" : "Sabina"}
			],

	currentPhoto: 0,

    getPrevious: function(){

            if (this.currentPhoto == 0) 
                this.currentPhoto = this.photos.length-1;
            else
                this.currentPhoto--;

            var photo   = this.directory + this.photos[this.currentPhoto].photor;
            var caption = this.photos[this.currentPhoto].captionr;
            return { "photo": photo, "caption": caption };
        },

    getNext: function(){
    	
            if (this.currentPhoto == this.photos.length-1) 
                this.currentPhoto = 0;
            else
                this.currentPhoto++;

            var photo   = this.directory + this.photos[this.currentPhoto].photor;
            var caption = this.photos[this.currentPhoto].captionr;
            return { "photo": photo, "caption": caption };
        }


        
    };



function next(){
        var image = slideshow.getNext();    
        document.getElementById("currentPhoto").src = image.photo;
        document.getElementById("currentCaption").innerHTML = image.caption;
    }

function previous(){
        var image = slideshow.getPrevious();
        document.getElementById("currentPhoto").src = image.photo;
        document.getElementById("currentCaption").innerHTML = image.caption;
    }

