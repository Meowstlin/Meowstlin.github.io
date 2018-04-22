$(document).ready(function() {
  $('#fullpage').fullpage();
	$("#3").backstretch("assets/img/lake.jpg");
  $("#2").backstretch("assets/img/sunset.jpg");
  $("#1").backstretch("assets/img/docks.jpg");
  $(".centered-container").css('border-radius', "" + $(".centered-container").height() / 2 + "px");
  $("svg").css('left', "" + (Number($("svg").css('left').replace("px", "")) - 30) + "px");
  $("p2-container").hide();
  $("me").hide();

  $(window).resize(function(){
    console.log($(window).width())
    $("svg").css('left', "" + ($(window).width() / 2 - 30) + "px");  // jQuery Function Number 1
  });

  $("#resume-box").hide();
  $("b").click(function(){
    console.log(($(window).width() - 800)/2);
    $("b").css("color", "#5603b5");
    $("#lightbox").show();
    $("#resume-box").show();
    var string = ($(window).width() - 800)/2 + "px";
    $("#resume-box").css({left: string});
  });

  $("#overlay, #close").click(function() {  // jQuery Function Number 2
		$("#lightbox").hide();
	})

  $('#1').on ('mousewheel', function (e) {
    var delta = e.originalEvent.wheelDelta;
    if (delta < 0) {
        console.log('You scrolled down');
        $(".centered-container").fadeOut(500);  // jQuery Function Number 3
        $("p2-container").delay(1000).fadeIn(1000);
        $("me").fadeIn(1000);
    }
  });

  $('#2').on ('mousewheel', function (e) {
    var delta = e.originalEvent.wheelDelta;
    if (delta < 0) {
        console.log('You scrolled down');
    } else if (delta > 0) {
        $(".centered-container").fadeIn(1000);  // jQuery Function Number 4
        $("#joke").text("Again, I hope you enjoy the docks.");  // jQuery Function Number 5
    }
  });

  $('#3').on ('mousewheel', function (e) {
    var delta = e.originalEvent.wheelDelta;
    if (delta > 0) {
        console.log('You scrolled up');
    }
  });

  $("#lightbox").hide();




});
