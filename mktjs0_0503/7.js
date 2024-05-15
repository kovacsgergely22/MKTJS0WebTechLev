$(document).ready(function(){
  $("#addText").click(function(){
    $("#box").append(" <b>Programtervező informatikus</b>.");
  });

  $("#button1").click(function(){
    $(this).prepend("<b>MI </b>");
  });

  $("#newButton").click(function(){
    $("a").after("<button>ME GEIK-MI</button>");
  });

  $("#newHeader").click(function(){
    $("#header1").before("<h1>JQuery feladat</h1>");
  });

  $("#newh2").click(function(){
    $("#header1").after("<h2>HTML metódusok</h2>");
  });

  $("#formHead").click(function(){
    $("#formHeader").after("<h2>ŰRLAP-NEPTUNKÓD</h2>");
  });
});