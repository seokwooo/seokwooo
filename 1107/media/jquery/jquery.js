$(document).ready(function(){
	$(".thumb a").click(function(){
		$(".main img").attr("src", $(this).attr("href"))
			.attr("alt", $(this).children("img").attr("alt"));
	return false;
	});
});
