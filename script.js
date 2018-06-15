
	
	$("#experience-button").click(function(){
		if ($(".resume-item-hidden, .experience").css("display") == "none"){
			$(".resume-item-hidden, .experience").css("display", "block");
			$("#experience-button").html("<i class='fa fa-angle-up'></i> Hide");
		}
		
		else {
			$(".resume-item-hidden, .experience").css("display","none");
			$("#experience-button").html("<i class='fa fa-angle-down'></i> Show More");
		}
	});
	
	$("#about-button").click(function(){
		if ($(".resume-item-hidden, .about").css("display") == "none"){
			$(".resume-item-hidden, .about").css("display", "block");
			$("#about-button").html("<i class='fa fa-angle-up'></i> Hide");
		}
		
		else {
			$(".resume-item-hidden, .about").css("display","none");
			$("#about-button").html("<i class='fa fa-angle-down'></i> Show More");
		}
	});
	
	
	
