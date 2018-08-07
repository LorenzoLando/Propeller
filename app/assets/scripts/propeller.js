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


console.log(myObject);


//quando clicco su una sezione
$(".section").click(function(){
	$(this).toggleClass("section--selected");
});
//mostra la sezione di testo corrispondente
//riprendi il testo dall`oggetto
//









//display pe far vedere i dati

// function renderHTML(data) {
//    var htmlString  = "";
//     for(i = 0; i < data.length; i++) {
//     htmlString += "<p>" + data[i].AltName+ " telephone number is: "; ;
//     htmlString += data[i].PhoneNumber + " is located in ";
//     htmlString +=  data[i].Town + " and the Postcode is ";
//     htmlString +=  data[i].PostCode + ".</p>";

//   }

//   $("#info").append(htmlString);

// }





//il risultato sembra essere un oggetto guarda come fare ad accedere a tutte le propieta`

// $("#btn").on("click", function(){
//     renderHTML(myObject);
//     $(this).addClass("hide-me");
    

//   });





