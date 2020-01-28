// Business Logic

function Ticket(movieName, movieTime, userAge) {
  this.movieName = movieName,
  this.movieTime = movieTime,
  this.userAge = userAge,
  this.cost = 0
};

function checkMovie(ticket) {
  if (ticket.movieName === "first"){
      ticket.cost = 10
      console.log(ticket.cost)
  } else {
      ticket.cost = 5
  }
  checkTime(ticket)
};

function checkTime(ticket) {
  if (ticket.movieTime === "matinee") {
      ticket.cost -= 3
  }
  checkAge(ticket)
};

function checkAge(ticket) {
  if (ticket.userAge >= 65 ) {
     ticket.cost -= (ticket.cost * .1) 
     console.log(ticket.cost)


  }
printTicket(ticket);
}
function printTicket(ticket) {
  $("#ticket").show();
   $("#cost").html(ticket.cost);
}

// User Login
$(document).ready(function() {
  $("#ticket").hide();
  $("form").submit(function(event) {
    event.preventDefault();
    var age = $("#age").val();
    var time = $("#time").val();
    var movie = $("#movie").val();
    var ticket = new Ticket(movie, time, age);
    checkMovie(ticket);
  });
});