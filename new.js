//forme

function myFunction() {
    let x = document.getElementById("name");
    x.value = x.value.toUpperCase();
  };



$(document).ready(function () {
    $("#menu-icon").click(function () {
        $(".menu2").toggle("2s");
    });
    $(".menu2").click(function(){
        $(".menu2").hide();
    });
   
    $(".cs").click(function () {
        $(".contact-container").toggle("2s");
    });
    
    $(".X").click(function () {
        $(".contact-container").hide("2s");
    });

//home page
$(".home,.logo").click(function(){
    $(".ab-k").hide("2s");
    $(".centaner").hide("2s");
    $(".contener-pj").hide("2s");
    $(".cont-skill").hide("2s");
    $(".contact-container").hide("2s");

});

    //about page
    
    $(".abt").click(function () {
        $(".ab-k").toggle("1.5s")  ;
        $(".cont-skill").hide("2s");
        $(".contener-pj").hide("2s");  
        $(".contact-container").hide("2s");

    });
    //sm
    $(".abt2").click(function () {
        $(".centaner").toggle("2s")  ;
        $(".contact-container").hide("2s");
        $(".contener-pj").hide("2s");
        $(".cont-skill").hide("2s");
    });

    // skill page
    $(".skills-na").click(function(){
        $(".cont-skill").toggle("2s");
        $(".ab-k").hide("2s");
        $(".centaner").hide("2s");
        $(".contener-pj").hide("2s");
        $(".contact-container").hide("2s");

    });
    
//   project 
$(".pro-nav").click(function(){
$(".contener-pj").toggle("2s");
$(".ab-k").hide("2s");
$(".centaner").hide("2s");
$(".cont-skill").hide("2s");
$(".contact-container").hide("2s");

});

});
