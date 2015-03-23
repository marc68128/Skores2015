i1 = new Image();
i1.src = "images/bgMarc.jpg";
i2 = new Image();
i2.src = "images/bgArnaud.jpg";
i3 = new Image();
i3.src = "images/bgVincent.jpg";
i4 = new Image();
i4.src = "images/bgLauralee.jpg";
i4 = new Image();
i4.src = "images/bg.jpg";

var speed = 500;
var actualPage = 0; 
var mute = false;
var size = true; 

function deleteNoJsLink(){
	var a = $(".noJsLink").children();
	$(".noJsLink").remove();
	$("#menuBig").append(a);
}
deleteNoJsLink();

function centerBackground(){
	$("#background").css("left", ("-" + Math.floor(((($("#background").height()*5168) / 2579) - $("body").width())/2)) + "px");
	$("#backgroundA").css("left", ("-" + Math.floor(((($("#background").height()*5168) / 2579) - $("body").width())/2)) + "px");
	$("#backgroundM").css("left", ("-" + Math.floor(((($("#background").height()*5168) / 2579) - $("body").width())/2)) + "px");
	$("#backgroundL").css("left", ("-" + Math.floor(((($("#background").height()*5168) / 2579) - $("body").width())/2)) + "px");
	$("#backgroundV").css("left", ("-" + Math.floor(((($("#background").height()*5168) / 2579) - $("body").width())/2)) + "px");
}

function mute(){
	$("#jquery_jplayer_1").jPlayer("mute");
	$("#playPause").attr('onclick', 'unmute();');
	$("#playPause").attr('value', 'unmute');
}

function unmute(){
	$("#jquery_jplayer_1").jPlayer("unmute");
	$("#playPause").attr('onclick', 'mute();');
	$("#playPause").attr('value', 'mute');
}


centerBackground();
if($("body").height() < 730)
{
	$("#menuSmall").css("visibility", "visible");
	$("#menuBig").css("visibility", "hidden");
	size = false;
}

$(window).resize(function(){
  		centerBackground();
  		if(size && $("body").height() < 730)
		{
			$("#menuSmall").css("visibility", "visible");
			$("#menuBig").css("visibility", "hidden");
			size = false;
		}
		if(!size && $("body").height() >= 730 && actualPage == 0)
		{
			$("#menuBig").css("visibility", "visible");
			$("#menuSmall").css("visibility", "hidden");
			size = true;
		}
	
	});
	
$("#mute").click(function(){
	if(mute)
	{
		$("#jquery_jplayer_1").jPlayer("unmute");
	    $("#muteImage").attr("src", "images/mute.png");
		mute = false;
	}
	else
	{
		$("#jquery_jplayer_1").jPlayer("mute");
	    $("#muteImage").attr("src", "images/unmute.png");
		mute = true; 
	}
});


$(document).ready(function() {
	
	$("body").queryLoader2({ 
        barColor: "#000000",
        backgroundColor: "#965050",
        percentage: true,
        barHeight: 1,
        completeAnimation: "grow",
    });
	
	$(".fancybox").fancybox(); //Galerie
	
	$("#jquery_jplayer_1").jPlayer({    //Vidéo Player
		ready: function () {
			$(this).jPlayer("setMedia", {
				m4v: "http://theskores.fr/Video/medlayCaf.m4v",
				ogv: "http://theskores.fr/Video/medlayCaf.ogv",
				//webmv: "http://www.jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm",
				poster: "http://www.jplayer.org/video/poster/Big_Buck_Bunny_Trailer_480x270.png"
			});
			$("#jquery_jplayer_1").jPlayer("play");
		},
		swfPath: "JPlayer",
		supplied: "webmv, ogv, m4v",
		size: {
			width: "640px",
			height: "360px",
			cssClass: "jp-video-360p"
		},
		smoothPlayBar: true,
		keyEnabled: true, 
		loop: true
	});

	   

//Line-Up :

	$("#lineUpMarc").hover(function(){
		$("#background").css("visibility", "hidden");
		$("#backgroundM").css("visibility", "visible");
		$("#lineUpMarcFull").css("visibility", "visible");
	}, 
	function(){
		$("#background").css("visibility", "visible");
		$("#backgroundM").css("visibility", "hidden");
		$("#lineUpMarcFull").css("visibility", "hidden");
	}); 
	
	$("#lineUpArnaud").hover(function(){
		$("#background").css("visibility", "hidden");
		$("#backgroundA").css("visibility", "visible");
		$("#lineUpArnaudFull").css("visibility", "visible");
	}, 
	function(){
		$("#background").css("visibility", "visible");
		$("#backgroundA").css("visibility", "hidden");
		$("#lineUpArnaudFull").css("visibility", "hidden");
	}); 
	
	$("#lineUpVincent").hover(function(){
		$("#background").css("visibility", "hidden");
		$("#backgroundV").css("visibility", "visible");
		$("#lineUpVincentFull").css("visibility", "visible");
	}, 
	function(){
		$("#background").css("visibility", "visible");
		$("#backgroundV").css("visibility", "hidden");
		$("#lineUpVincentFull").css("visibility", "hidden");
	}); 
	
	$("#lineUpLauralee").hover(function(){
		$("#background").css("visibility", "hidden");
		$("#backgroundL").css("visibility", "visible");
		$("#lineUpLauraleeFull").css("visibility", "visible");
	}, 
	function(){
		$("#background").css("visibility", "visible");
		$("#backgroundL").css("visibility", "hidden");
		$("#lineUpLauraleeFull").css("visibility", "hidden");
	}); 
	


//Gestion des pages (navigation) :

	$("#menuSmallBio, #menu0-1").click(function(){
		if(actualPage == 0)
		{
			$("#jp_container_1").animate({"left": "-50%"}, speed);
			$("#bio").css("left", "150%");
			$("#bio").animate({"left": "50%"}, speed);
			$("#menuSmall").css("visibility", "visible");
			$("#menuBig").css("visibility", "hidden");
		}
		if(actualPage == 2)
		{
			$("#lineUp").animate({"left": "150%"}, speed);
			$("#bio").css("left", "-50%");
			$("#bio").animate({"left": "50%"}, speed);
			$("#menuSmall").css("visibility", "visible");
			$("#menuBig").css("visibility", "hidden");
		}
		if(actualPage == 3)
		{
			$("#Galerie").animate({"left": "110%"}, speed);
			$("#bio").css("left", "-50%");
			$("#bio").animate({"left": "50%"}, speed);
			$("#menuSmall").css("visibility", "visible");
			$("#menuBig").css("visibility", "hidden");
		}
		if(actualPage == 4)
		{
			$("#Tour").animate({"left": "110%"}, speed);
			$("#bio").css("left", "-50%");
			$("#bio").animate({"left": "50%"}, speed);
			$("#menuSmall").css("visibility", "visible");
			$("#menuBig").css("visibility", "hidden");
		}
		if(actualPage == 5)
		{
			$("#Contact").animate({"left": "110%"}, speed);
			$("#bio").css("left", "-50%");
			$("#bio").animate({"left": "50%"}, speed);
			$("#menuSmall").css("visibility", "visible");
			$("#menuBig").css("visibility", "hidden");
		}
			
		actualPage = 1;	
		var stateObj = { foo: "Biography" };
		history.pushState(stateObj, "Biography", "Biography");
	});
	
	$("#menuSmallHome, #menu0-0").click(function(){
		if(actualPage == 1)
		{
			$("#bio").animate({"left": "150%"}, speed);
			$("#jp_container_1").css("left", "-50%");
			$("#jp_container_1").animate({"left": "50%"}, speed, function(){
				if($("body").height() > 730)
				{
					$("#menuBig").css("visibility", "visible");
					$("#menuSmall").css("visibility", "hidden");
				}
			});
		}
		if(actualPage == 2)
		{
			$("#lineUp").animate({"left": "110%"}, speed);
			$("#jp_container_1").css("left", "-50%");
			$("#jp_container_1").animate({"left": "50%"}, speed, function(){
				if($("body").height() > 730)
				{
					$("#menuBig").css("visibility", "visible");
					$("#menuSmall").css("visibility", "hidden");
				}
			});
		}
		if(actualPage == 3)
		{
			$("#Galerie").animate({"left": "110%"}, speed);
			$("#jp_container_1").css("left", "-50%");
			$("#jp_container_1").animate({"left": "50%"}, speed, function(){
				if($("body").height() > 730)
				{
					$("#menuBig").css("visibility", "visible");
					$("#menuSmall").css("visibility", "hidden");
				}
			});
		}
		if(actualPage == 4)
		{
			$("#Tour").animate({"left": "110%"}, speed);
			$("#jp_container_1").css("left", "-50%");
			$("#jp_container_1").animate({"left": "50%"}, speed, function(){
				if($("body").height() > 730)
				{
					$("#menuBig").css("visibility", "visible");
					$("#menuSmall").css("visibility", "hidden");
				}
			});
		}
		if(actualPage == 5)
		{
			$("#Contact").animate({"left": "110%"}, speed);
			$("#jp_container_1").css("left", "-50%");
			$("#jp_container_1").animate({"left": "50%"}, speed, function(){
				if($("body").height() > 730)
				{
					$("#menuBig").css("visibility", "visible");
					$("#menuSmall").css("visibility", "hidden");
				}
			});
		}
		
		actualPage = 0;
		var stateObj = { foo: "Home" };
		history.pushState(stateObj, "Home", "Home");
	});
		
	$("#menuSmallLineUp, #menu0-2").click(function(){
		if(actualPage == 0)
		{
			$("#jp_container_1").animate({"left": "-50%"}, speed);
			$("#lineUp").css("left", "110%");
			$("#lineUp").animate({"left": "0%"}, speed);
			$("#menuSmall").css("visibility", "visible");
			$("#menuBig").css("visibility", "hidden");
		}
		if(actualPage == 1)
		{
			$("#bio").animate({"left": "-50%"}, speed);
			$("#lineUp").css("left", "110%");
			$("#lineUp").animate({"left": "0%"}, speed);
			$("#menuSmall").css("visibility", "visible");
			$("#menuBig").css("visibility", "hidden");
		}
		if(actualPage == 3)
		{
			$("#Galerie").animate({"left": "110%"}, speed);
			$("#lineUp").css("left", "-110%");
			$("#lineUp").animate({"left": "0%"}, speed);
			$("#menuSmall").css("visibility", "visible");
			$("#menuBig").css("visibility", "hidden");
		}
		if(actualPage == 4)
		{
			$("#Tour").animate({"left": "110%"}, speed);
			$("#lineUp").css("left", "-110%");
			$("#lineUp").animate({"left": "0%"}, speed);
			$("#menuSmall").css("visibility", "visible");
			$("#menuBig").css("visibility", "hidden");
		}
		if(actualPage == 5)
		{
			$("#Contact").animate({"left": "110%"}, speed);
			$("#lineUp").css("left", "-110%");
			$("#lineUp").animate({"left": "0%"}, speed);
			$("#menuSmall").css("visibility", "visible");
			$("#menuBig").css("visibility", "hidden");
		}
	
		actualPage = 2;
		var stateObj = { foo: "LineUp" };
		history.pushState(stateObj, "LineUp", "LineUp");
	});
		
	$("#menuSmallPhoto, #menu1-0").click(function(){
		if(actualPage == 0)
		{
			$("#jp_container_1").animate({"left": "-50%"}, speed);
			$("#Galerie").css("left", "110%");
			$("#Galerie").animate({"left": "0%"}, speed);
			$("#menuSmall").css("visibility", "visible");
			$("#menuBig").css("visibility", "hidden");
		}
		if(actualPage == 1)
		{
			$("#bio").animate({"left": "-50%"}, speed);
			$("#Galerie").css("left", "110%");
			$("#Galerie").animate({"left": "0%"}, speed);
			$("#menuSmall").css("visibility", "visible");
			$("#menuBig").css("visibility", "hidden");
		}
		if(actualPage == 2)
		{
			$("#lineUp").animate({"left": "-100%"}, speed);
			$("#Galerie").css("left", "110%");
			$("#Galerie").animate({"left": "0%"}, speed);
			$("#menuSmall").css("visibility", "visible");
			$("#menuBig").css("visibility", "hidden");
		}
		if(actualPage == 4)
		{
			$("#Tour").animate({"left": "110%"}, speed);
			$("#Galerie").css("left", "-110%");
			$("#Galerie").animate({"left": "0%"}, speed);
			$("#menuSmall").css("visibility", "visible");
			$("#menuBig").css("visibility", "hidden");
		}
		if(actualPage == 5)
		{
			$("#Contact").animate({"left": "110%"}, speed);
			$("#Galerie").css("left", "-110%");
			$("#Galerie").animate({"left": "0%"}, speed);
			$("#menuSmall").css("visibility", "visible");
			$("#menuBig").css("visibility", "hidden");
		}
	
		actualPage = 3;
		var stateObj = { foo: "Photos" };
		history.pushState(stateObj, "Photos", "Photos");
	});
	
	$("#menuSmallTour, #menu1-1").click(function(){
		if(actualPage == 0)
		{
			$("#jp_container_1").animate({"left": "-50%"}, speed);
			$("#Tour").css("left", "110%");
			$("#Tour").animate({"left": "0%"}, speed);
			$("#menuSmall").css("visibility", "visible");
			$("#menuBig").css("visibility", "hidden");
		}
		if(actualPage == 1)
		{
			$("#bio").animate({"left": "-50%"}, speed);
			$("#Tour").css("left", "110%");
			$("#Tour").animate({"left": "0%"}, speed);
			$("#menuSmall").css("visibility", "visible");
			$("#menuBig").css("visibility", "hidden");
		}
		if(actualPage == 2)
		{
			$("#lineUp").animate({"left": "-100%"}, speed);
			$("#Tour").css("left", "110%");
			$("#Tour").animate({"left": "0%"}, speed);
			$("#menuSmall").css("visibility", "visible");
			$("#menuBig").css("visibility", "hidden");
		}
		if(actualPage == 3)
		{
			$("#Galerie").animate({"left": "-100%"}, speed);
			$("#Tour").css("left", "110%");
			$("#Tour").animate({"left": "0%"}, speed);
			$("#menuSmall").css("visibility", "visible");
			$("#menuBig").css("visibility", "hidden");
		}
		if(actualPage == 5)
		{
			$("#Contact").animate({"left": "110%"}, speed);
			$("#Tour").css("left", "-110%");
			$("#Tour").animate({"left": "0%"}, speed);
			$("#menuSmall").css("visibility", "visible");
			$("#menuBig").css("visibility", "hidden");
		}
	
		actualPage = 4;
		var stateObj = { foo: "Tour" };
		history.pushState(stateObj, "Tour", "Tour");
	
	});
	
	$("#menuSmallContact, #menu1-2").click(function(){
		if(actualPage == 0)
		{
			$("#jp_container_1").animate({"left": "-50%"}, speed);
			$("#Contact").css("left", "110%");
			$("#Contact").animate({"left": "0%"}, speed);
			$("#menuSmall").css("visibility", "visible");
			$("#menuBig").css("visibility", "hidden");
		}
		if(actualPage == 1)
		{
			$("#bio").animate({"left": "-50%"}, speed);
			$("#Contact").css("left", "110%");
			$("#Contact").animate({"left": "0%"}, speed);
			$("#menuSmall").css("visibility", "visible");
			$("#menuBig").css("visibility", "hidden");
		}
		if(actualPage == 2)
		{
			$("#lineUp").animate({"left": "-100%"}, speed);
			$("#Contact").css("left", "110%");
			$("#Contact").animate({"left": "0%"}, speed);
			$("#menuSmall").css("visibility", "visible");
			$("#menuBig").css("visibility", "hidden");
		}
		if(actualPage == 3)
		{
			$("#Galerie").animate({"left": "-100%"}, speed);
			$("#Contact").css("left", "110%");
			$("#Contact").animate({"left": "0%"}, speed);
			$("#menuSmall").css("visibility", "visible");
			$("#menuBig").css("visibility", "hidden");
		}
		if(actualPage == 4)
		{
			$("#Tour").animate({"left": "-100%"}, speed);
			$("#Contact").css("left", "110%");
			$("#Contact").animate({"left": "0%"}, speed);
			$("#menuSmall").css("visibility", "visible");
			$("#menuBig").css("visibility", "hidden");
		}
	
		actualPage = 5;
		var stateObj = { foo: "Contact" };
		history.pushState(stateObj, "Contact", "Contact");
	
	});

//Gestion de la naviguation (boutton retour, Historique)

	window.onpopstate = function(event) {
	  	console.log(event.state);
	  	console.log(event.state.foo);
	  	if(event.state == null)
	  	{
			if(actualPage == 1)
			{
				$("#bio").animate({"left": "150%"}, speed);
				$("#jp_container_1").css("left", "-50%");
				$("#jp_container_1").animate({"left": "50%"}, speed, function(){
					if($("body").height() > 730)
					{
						$("#menuBig").css("visibility", "visible");
						$("#menuSmall").css("visibility", "hidden");
					}
				});
			}
			if(actualPage == 2)
			{
				$("#lineUp").animate({"left": "110%"}, speed);
				$("#jp_container_1").css("left", "-50%");
				$("#jp_container_1").animate({"left": "50%"}, speed, function(){
					if($("body").height() > 730)
					{
						$("#menuBig").css("visibility", "visible");
						$("#menuSmall").css("visibility", "hidden");
					}
				});
			}
			if(actualPage == 3)
			{
				$("#Galerie").animate({"left": "110%"}, speed);
				$("#jp_container_1").css("left", "-50%");
				$("#jp_container_1").animate({"left": "50%"}, speed, function(){
					if($("body").height() > 730)
					{
						$("#menuBig").css("visibility", "visible");
						$("#menuSmall").css("visibility", "hidden");
					}
				});
			}
			if(actualPage == 4)
			{
				$("#Tour").animate({"left": "110%"}, speed);
				$("#jp_container_1").css("left", "-50%");
				$("#jp_container_1").animate({"left": "50%"}, speed, function(){
					if($("body").height() > 730)
					{
						$("#menuBig").css("visibility", "visible");
						$("#menuSmall").css("visibility", "hidden");
					}
				});
			}
			if(actualPage == 5)
			{
				$("#Contact").animate({"left": "110%"}, speed);
				$("#jp_container_1").css("left", "-50%");
				$("#jp_container_1").animate({"left": "50%"}, speed, function(){
					if($("body").height() > 730)
					{
						$("#menuBig").css("visibility", "visible");
						$("#menuSmall").css("visibility", "hidden");
					}
				});
			}	
			actualPage = 0;
	  	}
	  	else if(event.state.foo == "Biography")
	  	{
	  		if(actualPage == 0)
			{
				$("#jp_container_1").animate({"left": "-50%"}, speed);
				$("#bio").css("left", "150%");
				$("#bio").animate({"left": "50%"}, speed);
				$("#menuSmall").css("visibility", "visible");
				$("#menuBig").css("visibility", "hidden");
			}
			if(actualPage == 2)
			{
				$("#lineUp").animate({"left": "150%"}, speed);
				$("#bio").css("left", "-50%");
				$("#bio").animate({"left": "50%"}, speed);
				$("#menuSmall").css("visibility", "visible");
				$("#menuBig").css("visibility", "hidden");
			}
			if(actualPage == 3)
			{
				$("#Galerie").animate({"left": "110%"}, speed);
				$("#bio").css("left", "-50%");
				$("#bio").animate({"left": "50%"}, speed);
				$("#menuSmall").css("visibility", "visible");
				$("#menuBig").css("visibility", "hidden");
			}
			if(actualPage == 4)
			{
				$("#Tour").animate({"left": "110%"}, speed);
				$("#bio").css("left", "-50%");
				$("#bio").animate({"left": "50%"}, speed);
				$("#menuSmall").css("visibility", "visible");
				$("#menuBig").css("visibility", "hidden");
			}
			if(actualPage == 5)
			{
				$("#Contact").animate({"left": "110%"}, speed);
				$("#bio").css("left", "-50%");
				$("#bio").animate({"left": "50%"}, speed);
				$("#menuSmall").css("visibility", "visible");
				$("#menuBig").css("visibility", "hidden");
			}
				
			actualPage = 1;	
	  	}
	  	else if(event.state.foo == "LineUp")
	  	{
	  		if(actualPage == 0)
			{
				$("#jp_container_1").animate({"left": "-50%"}, speed);
				$("#lineUp").css("left", "110%");
				$("#lineUp").animate({"left": "0%"}, speed);
				$("#menuSmall").css("visibility", "visible");
				$("#menuBig").css("visibility", "hidden");
			}
			if(actualPage == 1)
			{
				$("#bio").animate({"left": "-50%"}, speed);
				$("#lineUp").css("left", "110%");
				$("#lineUp").animate({"left": "0%"}, speed);
				$("#menuSmall").css("visibility", "visible");
				$("#menuBig").css("visibility", "hidden");
			}
			if(actualPage == 3)
			{
				$("#Galerie").animate({"left": "110%"}, speed);
				$("#lineUp").css("left", "-110%");
				$("#lineUp").animate({"left": "0%"}, speed);
				$("#menuSmall").css("visibility", "visible");
				$("#menuBig").css("visibility", "hidden");
			}
			if(actualPage == 4)
			{
				$("#Tour").animate({"left": "110%"}, speed);
				$("#lineUp").css("left", "-110%");
				$("#lineUp").animate({"left": "0%"}, speed);
				$("#menuSmall").css("visibility", "visible");
				$("#menuBig").css("visibility", "hidden");
			}
			if(actualPage == 5)
			{
				$("#Contact").animate({"left": "110%"}, speed);
				$("#lineUp").css("left", "-110%");
				$("#lineUp").animate({"left": "0%"}, speed);
				$("#menuSmall").css("visibility", "visible");
				$("#menuBig").css("visibility", "hidden");
			}
		
			actualPage = 2;
	  	}
	  	else if(event.state.foo == "Photos")
	  	{
	  		if(actualPage == 0)
			{
				$("#jp_container_1").animate({"left": "-50%"}, speed);
				$("#Galerie").css("left", "110%");
				$("#Galerie").animate({"left": "0%"}, speed);
				$("#menuSmall").css("visibility", "visible");
				$("#menuBig").css("visibility", "hidden");
			}
			if(actualPage == 1)
			{
				$("#bio").animate({"left": "-50%"}, speed);
				$("#Galerie").css("left", "110%");
				$("#Galerie").animate({"left": "0%"}, speed);
				$("#menuSmall").css("visibility", "visible");
				$("#menuBig").css("visibility", "hidden");
			}
			if(actualPage == 2)
			{
				$("#lineUp").animate({"left": "-100%"}, speed);
				$("#Galerie").css("left", "110%");
				$("#Galerie").animate({"left": "0%"}, speed);
				$("#menuSmall").css("visibility", "visible");
				$("#menuBig").css("visibility", "hidden");
			}
			if(actualPage == 4)
			{
				$("#Tour").animate({"left": "110%"}, speed);
				$("#Galerie").css("left", "-110%");
				$("#Galerie").animate({"left": "0%"}, speed);
				$("#menuSmall").css("visibility", "visible");
				$("#menuBig").css("visibility", "hidden");
			}
			if(actualPage == 5)
			{
				$("#Contact").animate({"left": "110%"}, speed);
				$("#Galerie").css("left", "-110%");
				$("#Galerie").animate({"left": "0%"}, speed);
				$("#menuSmall").css("visibility", "visible");
				$("#menuBig").css("visibility", "hidden");
			}
		
			actualPage = 3;
	  	}
	  	else if(event.state.foo == "Tour")
	  	{
	  		if(actualPage == 0)
			{
				$("#jp_container_1").animate({"left": "-50%"}, speed);
				$("#Tour").css("left", "110%");
				$("#Tour").animate({"left": "0%"}, speed);
				$("#menuSmall").css("visibility", "visible");
				$("#menuBig").css("visibility", "hidden");
			}
			if(actualPage == 1)
			{
				$("#bio").animate({"left": "-50%"}, speed);
				$("#Tour").css("left", "110%");
				$("#Tour").animate({"left": "0%"}, speed);
				$("#menuSmall").css("visibility", "visible");
				$("#menuBig").css("visibility", "hidden");
			}
			if(actualPage == 2)
			{
				$("#lineUp").animate({"left": "-100%"}, speed);
				$("#Tour").css("left", "110%");
				$("#Tour").animate({"left": "0%"}, speed);
				$("#menuSmall").css("visibility", "visible");
				$("#menuBig").css("visibility", "hidden");
			}
			if(actualPage == 3)
			{
				$("#Galerie").animate({"left": "-100%"}, speed);
				$("#Tour").css("left", "110%");
				$("#Tour").animate({"left": "0%"}, speed);
				$("#menuSmall").css("visibility", "visible");
				$("#menuBig").css("visibility", "hidden");
			}
			if(actualPage == 5)
			{
				$("#Contact").animate({"left": "110%"}, speed);
				$("#Tour").css("left", "-110%");
				$("#Tour").animate({"left": "0%"}, speed);
				$("#menuSmall").css("visibility", "visible");
				$("#menuBig").css("visibility", "hidden");
			}
		
			actualPage = 4;
	  	}
	  	else if(event.state.foo == "Contact")
	  	{
	  		if(actualPage == 0)
			{
				$("#jp_container_1").animate({"left": "-50%"}, speed);
				$("#Contact").css("left", "110%");
				$("#Contact").animate({"left": "0%"}, speed);
				$("#menuSmall").css("visibility", "visible");
				$("#menuBig").css("visibility", "hidden");
			}
			if(actualPage == 1)
			{
				$("#bio").animate({"left": "-50%"}, speed);
				$("#Contact").css("left", "110%");
				$("#Contact").animate({"left": "0%"}, speed);
				$("#menuSmall").css("visibility", "visible");
				$("#menuBig").css("visibility", "hidden");
			}
			if(actualPage == 2)
			{
				$("#lineUp").animate({"left": "-100%"}, speed);
				$("#Contact").css("left", "110%");
				$("#Contact").animate({"left": "0%"}, speed);
				$("#menuSmall").css("visibility", "visible");
				$("#menuBig").css("visibility", "hidden");
			}
			if(actualPage == 3)
			{
				$("#Galerie").animate({"left": "-100%"}, speed);
				$("#Contact").css("left", "110%");
				$("#Contact").animate({"left": "0%"}, speed);
				$("#menuSmall").css("visibility", "visible");
				$("#menuBig").css("visibility", "hidden");
			}
			if(actualPage == 4)
			{
				$("#Tour").animate({"left": "-100%"}, speed);
				$("#Contact").css("left", "110%");
				$("#Contact").animate({"left": "0%"}, speed);
				$("#menuSmall").css("visibility", "visible");
				$("#menuBig").css("visibility", "hidden");
			}
		
			actualPage = 5;
	  	}
	}
});