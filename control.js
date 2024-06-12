$(document).keypress(function (e) {
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