// JavaScript Document
var url = window.location; // get current URL
$('#nav a[href="'+url+'"]').addClass('active');

var $activeUL = $('.active').closest('ul');
/*
Revise below condition that tests if .active is a submenu
*/
if($activeUL.attr('id') != 'nav') { //check if it is submenu
    $activeUL
        .parent() //This should return the li
        .children('a') //The childrens are <a> and <ul>
        .addClass('active'); //add class active to the a    
}


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
				$(this).css("border-bottom", "1px solid #617D4B");
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