<%@ page contentType="text/html; charset=utf-8" language="java" import="java.sql.*" errorPage="" %>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Untitled Document</title>
</head>

<body>
<script>        
$(document).click(function() {
    showDropDown(null);
	$("#nav").delay(350).queue(function (next){
				$(this).css("border-bottom", "none");
				next();
			});
});

$(".dropdown").click(function(event) {
    showDropDown(this);
	$("#nav").delay(300).queue(function (next){
				$(this).css("border-bottom", "1px solid black");
				next();
			});
    event.stopPropagation();
});

var showDropDown = function(object) {
    $(".dropdown").each(function(i, element) {
        var submenu = $(element).children(".sub-menu");
        if(!$(submenu).is(":hidden")) {
            $(submenu).slideUp(400);
        }
    });
    if(object != null) {
        $(object).children(".sub-menu").delay(250).slideDown(600);
    }
}
</script>
</body>
</html>