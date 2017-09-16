function loadNavContent(){ 
	var folder = "projects/";
	$.ajax({
		url: folder,
		success: function(data){
			console.log(data);   
			$(data).find("a:contains(ers)").each(function(){
				var theLink = $(this).attr("href");
				var theTitle = theLink.replace("/projects/", "");
				var i = 0;
				for(i; i < theTitle.length; i++){
					theTitle = theTitle.replace("_", " ");
				}

				$("#navBar").append("<p>" + theTitle + "</p>");
				console.log("got one!");
			});
		}
	});
}

function loadRightContent(){ 
	var folder = "projects/Something_Something_National_Conversation/thumbs/";
	$.ajax({
		url : folder,      
		success: function(data) {          
			$(data).find("a:contains(.png), a:contains(.jpg)").each(function(){
				var theThumb = $(this).attr("href"); 
				var theImage = theThumb.replace("thumbs", "images");
				$("div#right").append("<a href='" + theImage + "'> <img class='thumb' src = '" + theThumb +"'></a><br>")
			});
		}
	});
}

function loadLeftContent(location) {
	$("#left").html("<p>Loading page content...</p>");
    // Load the Markdown file and convert it to HTML for display
    var markdownURL = "projects/Something_Something_National_Conversation/text.md";
    $.get(markdownURL, function(markdownContent) {
    	var converter = new Markdown.Converter();
    	var htmlContent = converter.makeHtml(markdownContent);
    	$("div#left").html(htmlContent);
    });
}



// just stuff I played around with down here
function logOutput(){ 
	var folder = "projects/";
	$.ajax({
		url: folder,
		success: function(data){
			console.log(data);
		}
	});
};