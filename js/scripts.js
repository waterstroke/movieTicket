var Ticket = function(age, movie, time) {
  this.age = age;
  this.movie = movie;
  this.time = time;
  this.price = "0";
};

var multipleTickets = [];

Ticket.prototype.ticketPrice = function() {

    if(this.age < 12 || this.age >= 65 || this.time === "Matinee") {
      var discount = "6.00";
      this.price = discount;
    } else {
      var discount = "$12.00";
      this.price = discount;
    }

    return (this.movie + ", playing at " + this.time + ", costs " + discount);
  };


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

    event.preventDefault();

    $(".new-ticket").each(function() {
       var age = $(this).find("input#age").val();
       var movie = $(this).find("select#movie").val();
       var time = $(this).find("select#time").val();
       var newTicket = new Ticket(age, movie, time);
       newTicket.ticketPrice()
       multipleTickets.push(newTicket);
     });
     for (var i = 0; i < multipleTickets.length; i++ ) {
       var newTicket = multipleTickets[i];
       $('#show-tickets ul').append('<li class="ticket">' + multipleTickets[i].movie + '</li>');
     };
     $("#show-tickets").show();

     $(".ticket").last().click(function() {
      $(".movie").text(newTicket.movie);// Movie
      $(".time").text(newTicket.time);//TIME
      $(".age").text(newTicket.age);//TIME
      $(".price").text(newTicket.price);//Price
      // $("ul#multipleTickets").text("");//more than 1
      // newTicket.forEach(function(ticket) {
      //   $("ul#show-tickets").append("<ul>" + ticket.movie + ", " + ticket.time + " " + ticket.age + ", " + totals + "</ul>");
      // });
    });

    $("input#age").val("");
    $("select#movie").val("");
    $("select#time").val("");



    console.log(multipleTickets);

  });
});



// var movie = $("select#movie").val();
// var time = $("select#time").val();
// var age = parseInt($("input#age").val();
// var newTicket = new Ticket(age, movie, time);
