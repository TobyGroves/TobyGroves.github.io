$('.revealedBox').each(function(i){ 

	var childrenSpan = $(this).children('span').length;

	$(this).addClass('childrenSpan-' + childrenSpan);  

  if($(window).scrollTop() + $(window).height() > $(this).offset().top + $(this).outerHeight() ){ 
  	$(this).addClass('revealedBox-in');       
  }   

}); 

$(window).scroll(function() { 
	$('.revealedBox').each(function(i){  
  if($(window).scrollTop() + $(window).height() > $(this).offset().top ){ 
  	$(this).addClass('revealedBox-in');       
  }   
}); 
  
});