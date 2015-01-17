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

$(function() {
////////GLOBAL DECLARATIONS ///////////
	var imgpaths =[];
	var imgtitles= [];
    var curphoto = 1;

});


function positionAdjust(){
    $("#home-bg").css("left", (($("#home-bg").width() - $(window).width()) / 2) * -1);
    $("#home-logo").css("left", ($(window).width() - $("#home-logo").width()) / 2);
    $("#home-logo").css("top", ($("#home-caption").offset().top - $("#home-logo").height()) / 2);
    $("#home-logo").show();
	
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

function orientationMessage() {
    if((window.orientation == -90 || window.orientation == 90) && !$("body").hasClass("iphone")) {
        $("body").addClass("landscape");
    } else if(!$("body").hasClass("iphone")) {
        $("body").removeClass("landscape");
    }
}

window.onload = function() {
    if (navigator.userAgent.match(/iPhone/i)) $("body").addClass("iphone");
    scaleimage('#home-bg', 1440, 900);
    positionAdjust();
    orientationMessage();
}

window.onresize = function() {
    scaleimage('#home-bg', 1440, 900);
		positionAdjust();
    orientationMessage();
}
