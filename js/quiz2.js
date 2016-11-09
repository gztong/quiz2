// write jQuery or vanilla javascript to do the following:
//  - loop through the list itmes in the <ol> and change their text and color to be different from what it is now
//  - use js and html to create at least one custom accordion (by yourself, no copy paste)
//  - create a button in the html that, once clicked, will fire off the function described in the next buller point
//  - write a function that will fade out all of the html inside the body tag and replace it with a custom goodbye message when you click the button
//  - finally, write a function that makes you happy :D (as in, have some fun a write something cool, it's up to you!)

$(function(){


	console.log("this is a message for you!!!");

//  - create a button in the html that, once clicked, will fire off the function described in the next buller point
//  - write a function that will fade out all of the html inside the body tag and replace it with a custom goodbye message when you click the button
  $("#hide").click(function(){
      $("#body").fadeOut(1000, fading);
  });

  $("#happy").click(function(){
      $("#body").fadeOut(1000, happy);
  });

  var fading = function(){
      $("#body").fadeOut(1000, function(){
      $("#message").innerHTML = "goodbye";

      $("#message").show();
    });
  };

//  - finally, write a function that makes you happy :D (as in, have some fun a write something cool, it's up to you!)
  var happy =  function(){
    $("#body").fadeIn(1000, function(){
      $("#body").fadeOut(1000, function(){
         $("#body").fadeIn(1000);
      });
    });
  };
  

  $('.links li a').on('click', function(e) {
    e.preventDefault()
    alert('you clicked a link, good for you');
  });

  //  - loop through the list itmes in the <ol> and change their text and color to be different from what it is now
  $.each( $('ol li'), function(i, li){
      $(li).css('color', 'red'); 
      $(li).css('background-color', 'lightblue'); 
  });



});