//check off the lis and toggle them
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");	
});

//fadeout and remove when clicked on delete button
$("ul").on("click","span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grab the new todo text entered
		var newtext = $(this).val();
		$(this).val("");
		//create new li to the ul list
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span>" + newtext + "</li>");
	}
});

$("h1 i").click(function(){
	$("input[type='text'").fadeToggle();
});