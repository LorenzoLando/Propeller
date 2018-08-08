$.ajax
({
  type: "GET",
  url: "https://design.propcom.co.uk/buildtest/accordion-data.json",
  dataType: 'json',
  async: false,
  headers: {
},

  data: '{ "comment" }',
  success: function (data){
    myObject = data.blocks;
  }
});

var testo1 = myObject[0].content;
var testo2 = myObject[1].content;
var testo3 = myObject[2].content;




$('section').slideUp();
//animazione
//quando clicco su una sezione
$(".section").click(function(){
  //
    $(".section").removeClass("section--selected");
    $('span').removeClass("fa-angle-up").addClass("fa-angle-down");
    $('section').slideUp();
    //la sezione viene evidenziata
    $(this).addClass("section--selected");
    $(this).find('span').removeClass("fa-angle-down").addClass("fa-angle-up");
    $(this).next().slideDown();
    $(this).next().slideDown();
    //attacca testo01 a tutte le sezioni
    if($(this).hasClass("1")) {
      $(".info").text(testo1);
    } else if ($(this).hasClass("2")) {
      $(".info").text(testo2);
    } else if ($(this).hasClass("3")) {
      $(".info").text(testo3);
    }

});
