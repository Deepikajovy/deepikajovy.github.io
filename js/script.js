$(document).ready(function()
{
 	$("#menu").accordion({collapsible: true, active:false});

 	 $('img').mouseenter(function(){
 	 	
        $(this).effect('bounce',500);
    });
});