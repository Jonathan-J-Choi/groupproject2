// For testing api
console.log('app.js loaded');

function flight() {
  let start = $("#start :selected").val();
  let end = $("#end :selected").val();
  $.ajax({
    url: `https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/cheap?destination=${end}&origin=${start}&currency=USD&page=1`,
    method: "GET",
    headers: {
      "x-rapidapi-host":
        "travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com",
      "x-rapidapi-key": "aa3dd9aaf7msh72e32624a82ff64p19458djsnf620a5c313c0",
      "x-access-token": "67284ded587b515fc873b2264829b953"
    }
  }).done(function(response) {
    console.log(response.data);
  });
}
//on click gets value of input fields and creates new object//
$("#add-new").on("click", function(event) {
  console.log("clicked");
  event.preventDefault();

  var newCountry = {
    country: $("#country")
      .val()
      .trim(),
    hello: $("#hello")
      .val()
      .trim(),
    goodbye: $("#goodbye")
      .val()
      .trim(),
    thankyou: $("#thankyou")
      .val()
      .trim(),
    excuseme: $("#excuseme")
      .val()
      .trim(),
    mayi: $("#mayi")
      .val()
      .trim(),
    howmuch: $("#howmuch")
      .val()
      .trim(),
    bathroom: $("#bathroom")
      .val()
      .trim(),
    yesno: $("#yesno")
      .val()
      .trim(),
    allergy: $("#allergy")
      .val()
      .trim(),
    whereis: $("#whereis")
      .val()
      .trim(),
    help: $("#help")
      .val()
      .trim(),
    sorry: $("#sorry")
      .val()
      .trim()
  };
 console.log(newCountry);
  $.post("/api/flights", newCountry)
   .then(function(data){
    console.log(data); 
  })

  //clears out fields//
  $("#country").val("")
  $("#hello").val("")
  $("#goodbye").val("")
  $("#thankyou").val("")
  $("#excuseme").val("")
  $("#mayi").val("")
  $("#howmuch").val("")
  $("#bathroom").val("")
  $("#yesno").val("")
  $("#allergy").val("")
  $("#whereis").val("")
  $("#help").val("")
  $("#sorry").val("")
});

//  Show phrases on click
$("#go").on("click", function() {
  $("#airport").addClass("is-hidden");
  $("#phrases").removeClass("is-hidden");
  $("#avrg").removeClass("is-hidden");
  GetSelectedStart();
  GetSelectedEnd();
  flight();
});
