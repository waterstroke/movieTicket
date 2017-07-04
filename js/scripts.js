var Ticket = function(age, movie, time) {
  this.age = age;
  this.movie = movie;
  this.time = time;
}

var multipleTickets = [];

if ()



$(document).ready(function() {
  event.preventDefault();
  $("#add-ticket").click(function() {
  $(".new-ticket").append('<div class="new-ticket">' +
                               '<div class="form-group">' +
                               '<label for="movie">Select Movie</label>' +
                               '<select id="movie" class="custom-select">' +
                                '<option selected>select one</option>' +
                                '<option>Wonder Woman</option>' +
                                '<option>Iron Man</option>' +
                                '<option>Despicable Three</option>' +
                              '</select>' +
                               '</div>' +
                               '<div class="form-group">' +
                                 '<label for="age">Input your age</label>' +
                                 '<input id="age">' +
                               '</div>' +
                               '<div class="form-group">' +
                               '<label for="time">Select a time</label>' +
                               '<select id="time" class="custom-select">' +
                                '<option selected>select one</option>' +
                                '<option>Matinee</option>' +
                                '<option>Afternoon</option>' +
                                '<option>Evening</option>' +
                              '</select>' +
                               '</div>' +
                             '</div>');
});
  $("form#movie-form").submit(function(event) {

  var movie = $("select#movie").val();
  var time = $("select#time").val();
  var age = parseInt($("input#age").val();
  var newTicket = new Ticket(age, movie, time);


  $(".new-ticket").each(function() {
     var additionalAge = $(this).find("input#age").val();
     var additionalMovie = $(this).find("select#movie").val();
     var additionalTime = $(this).find("select#time").val();
     var newTicket = new Ticket(additionalAge, additionalMovie, additionalTime);
     multipleTickets.push(newTicket);
   });



  })
})
