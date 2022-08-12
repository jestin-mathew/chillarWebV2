$("#sandwich-bar-icon").click(function(){
    $('.header').hide();
  });
$("#sandwich-bar-home-icon").click(function(){
    $('.header').show();
    event.stopPropagation();
  });

  $('html').click(function() {
    $('.header').hide();
  });
  
  $('.header').click(function(event){
      event.stopPropagation();
  });



