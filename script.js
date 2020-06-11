/* Translation button in Navbar */

const translateToEnglish = () => {
    $(".english").css("display", "block")
    $(".spanish").css("display", "none")
  }
  
  
  const translateToSpanish = () => {
    $(".english").css("display", "none")
    $(".spanish").css("display", "block")
  }
  

/* flip card about page */
jQuery(document).ready(function($){
  $( ".card .flipButton" ).click(function() {
    $( this ).closest(".card").toggleClass( "flip" );
  });
});