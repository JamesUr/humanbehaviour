
$("video").css("visibility", "hidden")

$("video").on("timeupdate", function() {
	console.log($("video").get(0).duration)
	var videoLength = Math.floor($("video").get(0).duration)/10;
	console.log(videoLength)
	
	var startTime = Math.floor(Math.random() * videoLength);
	console.log(startTime)

	var mediaVideo = $("video").get(0);
	console.log(mediaVideo.currentTime)
	mediaVideo.currentTime = startTime*10;
	console.log(mediaVideo.currentTime)
	console.log("true")
	$("video").off('timeupdate');
	setTimeout(function() {
		$("video").css("visibility", "visible")
	},500)
});


$(document).keypress(function (e) {
	if(e.keyCode == 97){
		var mediaVideo = $("video").get(0);
		mediaVideo.pause()
		mediaVideo.currentTime = mediaVideo.currentTime - 10
		mediaVideo.play()
		}
	
	if(e.keyCode == 100){
		var mediaVideo = $("video").get(0);
		mediaVideo.pause()
		mediaVideo.currentTime = mediaVideo.currentTime + 10
		mediaVideo.play()
	}
})


$(document).keypress(function (e) {
    console.log(e.keyCode)
    if(e.keyCode == 32){
		e.preventDefault();
		var mediaVideo = $("video").get(0);
			if (mediaVideo.paused) {
				mediaVideo.play();
			} else {
			mediaVideo.pause();
			}
    }

	if(e.keyCode == 13){
		if($("#textback").css("visibility") == "hidden") {
			$("#textback").css("visibility","visible")
		} else {
			$("#textback").css("visibility","hidden")
		}
	}
    if(e.keyCode == 13){
		if($("#box").css("mix-blend-mode") == "exclusion") {
			$("#box").css("mix-blend-mode", "hard-light")
		} else {
			$("#box").css("mix-blend-mode", "exclusion")
		}
		try{ 
			if($("#box2").css("mix-blend-mode") == "exclusion") {
				$("#box2").css("mix-blend-mode", "hard-light")
			} else {
				$("#box2").css("mix-blend-mode", "exclusion")
			}
		}
		catch {}
	}

});

setInterval(function() {
	if((window.fullScreen) ||
	(window.innerWidth == screen.width && window.innerHeight == screen.height)) {
		$("#overlay").css("visibility", "hidden")
	} else {
		$("#overlay").css("visibility", "visible")
	}
	}, 100)

$(document).on("wheel", function(e) {
	e.preventDefault()
})
