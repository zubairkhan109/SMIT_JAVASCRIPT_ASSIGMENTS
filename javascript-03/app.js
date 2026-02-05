var year = +prompt("Enter Your Birth Year?");
var month = +prompt("Enter Your Birth Month? (1-12)");
var date = +prompt("Enter Your Birth Date?");

var today = new Date();

var currentYear = today.getFullYear();
var currentMonth = today.getMonth() + 1; 
var currentDate = today.getDate();

var age = currentYear - year;

if (
  currentMonth < month || (currentMonth === month && currentDate < date)
) {
  age--;
}

alert(
  "Your Birth Date: " + year + "-" + month + "-" + date +
  "\nToday: " + currentYear + "-" + currentMonth + "-" + currentDate +
  "\nYour Age: " + age + " years"
);

var ok = confirm("Do You Want To Play Again?");
if (ok) {
  window.location.reload();
}














