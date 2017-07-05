var Ticket = function(age, movie, time) {
  this.age = age;
  this.movie = movie;
  this.time = time;
}
var multipleTickets = [];


Ticket.prototype.ticketPrice = function() {

    if(this.age < 12 || this.age >= 65 || this.time === "Matinee") {
      var discount = "6.00"
      multipleTickets.push(discount);
    } else {
      var discount = "$12.00";
      multipleTickets.push(discount); //Do I need another array within an array.
    }
    return (this.movie + ", playing at " + this.time + ", costs " + discount);
  }


$(document).ready(function() {
  $("#add-ticket").click(function() { //ths is in the additional button
  $("#movie-form").append('<div class="new-ticket">' +
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

    var totals = ticketPrice();
    var newTicket = new Ticket(age, movie, time);

    $(".new-ticket").each(function() {
       var age = $(this).find("input#age").val();
       var movie = $(this).find("select#movie").val();
       var time = $(this).find("select#time").val();
       multipleTickets.push(newTicket);
     });

     $(".ticket").last().click(function() {
      $("#show-ticket").show();
      $(".movie").text(newTicket.movie);// Movie
      $(".time").text(newTicket.time);//TIME
      $(".age").text(newTicket.age);//TIME
      $(".price").text(totals);//Price
      $("ul#multipleTickets").text("");//more than 1
      newTicket.forEach(function(ticket) {
        $("ul#multipleTickets").append("<li>" + ticket.movie + ", " + ticket.time + " " + ticket.age + ", " + totals + "</li>");
      });
    });
    // for (var i = 1; i < ticketPrice.length; i++ ) {
    //       $('#list').append('<li>' + ticketPrice[i] + '</li>');
    //     };
    $("input#age").val("");
    $("select#movie").val("");
    $("select#time").val("");

    console.log(newTicket.ticketPrice());

  });
});


// var movie = $("select#movie").val();
// var time = $("select#time").val();
// var age = parseInt($("input#age").val();
// var newTicket = new Ticket(age, movie, time);
