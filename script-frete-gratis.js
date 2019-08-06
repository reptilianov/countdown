var dataInicio = new Date("April 18, 2019 09:00:00").getTime();
var dataAtual = new Date().getTime();

if(dataAtual >= dataInicio){

  // Set the date we're counting down to
  var countDownDate = new Date("April 18, 2032 09:00:00").getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    hours = hours < 10 ? '0' + hours : hours; //Adds a 0 before the hour if the number is less than 10. 
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    seconds = seconds < 10 ? '0' + seconds : seconds;

  hours = hours.toString();
  minutes = minutes.toString();
  seconds = seconds.toString();
    

    // Display the result in the element by ids
    document.getElementById("countdownHours1").innerHTML = hours.charAt(0); 
    document.getElementById("countdownHours2").innerHTML = hours.charAt(1);
    document.getElementById("countdownMinutes1").innerHTML =  minutes.charAt(0);
    document.getElementById("countdownMinutes2").innerHTML =  minutes.charAt(1);
    document.getElementById("countdownSeconds1").innerHTML =  seconds.charAt(0);
    document.getElementById("countdownSeconds2").innerHTML =  seconds.charAt(1);

    // When the count down is finished
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("esconder").style.display = "none";
    }
  }, 1000);

}else{
  document.getElementById("esconder").style.display = "none";
}

