// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery.touchSwipe.min
//= require jquery.serialize-object.min
//= require jquery.nicescroll.min.js
//= require jquery.tablesorter.js

$(function() {
////////GLOBAL DECLARATIONS ///////////
	var imgpaths =[];
	var imgtitles= [];
    var curphoto = 1;


////////Buttons////////////////////////////////


    $('#menu-icon').click(function() {
	    $('#menu').toggle();
	});

    /*$("#screen-home").click(function() {
        $(this).hide();
		updateLinks('Home');
    });*/
    $("#top-logo, #back-video").click(function() {
        $('#menu').hide();
        //$("#screen-home").show();
				hideOverlay();
        positionAdjust();
				updateLinks('','false');
    });
		

	$('#menu ul li').click(function() {
        itemclicked = $(this).index() + 1;
        console.log('The menu item clicked is ' + itemclicked);
 			  /*if (itemclicked != 2){
					$('#load-film').hide();
					//$('#back-video').hide();
				}*/
        if (itemclicked == 1){
        	hideOverlay();
            positionAdjust();
        }

        /*if (itemclicked == 2){
            //window.location = document.getElementById('film-link').href;
						$('#load-film').show();
						//$('#back-video').show();
        }*/

        if (itemclicked == 2){
        	showScreen('#screen-gallery, #gallery-content');
        	initGallery();
          curphoto = 1;
          positionAdjust();
        }

        if (itemclicked == 4){
        	showScreen('#screen-design');
            $('.screen ul li').each(function() {
                $(this).find('.short').show();
                $(this).find('.long').hide();
                $(this).find('.more-less').text("Read More");
            });
        }

        if (itemclicked == 5){
        	showScreen('#screen-developer');
            $('.screen ul li').each(function() {
                $(this).find('.short').show();
                $(this).find('.long').hide();
                $(this).find('.more-less').text("Read More");
            });
        }

        if (itemclicked == 7){
        	showScreen('#screen-neighborhood, #neighborhood-gallery');
					initnGallery();
          curnphoto = 1;
          positionAdjust();
        }

        if (itemclicked == 8){
        	showScreen('#screen-press');
        }

        if (itemclicked == 3){
        	showScreen('#screen-availability');
        }

        if (itemclicked == 6){
        	showScreen('#screen-amenities');
        	
        }
			
				if (itemclicked == 9){
        	showScreen('#screen-contact');
        	
        }
		if (itemclicked != 1){
			updateLinks($(this).text());
		}
		if (itemclicked == 1) {
			updateLinks('','false');
		}
        $('#menu').toggle();
    });


		/*$('#film-link').click(function(){
			$('#load-film').show();
			//$('#back-video').show();
			return false;
		});*/


    //Toggle Readmore

    $('.screen ul li').click(function() {
    	var articleclicked = $(this).index() + 1;
    	console.log(articleclicked);

    	if ($('.screen ul li:nth-child('+articleclicked+')>.short').css('display') == 'block'){
    		$('.screen ul li:nth-child('+articleclicked+')>.short').hide();
        	$('.screen ul li:nth-child('+articleclicked+')>.long').show();

            $('.screen ul li:nth-child('+articleclicked+') .more-less').text("Read Less");
    	} else {
    		$('.screen ul li:nth-child('+articleclicked+')>.short').show();
        	$('.screen ul li:nth-child('+articleclicked+')>.long').hide();

            $('.screen ul li:nth-child('+articleclicked+') .more-less').text("Read More");
    	}

    	//changes gallery
    	updateGallery(articleclicked);

    	//changes ngallery
    	updatenGallery(articleclicked);
		        
    });

    $('.back-to-contact').click(function() {
     	showScreen('#screen-contact');
			updateLinks('Contact');
    });

     $("#main-gallery").swipe( {
        //Generic swipe handler for all directions
        swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
            if((direction == "left" && $("#img1").hasClass("active")) || (direction == "right" && $("#img3").hasClass("active"))) {
                setVideoScreen(2);
            } else if((direction == "left" && $("#img2").hasClass("active")) || (direction == "right" && $("#img4").hasClass("active"))) {
                setVideoScreen(3);
            } else if((direction == "left" && $("#img3").hasClass("active")) || (direction == "right" && $("#img5").hasClass("active"))) {
                setVideoScreen(4);
            } else if((direction == "left" && $("#img4").hasClass("active")) || (direction == "right" && $("#img6").hasClass("active"))) {
                setVideoScreen(5);
						} else if((direction == "left" && $("#img5").hasClass("active")) || (direction == "right" && $("#img1").hasClass("active"))) {
                setVideoScreen(6);
            } else if((direction == "left" && $("#img6").hasClass("active")) || (direction == "right" && $("#img2").hasClass("active"))) {
                setVideoScreen(1);
            }
        }
    });

    $('#main-gal-nav>li:nth-child(1)').click(function() {
        setVideoScreen(1);
    });
    $('#main-gal-nav>li:nth-child(2)').click(function() {
        setVideoScreen(2);
    });
    $('#main-gal-nav>li:nth-child(3)').click(function() {
        setVideoScreen(3);
    });
    $('#main-gal-nav>li:nth-child(4)').click(function() {
        setVideoScreen(4);
    });
    $('#main-gal-nav>li:nth-child(5)').click(function() {
        setVideoScreen(5);
    });
		 $('#main-gal-nav>li:nth-child(6)').click(function() {
        setVideoScreen(6);
    });

    $("#gallery-content").swipe( {
        //Generic swipe handler for all directions
        swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
            var prev =  curphoto;
            if(direction == "left") {
                if(prev == $("#gal1-nav>li").length) var next = 1;
                else var next = curphoto + 1;
                setGallery(next);
                curphoto = next;
            } else if(direction == "right") {
                if(prev == 1) var next = $("#gal1-nav>li").length;
                else var next = curphoto - 1;
                setGallery(next);
                curphoto = next;
            }
        }
    });

		$("#neighborhood-gallery").swipe( {
        //Generic swipe handler for all directions
        swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
            var prev =  curnphoto;
            if(direction == "left") {
                if(prev == $("#gal2-nav>li").length) var next = 1;
                else var next = curnphoto + 1;
                setnGallery(next);
                curnphoto = next;
            } else if(direction == "right") {
                if(prev == 1) var next = $("#gal2-nav>li").length;
                else var next = curnphoto - 1;
                setnGallery(next);
                curnphoto = next;
            }
        }
    });

    $('#gal1-nav li').click(function() {
        curphoto = $(this).index() + 1;
        setGallery(curphoto);
    });

    $('#gal2-nav li').click(function() {
        curnphoto = $(this).index() + 1;
        setnGallery(curnphoto);
    });


    $("#legal-link").click(function(e) {
        showScreen('#screen-legal');
				updateLinks('Legal');
    });

    $(window).bind('orientationchange', function(e){
        sizeGallery();
				sizenGallery();
    });

    $("#new_public_user").submit(function(e) {
        e.preventDefault();
        removeErrors();
        $.ajax({
            url: $(this).attr("action"),
            type: 'POST',
            data: $(this).serializeObject(),
            success:  function(data,textStatus, jqXHR){
                if(data.success == true) {
                    showScreen("#screen-thankyou");
					updateLinks('Thank You');
                } else {
                    if(data.firstname) {
                        $("#public_user_firstname").addClass("error");
                        $("#public_user_firstname").attr("placeholder", "First name is required");
                    }
                    if(data.lastname) {
                        $("#public_user_lastname").addClass("error");
                        $("#public_user_lastname").attr("placeholder", "Last name is required");
                    }
                    if(data.email) {
                        $("#public_user_email").addClass("error");
                        if(data.email.length == 2) $("#public_user_email").attr("placeholder", "Email is required");
                        else {
                            $("#public_user_email").val("");
                            $("#public_user_email").attr("placeholder", "Email must be valid");
                        }
                    }
                    if(data.phone) {
                        $("#public_user_phone").val("");
                        $("#public_user_phone").addClass("error");
                        $("#public_user_phone").attr("placeholder", "Phone number must be valid");
                    }
                }
            },
            beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))}
        });

        $("#overlay-container").scrollTop(0);
    });
	
	if(navigator.userAgent.match(/iPad/i) != null) {
		 $('.mobile-availability').hide();
	}
	else {
		$('.center-content-availability').hide();
	}
	
	// Availability Table Sort
		$("#availability-list").tablesorter({ 
        // pass the headers argument and assing a object 
        headers: { 
            // assign the secound column (we start counting zero) 
            5: { 
                // disable it by setting the property sorter to false 
                sorter: false 
            }, 
            // assign the third column (we start counting zero) 
            6: { 
                // disable it by setting the property sorter to false 
                sorter: false 
            } 
        } 
    }); 
		$(".nicescroll").niceScroll({
				cursorcolor:"#6f6f6f",
				cursorborder:"none",
				cursorwidth: "7px",
				cursorborderradius: "3px",
				autohidemode: false,
				background: "#343434",

	});

	var path_variable = location.pathname.replace("\/","");

	if(path_variable != "") {
		//$("#screen-home").hide();

		if(path_variable=='home') {
			hideOverlay();
			positionAdjust();
			updateLinks('Home');
		}
		if(path_variable=='gallery') {
		    	showScreen('#screen-gallery, #gallery-content');
		    	initGallery();
		        curphoto = 1;
		        positionAdjust();
				updateLinks('Gallery');
		    }

	   if(path_variable=='design-team') {
			showScreen('#screen-design');
		    $('.screen ul li').each(function() {
		        $(this).find('.short').show();
		        $(this).find('.long').hide();
		        $(this).find('.more-less').text("Read More");
		    });
			updateLinks('Design Team');
		}

	   if(path_variable=='developers') {
			showScreen('#screen-developer');
		    $('.screen ul li').each(function() {
		        $(this).find('.short').show();
		        $(this).find('.long').hide();
		        $(this).find('.more-less').text("Read More");
		    });
			updateLinks('Developers');
		}

		if(path_variable=='neighborhood') {
			showScreen('#screen-neighborhood, #neighborhood-gallery');
			initnGallery();
      curnphoto = 1;
      positionAdjust();
			updateLinks('Neighborhood');
		}

		if(path_variable=='press') {
			showScreen('#screen-press');
			updateLinks('Press');
		}

		if(path_variable=='availability') {
			showScreen('#screen-availability');
			updateLinks('Availability');
		}

		if(path_variable=='amenities') {
			showScreen('#screen-amenities');
			updateLinks('Amenities');
		}

	  	if(path_variable=='contact') {
			showScreen('#screen-contact');
			updateLinks('Contact');
		}
		if(path_variable=='legal') {
			showScreen('#screen-legal');
			updateLinks('Legal');
		}
	}

////////END OF Buttons////////////////////////////////

});


function updateLinks(title, status) {
		if(!status) { status = 'true'; }
		var namespace = title.toLowerCase();
				namespace = namespace.replace(" ","-");
		var url = "/"+namespace;
		if(status == 'true') {
			document.title = title+" | Condominiums With Parking & Pool - 252 East 57th";
		}
		else {
			document.title = "Luxury Apartments & Condos For Sale Midtown & Upper East Side, Manhattan NYC | Condominiums With Parking & Pool - 252 East 57th";
		}
		window.history.pushState({}, '', url);

}

function setVideoScreen(next) {
    $("#main-gallery>.image.active").fadeOut();
    $("#main-gallery>.image.active").removeClass("active");
    $("#img" + next).addClass("active");
    $("#img" + next).fadeIn();
    $("#video-caption>div").removeClass("infocus");
    $("#video-caption>div").css("opacity", 0);
    $("#video-caption-" + next).addClass("infocus");
    $("#video-caption-" + next).css("opacity", 1);
    $("#main-gal-nav>li>a").removeClass("current");
    $("#main-gal-nav>li:nth-child(" + next + ")>a").addClass("current");
}

function setGallery(next){
    $("#gallery-content>li").fadeOut();
    $('#gallery-content>li:nth-child('+next+')').fadeIn();
    $('#gal1-nav>li>a.current').removeClass('current');

    $('#gal1-nav>li:nth-child('+next+')>a').addClass('current');
}

function setnGallery(next){
    $("#neighborhood-gallery>li").fadeOut();
    $('#neighborhood-gallery>li:nth-child('+next+')').fadeIn();
    $('#gal2-nav>li>a.current').removeClass('current');

    $('#gal2-nav>li:nth-child('+next+')>a').addClass('current');
}

function initGallery(){
	var lis = $('#gallery-content li'),
		galsize = lis.length;

	var lis2 = $('#gallery-titles li');
	
	imgpaths = $.map(lis, function( val, i ) {
	  return $(val).text();
	});
	imgtitles = $.map(lis2, function( val, i ){
		return $(val).text();
	});
	

	$('#gal-image').css('background-image', 'url('+imgpaths[0]+')');
	$('.gallery-caption>p').html(imgtitles[0]);

    $("#gallery-content>li.current").hide();
    $("#gallery-content>li.current").removeClass("current");
    $("#gal1-nav>li a.current").removeClass("current");

    $("#gallery-content>li:nth-child(1)").show();
    $("#gallery-content>li:nth-child(1)").addClass("current");
    $("#gal1-nav>li:nth-child(1)>a").addClass("current");

    sizeGallery();
}


function initnGallery(){
	var lis = $('#neighborhood-gallery li'),
		galsize = lis.length;

	var lis2 = $('#gallery-titles li');
	
	imgpaths = $.map(lis, function( val, i ) {
	  return $(val).text();
	});
	imgtitles = $.map(lis2, function( val, i ){
		return $(val).text();
	});
	

	$('#gal-image').css('background-image', 'url('+imgpaths[0]+')');
	$('#neighborhood-gallery .gallery-caption>p').html(imgtitles[0]);

    $("#neighborhood-gallery>li.current").hide();
    $("#neighborhood-galleryt>li.current").removeClass("current");
    $("#gal2-nav>li a.current").removeClass("current");

    $("#neighborhood-gallery>li:nth-child(1)").show();
    $("#neighborhood-gallery>li:nth-child(1)").addClass("current");
    $("#gal2-nav>li:nth-child(1)>a").addClass("current");

    sizenGallery();
}


function updateGallery(galindex){
	$('#gal-image').css('background-image', 'url('+imgpaths[galindex-1]+')');
	$('#gal1-nav li>a').removeClass('current');
	$('#gal1-nav li:nth-child('+galindex+')>a').addClass('current');
	$('.gallery-caption>p').html(imgtitles[galindex-1]);

    sizeGallery();
}


function updatenGallery(galindex){
	$('#gal-image').css('background-image', 'url('+imgpaths[galindex-1]+')');
	$('#gal2-nav li>a').removeClass('current');
	$('#gal2-nav li:nth-child('+galindex+')>a').addClass('current');
	$('#neighborhood-gallery .gallery-caption>p').html(imgtitles[galindex-1]);

    sizenGallery();
}

function positionAdjust(){
    /*$("#home-bg").css("left", (($("#home-bg").width() - $(window).width()) / 2) * -1);
    $("#home-logo").css("left", ($(window).width() - $("#home-logo").width()) / 2);
    $("#home-logo").css("top", ($("#home-caption").offset().top - $("#home-logo").height()) / 2);
    $("#home-logo").show();*/
	//gallery navigation
    $("#video-caption>div").each(function() {
        $(this).css("bottom", (($("#main-gal-nav").offset().top - $("#top-bar").height()) - $(this).height()) / 2);
    });
	$('#main-gal-nav').css('left', (($(window).width() - $('#main-gal-nav').width()) / 2));
	$('#top-logo').css('left', (($(window).width() - $('#top-logo').width()) / 2));


	//menu
	$('#menu').css('height', ($(window).height() - $('#top-bar').height()));
	$('#menu').css('top', $('#top-bar').height());
	$('#menu ul li').css('height',(($('#menu').height())/9) );

	$('.bottom-link').css('left', (($(window).width() - 200) / 2));
	$('#overlay-container').css('top', $('#top-bar').height());
	$('#overlay-container').css('height', ($(window).height() - $('#top-bar').height()));

	//gallery
	$('#gal-image').css('height', ($(window).height() - $('#top-bar').height() - 25));
	$('#gal-image').css('width', ($(window).width()));

	$('#gal1-nav').css('width', ($('#gallery-content li').length * 16));
	$('#gal1-nav').css('left', (($(window).width() - $('#gal1-nav').width()) / 2));
	$('.gallery-caption').css('left', (($(window).width() - $('.gallery-caption').width()) / 2));

	//ngallery
	$('#gal2-nav').css('width', ($('#neighborhood-gallery li').length * 16));
	$('#gal2-nav').css('left', (($(window).width() - $('#gal2-nav').width()) / 2));

	 var winheight = $(window).height();
	 $('.center-content-availability').css('height', (winheight - 150));
	 $('.center-content-availability .nicescroll').css('height', (winheight - 224));
}

function submitForm(e, _this) {

}

function scaleimage(imgid, imgwidth, imgheight){

    if (($(window).width() / $(window).height()) >= (imgwidth / imgheight)) {
        $(imgid).width($(window).width());
        $(imgid).height($(window).width() / (imgwidth / imgheight));

        $(imgid).css('margin-top', -((($(window).width() / (imgwidth / imgheight)) - $(window).height()) / 2));
    } else {
        $(imgid).height($(window).height());
        $(imgid).width($(window).height() * (imgwidth / imgheight));

        $(imgid).css('margin-top', '0px');
        // $(imgid).css('margin-left', -((($(window).height() * (imgwidth / imgheight)) - $(window).width()) / 2));
    }
        $(imgid).css('margin-left', '0px');

}

function removeErrors() {
    $("input").removeClass("error");
    $("#public_user_firstname").attr("placeholder", "First Name (required)");
    $("#public_user_lastname").attr("placeholder", "Last Name (required)");
    $("#public_user_email").attr("placeholder", "Email (required)");
    $("#public_user_phone").attr("placeholder", "Phone");
    if(!$.support.placeholder) {
        $(this).find("'[placeholder]'").each(function() {
            var input = $(this);
            if (input.val() == input.attr("'placeholder'")) {
                input.val("''");
            }
        });
    }
}

function showOverlay(){
	$('#main-gal-nav, .bottom-link, #video-caption').hide();
	$('#overlay-container').show();
}

function hideOverlay(){
	$('#main-gal-nav, .bottom-link, #video-caption').show();
	$('#overlay-container').hide();
}

function showScreen(whattoshow){
	showOverlay();
	$('#screen-gallery, #screen-developer, #screen-design, #screen-availability, #screen-neighborhood, #screen-press, #screen-amenities, #screen-contact, #screen-legal, #screen-thankyou, #gallery-content, #neighborhood-gallery').hide();
	$(whattoshow).show();
    $("#overlay-container").scrollTop(0);
    if(whattoshow.indexOf("#gallery-content") > -1 && $("#gal1-nav").is(":hidden")) { $("#gallery-content").off(); }
    if(whattoshow.indexOf("#neighborhood-gallery") > -1 && $("#gal2-nav").is(":hidden")) { $("#neighborhood-gallery").off(); }
}

function initVideoGallery() {
    $("#main-gallery .image").hide();
    $("#img1").addClass("active");
     $("#img1").show();  
}

function sizeGallery() {
    $("#gallery-content li").each(function() {
        if(!$("#gal1-nav").is(":visible")) {
            $(this).css("height", $(this).find("img").height());
        } else {
            $(this).css("height", $(window).height() - $("#gallery-content").offset().top);
            var imgheight = ($(this).find("img")[0].naturalHeight / $(this).find("img")[0].naturalWidth) * $(window).width();
            $(this).find("img").css("top", ($(this).height() - 70 - imgheight)/2);
        }
    });
}

function sizenGallery() {
    $("#neighborhood-gallery li").each(function() {
        if(!$("#gal2-nav").is(":visible")) {
            $(this).css("height", $(this).find("img").height());
        } else {
            $(this).css("height", $(window).height() - $("#neighborhood-gallery").offset().top);
            var imgheight = ($(this).find("img")[0].naturalHeight / $(this).find("img")[0].naturalWidth) * $(window).width();
            $(this).find("img").css("top", ($(this).height() - 70 - imgheight)/2);
        }
    });
}

function orientationMessage() {
    if((window.orientation == -90 || window.orientation == 90) && !$("body").hasClass("iphone")) {
        $("body").addClass("landscape");
    } else if(!$("body").hasClass("iphone")) {
        $("body").removeClass("landscape");
    }
}

window.onload = function() {
		//$('#site_preloader').fadeOut('slow');
    //$('#home-welcome').fadeIn('slow');
    if (navigator.userAgent.match(/iPhone/i)) $("body").addClass("iphone");
    scaleimage('#home-bg', 1440, 900);
    positionAdjust();
    initVideoGallery();
    orientationMessage();
}

window.onresize = function() {
    scaleimage('#home-bg', 1440, 900);
	positionAdjust();
    sizeGallery();
		 sizenGallery();
    orientationMessage();
}
