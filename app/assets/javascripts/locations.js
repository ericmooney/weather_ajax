// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready(function(){

  $("form[data-remote]").on("submit", function(event){

    var options = {
      type: $(this).attr("method"),
      url: $(this).attr("action") + ".js",

      data: $(this).serialize()
    };


    $.ajax(options);

    event.preventDefault();
  });
});