//Check Off Specific Todos By Clicking
$("ul").on("click","li",function()
	{
		//if li is grey turn black else turn gray
		$(this).toggleClass("completed")
	}
)

//Click on X to delete Todo
$("ul").on("click","span",function(event)
	{
		//to remove li when we click on li
		$(this).parent().fadeOut(500,function()
			{
			   //here  this is parent
				$(this).remove()
			}
		)
		// to stop to go to higher level tags to li->ul->body etc
		 event.stopPropogation();
	}
)

$("input[type='text']").keypress(function(event)
	{
		//when press enter add to do to list
		 if(event.which === 13)
		 {
			 //grabbing new todo text from input
			var todoText = $(this).val()
			$(this).val("")
			//create a new li and add to ul
			$('ul').append("<li><span><i class='fas fa-trash-alt'></i></span> "+todoText+"</li>")
		 }
	}
)

$(".fa-plus").click(function()
	{
		$("input[type='text']").fadeToggle()
	}
)